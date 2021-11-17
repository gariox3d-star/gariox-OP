let handler = async (m, { conn, text }) => {
  conn.fakeReply(m.chat, '*_Making.. Please wait_* ', '0@s.whatsapp.net', '*G∆RIOX  BOT*')
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teks }), 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']

handler.command = /^attp$/i

module.exports = handler
