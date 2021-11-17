let util = require('util')
let simple = require('./lib/simple')
let { MessageType } = require('@adiwajshing/baileys')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  async handler(chatUpdate) {
    // console.log(chatUpdate)
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    try {
      simple.smsg(this, m)
      switch (m.mtype) {
        case MessageType.image:
        case MessageType.video:
        case MessageType.audio:
          if (!m.key.fromMe) await delay(1000)
          if (!m.msg.url) await this.updateMediaMessage(m)
          break
      }
      m.exp = 0
      m.limit = false
      try {
        let user = global.DATABASE._data.users[m.sender]
        if (typeof user !== 'object') global.DATABASE._data.users[m.sender] = {}
        if (user) {
          if (!isNumber(user.exp)) user.exp = 0
          if (!isNumber(user.limit)) user.limit = 10
          if (!isNumber(user.lastclaim)) user.lastclaim = 0
          if (!('registered' in user)) user.registered = false
          if (!user.registered) {
            if (!('name' in user)) user.name = this.getName(m.sender)
            if (!isNumber(user.age)) user.age = -1
            if (!isNumber(user.regTime)) user.regTime = -1
          }
          if (!isNumber(user.afk)) user.afk = -1
          if (!('afkReason' in user)) user.afkReason = ''
          if (!('banned' in user)) user.banned = false
          if (!isNumber(user.level)) user.level = 0
          if (!('autolevelup' in user)) user.autolevelup = false
          if (!isNumber(user.healt)) user.healt = 0
          if (!isNumber(user.level)) user.level = 0
          if (!isNumber(user.money)) user.money = 0
            
          if (!isNumber(user.diamond)) user.diamond = 0
          if (!isNumber(user.iron)) user.iron = 0

          if (!isNumber(user.common)) user.common = 0
          if (!isNumber(user.uncommon)) user.uncommon = 0
          if (!isNumber(user.mythic)) user.mythic = 0
          if (!isNumber(user.legendary)) user.legendary = 0
          if (!isNumber(user.pet)) user.pet = 0
        
          if (!isNumber(user.potion)) user.potion = 0
          if (!isNumber(user.trash)) user.trash = 0
          if (!isNumber(user.armor)) user.armor = 0
            
          if (!isNumber(user.cat)) user.cat = 0
          if (!isNumber(user.catlastclaim)) user.catlastclaim = 0
          if (!isNumber(user.horse)) user.horse = 0
          if (!isNumber(user.horselastclaim)) user.horselastclaim = 0
          if (!isNumber(user.fox)) user.fox = 0
          if (!isNumber(user.foxlastclaim)) user.foxlastclaim = 0
          if (!isNumber(user.dog)) user.dog = 0
          if (!isNumber(user.doglastclaim)) user.doglastclaim = 0

        
          if (!isNumber(user.childcat)) user.childcat = 0
          if (!isNumber(user.childhorse)) user.childhorse = 0
          if (!isNumber(user.childfox)) user.childfox = 0
          if (!isNumber(user.childdog)) user.childdog = 0
          if (!isNumber(user.petfood)) user.petfood = 0

          if (!isNumber(user.antispam)) user.antispam = 0
          if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0

          if (!isNumber(user.wood)) user.wood = 0
          if (!isNumber(user.rock)) user.rock = 0
          if (!isNumber(user.string)) user.string = 0
          if (!isNumber(user.sword)) user.sword = 0
          if (!isNumber(user.sworddurability)) user.sworddurability = 0
          if (!isNumber(user.pickaxe)) user.pickaxe = 0
          if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
          if (!isNumber(user.fishingrod)) user.fishingrod = 0
          if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0

			//fishing
			if (!isNumber(user.whale)) user.whale = 0
     if (!isNumber(user.crab)) user.crab = 0
     if (!isNumber(user.octopus)) user.octopus = 0
     if (!isNumber(user.squid)) user.squid= 0
     if (!isNumber(user.bloated)) user.bloated = 0
     if (!isNumber(user.dory)) user.dory = 0
     if (!isNumber(user.dolphin)) user.dolphin = 0
     if (!isNumber(user.lobster)) user.lobster = 0
     if (!isNumber(user.shark)) user.shark = 0
     if (!isNumber(user.shrimp)) user.shrimp = 0
     if (!isNumber(user.fish)) user.fish = 0
     if (!isNumber(user.orca)) user.orca = 0
        
        if (!isNumber(user.bull)) user.bull = 0
     if (!isNumber(user.tiger)) user.tiger = 0
     if (!isNumber(user.elephant)) user.elephant = 0
     if (!isNumber(user.goat)) user.goat = 0
     if (!isNumber(user.panda)) user.panda = 0
     if (!isNumber(user.crocodile)) user.crocodile = 0
     if (!isNumber(user.buffalo)) user.buffalo = 0
     if (!isNumber(user.cow)) user.cow = 0
     if (!isNumber(user.ape)) user.ape = 0
     if (!isNumber(user.wildboar)) user.wildboar = 0
     if (!isNumber(user.pig)) user.pig = 0
     if (!isNumber(user.chicken)) user.chicken = 0
 
            if (!isNumber(user.lastadventure)) user.lastadventure = 0
            if (!isNumber(user.lastfishing)) user.lastfishing = 0
            if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
            if (!isNumber(user.lastduel)) user.lastduel = 0
            if (!isNumber(user.lastmining)) user.lastmining = 0
            if (!isNumber(user.lasthunt)) user.lasthunt = 0
            if (!isNumber(user.lastweekly)) user.lastweekly = 0
            if (!isNumber(user.lastmonthly)) user.lastmontly = 0
            if (!('registered' in user)) user.registered = false
            if (!user.registered) {
                if (!('name' in user)) user.name = this.getName(m.sender)
                if (!isNumber(user.age)) user.age = -1
                if (!isNumber(user.regTime)) user.regTime = -1
            }
            if (!isNumber(user.level)) user.level = 0
            if (!user.role) user.role = 'Newbie ㋡'
            if (!('autolevelup' in user)) user.autolevelup = false
        } else global.DATABASE._data.users[m.sender] = {
            healt: 100,
            level: 0,
            exp: 0,
            coin: 0,
            limit: 10,
            tigame: 1000,
            lastclaim: 0,
            money: 0,
            diamond: 0,
            iron: 0,
            common: 0,
            uncommon: 0,
            mythic: 0,
            legendary: 0,
            //mancing
     as: 0,
    whale: 0,
    crab: 0,
    octopus: 0,
    squid: 0,
    bloated: 0,
    dory: 0,
    dolphin: 0,
    lobster: 0,
    shark: 0,
    shrimp: 0,
    fish: 0,
    orca: 0,
    bull: 0,
    tiger: 0,
    elephant: 0,
    goat: 0,
    panda: 0,
    crocodile: 0,
    buffalo : 0,
    cow: 0,
    ape : 0,
    wildboar: 0,
    pig: 0,
    chicken: 0,
            pet: 0,
            potion: 0,
            trash: 0,
            armor: 0,
            cat: 0,
            catlastclaim: 0,
            horse: 0,
            horselastclaim: 0,
            fox: 0,
            foxlastclaim: 0,
            dog: 0,
            doglastclaim: 0,
            Banneduser: false,
            BannedReason: '',
            warn: 0,
            afk: -1,
            afkReason: '',
            kidcat: 0,
            kidhorse: 0,
            kidfox: 0,
            kiddog: 0,
            foodpet: 0,
            antispam: 0,
            antispamlastclaim: 0,
            wood: 0,
            stone: 0,
            string: 0,
            sword: 0,
            sworddurability: 0,
            pickaxe: 0,
            pickaxedurability: 0,
            fishingrod: 0,
            fishingroddurability: 0,
            lastadventure: 0,
            lastfishing: 0,
            lastdungeon: 0,
            lastduel: 0,
            lastmining: 0,
            lasthunt: 0,
            lastweekly: 0,
            lastmonthly: 0,
            registered: false,
            name: this.getName(m.sender),
            age: -1,
            regTime: -1,
            role: 'Newbie ㋡', 
            autolevelup: true,
        }


        let chat = global.DATABASE._data.chats[m.chat]
        if (typeof chat !== 'object') global.DATABASE._data.chats[m.chat] = {}
        if (chat) {
          if (!('isBanned' in chat)) chat.isBanned = false
          if (!('welcome' in chat)) chat.welcome = false
          if (!('detect' in chat)) chat.detect = false
          if (!('sWelcome' in chat)) chat.sWelcome = ''
          if (!('sBye' in chat)) chat.sBye = ''
          if (!('sPromote' in chat)) chat.sPromote = ''
          if (!('sDemote' in chat)) chat.sDemote = ''
          if (!('delete' in chat)) chat.delete = true
          if (!('antiLink' in chat)) chat.antiLink = false
        } else global.DATABASE._data.chats[m.chat] = {
          isBanned: false,
          welcome: false,
          detect: false,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          delete: true,
          antiLink: false,
        }
      } catch (e) {
        console.error(e)
      }
      if (opts['nyimak']) return
      if (!m.fromMe && opts['self']) return
      if (typeof m.text !== 'string') m.text = ''
      if (typeof m.text !== 'string') m.text = ''
this.chatRead(m.chat)
      if (m.chat == 'status@broadcast') return
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!plugin.all) continue
        if (typeof plugin.all !== 'function') continue
        try {
          await plugin.all.call(this, m, chatUpdate)
        } catch (e) {
          if (typeof e === 'string') continue
          console.error(e)
        }
      }
      if (m.isBaileys) return
      m.exp += Math.ceil(Math.random() * 10)

      let usedPrefix
      let _user = global.DATABASE.data && global.DATABASE.data.users && global.DATABASE.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe
      let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let groupMetadata = m.isGroup ? this.chats.get(m.chat).metadata || await this.groupMetadata(m.chat) : {} || {}
      let participants = m.isGroup ? groupMetadata.participants : [] || []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} // User Data
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {} // Your Data
      let isAdmin = user.isAdmin || user.isSuperAdmin || false // Is User Admin?
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false // Are you Admin?
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
        let match = (_prefix instanceof RegExp ? // RegExp Mode?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? // Array?
            _prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof _prefix === 'string' ? // String?
              [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
        })) continue
        if (typeof plugin !== 'function') continue
        if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
          let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
          command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail // When failed
          let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ? // Array?
              plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ? // String?
                plugin.command === command :
                false

  			if (!isAccept) continue
        m.plugin = name
        if (m.chat in global.DATABASE._data.chats || m.sender in global.DATABASE._data.users) {
          let chat = global.DATABASE._data.chats[m.chat]
          let user = global.DATABASE._data.users[m.sender]  
          if (chat.isBanned == true || user.Banneduser == true) {
              if (name != 'math_answer.js' && name != '_afk.js' && name != 'leveling.js') {               
                  this.reply(m.chat, '*You are Banned*\nJoin Official Group GARIOX Bot for further information\n\n https://chat.whatsapp.com/ElHC6EOyCCR0pEU9Vpv9O3 \n\n*Or contact wa.me/916207142994*', m) 
              }
          }
          if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.DATABASE._data.chats || m.sender in global.DATABASE._data.users) {
            let chat = global.DATABASE._data.chats[m.chat]
            let user = global.DATABASE._data.users[m.sender]
            if (name != 'unbanchat.js' && chat && chat.isBanned) return // Except this
            if (name != 'unbanuser.js' && user && user.banned) return
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { // Real Owner
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) { // Number Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.mods && !isMods) { // Moderator
            fail('mods', m, this)
            continue
          }
          if (plugin.premium && !isPrems) { // Premium
            fail('premium', m, this)
            continue
          }
          if (plugin.group && !m.isGroup) { // Group Only
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) { // User Admin
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) { // Private Chat Only
            fail('private', m, this)
            continue
          }
          if (plugin.register == true && _user.registered == false) { // Butuh daftar?
            fail('unreg', m, this)
            continue
          }
        }
        global.DATABASE._data.users[m.sender].antispam += 1
        if (new Date - global.DATABASE._data.users[m.sender].antispamlastclaim > 1000) {
            global.DATABASE._data.users[m.sender].antispam = 0
        }
        if (global.DATABASE._data.users[m.sender].antispam > 3) {
            if (isROwner) return
            if (isOwner) return
            if (isMods) return
            if (!isOwner && !isMods && !isROwner) {
                global.DATABASE._data.users[m.sender].antispam = 0
                global.DATABASE._data.users[m.sender].warn += 1
                this.reply(m.chat, '*You get a warn for being spammed*\n*remember if you get a warn 4 times you will automatically be BANNED*')
                this.sendMessage('916207142994@s.whatsapp.net',  `${m.sender.split`@`[0]} *SPAM*`, false, { 
                    contextInfo: {
                        mentionedJid: [m.sender]
                    }
                })
            }
        }
          m.isCommand = true
          let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
          if (xp > 200) m.reply('squeak -_-') // Hehehe
          else m.exp += xp
          if (!isPrems && plugin.limit && global.DATABASE._data.users[m.sender].limit < plugin.limit * 1) {
            this.reply(m.chat, `Your limit is up, please *${usedPrefix}buy*`, m)
            continue // Limit habis
          }
          let extra = {
            match,
            usedPrefix,
            noPrefix,
            _args,
            args,
            command,
            text,
            conn: this,
            participants,
            groupMetadata,
            user,
            bot,
            isROwner,
            isOwner,
            isAdmin,
            isBotAdmin,
            isPrems,
            chatUpdate,
          }
          try {
            await plugin.call(this, m, extra)
            if (!isPrems) m.limit = m.limit || plugin.limit || false
          } catch (e) {
            // Error occured
            m.error = e
            console.error(e)
            if (e) {
              let text = util.format(e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
              m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user))
            if (typeof plugin.after === 'function') {
              try {
                await plugin.after.call(this, m, extra)
              } catch (e) {
                console.error(e)
              }
            }
            if (m.limit) m.reply(+ m.limit + ' Limit used')
          }
          break
        }
      }
    } finally {
      //console.log(global.DATABASE._data.users[m.sender])
      let user, stats = global.DATABASE._data.stats
      if (m) {
        if (m.sender && (user = global.DATABASE._data.users[m.sender])) {
          user.exp += m.exp
          user.limit -= m.limit * 1
        }

        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (m.error == null) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      }

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
    }
  },
  async participantsUpdate({ jid, participants, action }) {
    let chat = global.DATABASE._data.chats[jid] || {}
    let text = ''
    switch (action) {
      case 'add':
      case 'remove':
        if (chat.welcome) {
          for (let user of participants) {
            let pp = './src/avatar_contact.png'
            try {
              pp = await this.getProfilePicture(user)
            } catch (e) {
            } finally {
              text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', this.getName(jid)) :
                (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0])
              this.sendFile(jid, pp, 'pp.jpg', text, null, false, {
                contextInfo: {
                  mentionedJid: [user]
                }
              })
            }
          }
        }
        break
      case 'promote':
        text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
      case 'demote':
        if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
        text = text.replace('@user', '@' + participants[0].split('@')[0])
        if (chat.detect) this.sendMessage(jid, text, MessageType.extendedText, {
          contextInfo: {
            mentionedJid: this.parseMention(text)
          }
        })
        break
    }
  },
  async delete(m) {
    if (m.key.fromMe) return
    let chat = global.DATABASE._data.chats[m.key.remoteJid]
    if (chat.delete) return
    await this.reply(m.key.remoteJid, `
Detected @${m.participant.split`@`[0]} deleted message

If You are BAD 😎
*Then Call me Your DAD 😈*
`.trim(), m.message, {
      contextInfo: {
        mentionedJid: [m.participant]
      }
    })
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: 'This command can only be used by _*OWWNER!1!1!*_',
    owner: 'This command can only be used by _*Owner Bot*_!',
    beta: '*Beta Testing...try it later*',
    mods: 'This command can only be used by _*Moderator*_ !',
    premium: 'This command is only for members _*Premium*_ !',
    group: 'This command can only be used in groups!',
    private: 'This command can only be used in Private Chat!',
    admin: 'This command is only for *Admin* grup!',
    botAdmin: 'Make bot as *Admin* to use this command!',
    unreg: 'Please register to use this feature by typing:\n\n*#register name.age*\n\nExample: *#register gariox.18*'
  }[type]
  if (msg) return m.reply(msg)
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})
