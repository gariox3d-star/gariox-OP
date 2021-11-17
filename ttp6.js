const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker.js')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {

 try {
  if (!text) throw 'Add text?'
  if (text) {
   await m.reply('Making Please Wait.')
    let img = await (await fetch('http://zekais-api.herokuapp.com/text2png?text=' + encodeURIComponent(text) + '&color=white')).buffer()
    if (!img) throw img
    let stiker = await sticker(img, false, 'TTP', 'mimin')
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
 } catch (e) {
   m.reply('Error!')
  }
}
handler.help = ['ttp6 <text>']
handler.tags = ['sticker']
handler.command = /^ttp6$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null

module.exports = handler