let fs = require('fs')
let path = require('path')

let handler = m => m

handler.all = async function (m) {
    this.lastSetStatus = this.lastSetStatus ? this.lastSetStatus : {}
    this.lastBackup = this.lastBackup ? this.lastBackup : {}
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Open this link')) && !m.isBaileys && !m.isGroup) {
        m.reply('Type !owner, just keep chatting bro')
    }

    let reg = /(plox)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`Hey I Am Error \nA Whatsapp BOT \nHow Are You ? \nWant to Start BOT Type #menu`)
    }

    if (!(this.lastSetStatus) || !isNumber(this.lastSetStatus)) this.lastSetStatus = 0
    if (new Date - this.lastSetStatus > 10000) {
        let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
        let npmname = package.name
        let npmdesc = package.description
        let version = package.version
        let github = package.homepage ? package.homepage.url || package.homepage : '[unknown github url]'
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        let _muptime = await muptime()
        let random = [
            `Active during ${uptime} ( ${_muptime} ) | Mode: ${global.opts['self'] ? 'Private' : 'public'} |  any questions chat / owner`,
            `Mode: ${global.opts['self'] ? 'Private' : 'public'}`,
            `any questions chat / owner`,
            `Active during ${uptime} ( ${_muptime} )`,
            `Don't call bots, because bots are busy`,
            `I am Error 🤖 Made with ❤️ By Gariox`,
            `I make mistakes growing up. I'm not perfect; I'm not a robot.`,
            `I am not a robot. I have a heart and I bleed.`,
            `The story of 'ERROR' is really about this guy who's lonely - who's alone and feels so disconnected from the world.`,
            `type /menu`,
            `Bot lag Be patient :)`,
            `${npmname}${version}\n ${npmdesc}`,
            `Bot version ${version}`,
            `${npmname}`
        ]
        await this.setStatus(pickRandom(random)).catch(_ => _)
        this.lastSetStatus = new Date * 1
    }
    
    if (!(this.lastBackup) || !isNumber(this.lastBackup)) this.lastBackup = 0
    if (new Date - this.lastBackup > (1000 * 60 * 10)) {
        await global.DATABASE.save()
        let d = new Date
        let date = d.toLocaleDateString('IST', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })
    
    }
    
    let user = global.DATABASE._data.users[m.sender]
    if ((user.money * 1) > 99999998) {
        user.money = 99999999
    } else if ((user.money * 1) < 0) {
        user.money = 0
    }
    if ((user.healt * 1) > 100) {
        user.healt = 100
    } else if ((user.money * 1) < 0) {
        user.healt = 0
    }
}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(arr) {
    return arr[Math.round(arr.length * Math.random())]
}

function isNumber(x) {
    x = parseInt(x)
    return typeof x == 'number' && !isNaN(x)
}

async function muptime() {
    let _muptime
    if (process.send) {
        process.send('uptime')
        _muptime = await new Promise(resolve => {
            process.once('message', resolve)
            setTimeout(resolve, 1000)
        }) * 1000
    }
    return clockString(_muptime)
}