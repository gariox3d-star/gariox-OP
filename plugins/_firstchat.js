let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    let user = global.DATABASE._data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hey, ${ucapan()}
${user.banned ? 'you are banned' : 'Can I help you?'}
`.trim(), 'Made with ❤️ by Gariox ', user.banned ? 'Owner BOT' : '.Quotes', user.banned ? '.owner' : ',?', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Kolkata').format('HH')
    res = "Good Morning 🌞"
    if (time >= 4) {
        res = "Good morning 🌞"
    }
    if (time > 10) {
        res = "Good Afternoon 🌥️🌞"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌥️🌞"
    }
    if (time >= 18) {
        res = "Good Night 😴😘"
    }
    return res
}