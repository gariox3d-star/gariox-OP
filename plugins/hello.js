let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let str = `
Hello 👋 *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*\nHow Are you ? 😊 
`.trim()
    conn.reply(m.chat, str, m)
}
handler.customPrefix = /^(hailo|hlo|hello|hii|halo|hi|hey)$/i
handler.command = new RegExp

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
