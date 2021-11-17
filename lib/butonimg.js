/**
     * Send Button
     * @param {String} jid
     * @param {String} content
     * @param {String} footer
     * @param {buffer} buffer
     * @param {Array} button
     * @param {Object} options
     */
    async sendButton(jid, content, footer, buffer = null, button = [], options = {}) {
      if (button.length < 1 || !button) throw new Error('ButtonId and Button Text not found')

      const buttons = []
      for (let b of button) {
        buttons.push({
          buttonId: b[1] || b[0] || '',
          buttonText: {
            displayText: b[0] || b[1] || ''
          },
          type: 1
        })
      }

      if (buttons.length < 1 || !buttons) throw new Error('Data in Buttons is empty')

      let optsLoc = (options.location || options.loc || options.locationMessage) || false
      let buttonMessage = {}
      if (buffer && optsLoc) buttonMessage.locationMessage = { jpegThumbnail: buffer }
      buttonMessage = {
        ...buttonMessage,
        contentText: content,
        footerText: footer,
        buttons: buttons,
        headerType: (optsLoc ? 6 : 1) || 1,
      }
      if (buffer && !optsLoc) {
        try { buffer = await (await this.getFile(buffer)).data }
        catch (e) {
          console.error(e)
          buffer = e
        }
        if (Buffer.isBuffer(buffer)) {
          const m = await this.prepareMessageMedia(buffer, MessageType.image) || {}
          buttonMessage.headerType = 4
          buttonMessage.imageMessage = m.imageMessage
        }
      }

      return await this.sendMessage(jid, buttonMessage, MessageType.buttonsMessage, { ...options })
    }