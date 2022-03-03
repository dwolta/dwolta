const Discord = require("discord.js")
const client = new Discord.Client()
const disbut = require('discord-buttons');
const { MessageEmbed } = require('discord.js');
//const keepAlive = require("./keepalive")
const prefix = `+`
require("discord-buttons")(client);
const db = require("quick.db")
const chalk = require("chalk")
const botname = "Mode"
const fs = require("fs")
let promote = false;
const ms = require("ms")
const premiumid = "797374206928748557"
const premiumid1 = "832122836138459136"
const premium2 = "657571833746423808"
const premium3 = "521467451725185044"
const https = require('https');
 const url = 'https://www.reddit.com/r/memes/hot/.json?limit=100';
 const { MessageActionRow, MessageSelectMenu } = require('discord.js');
client.on("ready", () => {
  console.log((chalk.blue.bold(`
=====================================  
[ Prefix ] +                        |
[ Bot name ] Mode                   |
[ Ready ] Mode#4025 is ready        |
=====================================`)))
})
client.on("message", message => {
  if (message.channel.type === "dm") return;
})
client.on('message', function(message){
	if(message.channel.type === 'dm') return;
 const commandBody = message.content.slice(prefix.length);
		  const args = commandBody.split(' ');
	 const command = args.shift().toLowerCase();
	  const user = "<@" + message.author.id + ">";
if(!promote) return;
	  const dick = message.author.user;
	if (message.content === 'discord.gg/' || (message.content.includes('discord.gg/' || (message.content === 'https://discord.gg/' || (message.content.includes('https://discord.gg/')))))) {
	if (message.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
  message.channel.send('stop promoting discord servers in here ' + user);
    message.delete();
  return;
	}else {
		 	  message.channel.send('lol' + user + 'Last warning');
			  return;
	}
	}
});

/*client.on('ready', () => {
 client.user.setActivity('+help | +invite', { type: 'LISTENING' })
})
*/

  
var emojis = require('emoji.json')
emojis = Object.values(emojis)

function rdm(max) {
    return Math.floor(Math.random() * max);
} // OMG SKID HE SKID OFF STACK OVER LOW..,

let acm = {}
client.on('message', async m => {
    if (!m.guild) return;
    if (m.content == '+beta') {
        if (acm[m.author.id]) {
            m.channel.send('You are being rate limited.');
            return;
        }
        let emoji = emojis[parseInt(Math.random() * emojis.length)]
        let bad = emojis[parseInt(Math.random() * emojis.length)]
        if (bad == emoji) {
            bad = emojis[parseInt(Math.random() * emojis.length)]
            if (bad == emoji) {
                bad = emojis[parseInt(Math.random() * emojis.length)]
                if (bad == emoji) {
                    bad = emojis[parseInt(Math.random() * emojis.length)]
                }
                if (bad == emoji) {
                    bad = {
                        'char': 'ok',
                        'name': 'ok'
                    }
                } // yes ik ik fuck u tho - yandere dev 2.0
            }
        }
        let button = new disbut.MessageButton()
            .setStyle('gray') //default: blurple
            .setLabel(emoji['char']) //default: NO_LABEL_PROVIDED
            .setID('v_bot')

        let btn2 = new disbut.MessageButton()
            .setStyle('gray') //default: blurple
            .setLabel(bad['char']) //default: NO_LABEL_PROVIDED
            .setID('v_bot_inv')

        var rdmn = rdm(2)
        if (rdmn == 0) {
            m.author.send('Click the ``' + emoji['name'] + '`` button', {
                buttons: [
                    button, btn2
                ]
            }).catch(() => {
                m.channel.send('Couldnt DM you.')
                return;
            })
            acm[m.author.id] = {
                'message': m,
                'guild': m.guild.id,
            }
        } else {
            m.author.send('Click the ``' + emoji['name'] + '`` button', {
                buttons: [
                    btn2, button
                ]
            }).catch(() => {
                m.channel.send('Couldnt DM you.')
                return;
            })
            acm[m.author.id] = {
                'message': m,
                'guild': m.guild.id,
            }
        }

    }
})



client.on('clickButton', async (button) => {
    if (button.id === 'v_bot') {
        if (acm[button.clicker.user.id.toString()]) {
            var m = acm[button.clicker.user.id.toString()]['message']
            var role = m.guild.roles.cache.find(role => role.name === "Verified");
            await m.member.roles.add(role)
            button.channel.send(`Verified.`);
            button.message.delete()

            console.log(acm[button.clicker.user.id.toString()])
            setTimeout(() => {
                acm[button.clicker.user.id.toString()] = null
            }, 30000);
        } else {
            button.channel.send('Invalid verification request, try again.')
        }
    } else {
        if (acm[button.clicker.user.id.toString()]) {

            console.log('failed')
            button.message.delete()
            button.channel.send('Verification Failed - Wait 30 seconds to try again after rejoining.')
            var men = acm[button.clicker.user.id.toString()]['message'].member
            men.kick('Verification Failed - Wait 30 seconds to try again after rejoining.')
            setTimeout(() => {
                acm[button.clicker.user.id.toString()] = null
            }, 30000);
        } else {
            button.channel.send('Invalid verification request, try again.')
        }
    }
});

  client.on("ready", () => {
const x = client.guilds.cache.size
client.user.setActivity(x + " servers | +invite", {
    status: "STREAMING",
    type: "STREAMING",
   url: "https://www.twitch.tv/Mode"
});
  });
  client.on("guildCreate", guild => {


  const ID = "797374206928748557";

  const channel = client.channels.cache.get(ID);

  const sowner = guild.owner.user;

  if (!channel) return;

  const embed = new MessageEmbed()

    .setTitle("**I Joined a Server!**")

    .addField(`**SERVER NAME**`, `\`\`\`${guild.name}\`\`\``)

    .addField(`**SERVER ID**`, `\`\`\`${guild.id}\`\`\``)

    .addField(`**SERVER OWNER**`, `\`\`\`${sowner.tag}\`\`\``)

    .addField(`**OWNER ID**`, `\`\`\`${sowner.id}\`\`\``)
 
    .addField(`**CREATED ON**`, `\`\`\`${guild.createdAt}\`\`\``)
  
    .addField(`**MEMBERS**`, `\`\`\`${guild.memberCount}\`\`\``)
  
    .setTimestamp()

    .setColor("32CD32")

    .setFooter(`Servers Count - ${client.guilds.cache.size}`);

  channel.send(embed);

});

client.on("message", async message => {
  if(message.content.startsWith("+rwarns")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "Yopu should have admin perms to use this command"
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Please mention the person whose warning you want to reset");
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("Bot are not allowed to have warnings");
    }

    if (message.author.id === user.id) {
      return message.channel.send("You are not allowed to reset your warnings");
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} do not have any warnings`);
    }

    db.delete(`warnings_${message.guild.id}_${user.id}`);
    user.send(
      `Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`
    );
    await message.channel.send(
      `Reseted all warnings of ${message.mentions.users.first().username}`
    );
  }
  })
  /*
  client.on("message", message => {
    if(message.content.startsWith("+channelinfo")) {
      let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.channel;
        if (!channel) return message.channel.send("**Channel Not Found!**");

        let channelembed = new MessageEmbed()
            .setTitle(`Channel Information for ${channel.name}`)
            .setThumbnail(message.guild.iconURL())
            .addField("**NSFW**", channel.nsfw, true)
            .addField("**Channel ID**", channel.id, true)
            .addField("**Channel Type**", channel.type)
            .addField("**Channel Description**", `${channel.topic || "No Description"}`)
            .addField("**Channel Created At**", channel.createdAt)
            .setColor("GREEN")
        message.channel.send(channelembed);
    }
  })
  */
  client.on("message", async message => {
  if(message.content.startsWith("+demote")) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
     let target = message.mentions.members.first();
    
    if(!target) return message.reply(`I am unable to find the user`)
    
    let rrole = message.mentions.roles.first();
    
    if(!rrole) return message.reply(`I am unable to find the role`)
    
    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    
      const embed = new MessageEmbed()
      .setAuthor(target.user.username, ticon)
      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
      .setColor("RANDOM")
      .setDescription(`${rrole} role removed from ${target}`)
      .setFooter(`Role added by ${message.author.username}`, aicon)
      .setTimestamp()
      
      await message.channel.send(embed)
      
      target.roles.remove(rrole)
    }
  }
  })
client.on("message", async message => {
  if(message.content.startsWith("+warn")) {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        "You should have admin perms to use this command!"
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please Mention the person to who you want to warn - warn @mention <reaosn>"
      );
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("You can not warn bots");
    }

    if (message.author.id === user.id) {
      return message.channel.send("You can not warn yourself");
    }

    if (user.id === message.guild.owner.id) {
      return message.channel.send(
        "You jerk, how you can warn server owner -_-"
      );
    }

  let reason = message.content.split(" ");
 reason.shift();
 reason = reason.join(" ");

    if (!reason) {
      return message.channel.send(
        "Please provide reason to warn - warn @mention <reason>"
      );
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(
        `You have been warned in **${message.guild.name}** for ${reason}`
      );
      await message.channel.send(
        `You warned **${
          message.mentions.users.first().username
        }** for ${reason}`
      );
    } else if(warnings !== null) {
      
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);
      
      user.send(`You have been warned in **${message.guild.name}** for ${reason}`);
      
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`);
      
      message.delete
      
    }
  }
    })
    client.on("message", message => {
      if(message.content.startsWith("+countwarn")) {
          const user = message.mentions.members.first() || message.author;

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;

    message.channel.send(`${user} have **${warnings}** warning(s)`);
      }
    })
client.on("guildMemberAdd", async member => {

  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {

    return;

  }

  

   let data = await canva.welcome(member, { link: "https://media.discordapp.net/attachments/846275167788728351/846307740384231424/gg.jpg" })

 

    const attachment = new discord.MessageAttachment(

      data,

      "welcome-image.png"

    );
    const db = require("quick.db")
client.on("message", message => {
  if(message.content.startsWith("+setwelcome")) {
    if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("sorry you need permission to admin ");
    }
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`Welcome Channel is seted as ${channel}`)
  }
})
  

  

  client.channels.cache.get(chx).send("Welcome to our Server " + member.user.username );

});
client.on("message", message => {
  if(message.content === `${prefix}help mod`) {
       var helpembed = new MessageEmbed()
    .setAuthor("> Moderation commands ⬇️")
    .addField("`Lock`",`Lock channels Only for admins`)
      .addField("`ban`",`ban members only for Admins`)
      .addField("`unban`",`unban members Only for Admins`)
      .addField("`unlock`",`unlock channels only for admins`)
      .addField("`kick`",`kick members Only for admins`)
      .addField("`mute`",`mute members only for admins ( Make sure to have a role that is "muted") `)
      .addField("`unmute`",`unmute members Only for admins`)
      .addField("`purge`","clear message max 100 Only for Admins")
      .addField("`verify`","Must have the role `Member` or else it wont work")
      .addField("`slowmode`","slowmode")
      .addField("`warn`","warn a member")
      .addField("`demote`","demote a role from a member")
      .addField("`countwarns`","count how many times you get warns")
      .addField("`rwarns`","reset warnings")
      .setColor("RANDOM")
      message.react("✅")
    message.channel.send(helpembed)
  }
})
client.on("message", message => {
  if(message.content === "+help premium") {
    if(message.author.id.includes === premiumid || premiumid1 || premium2 || premium3) {
      var prembed = new MessageEmbed()
      .setTitle("> Premium commands! ")
      .addField("`rr`","reaction role usage : +rr <emoji> <msg id> <role id>")
      .addField("`antipromote`","delete a message when members send link / discord invites")
      .setColor("BLUE")
      message.author.send(prembed)
      message.channel.send("shhh,message send to your dms")
    } else {
      message.channel.send("No Premium detected")
    }
  }
})
client.on("message", message => {
  if(message.content === "+help giveaway") {
    var embedgg = new MessageEmbed()
    .setTitle("> Giveaway commands")
    .addField("giveaway","usage : +giveaway <time(only able for 2days `Beta`) <channel> <price>")
    .setColor("WHITE")
    .setFooter("Beta mode")
    message.channel.send(embedgg)
  }
})
client.on("message", message => {
  if(message.content === `${prefix}help`) {
    var embedhelp = new MessageEmbed()
.setTitle("> Looking for help?")
.addField("help mod","Moderation commands")
.addField("help fun","Fun commands")
.addField("help music","music commands")
.addField("help premium","Only for premium members")
.addField("help growtopia","About growtopia")
.addField("help giveaway","start a giveaway")
.addField("Use +changelog to check updates","All updates by howtoplaygt#2898")
.setColor("BLUE")
.setFooter(`Requested by ${message.author.username}`)
     let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support Server') 
      .setURL("https://discord.gg/XJzB8BwnxN");
    message.react("✅")
    message.channel.send(embedhelp,button1)
    message.author.send(`Hey ${message.author}, feel free to Join our support server : https://discord.gg/XJzB8BwnxN
    and invite me : https://discord.com/api/oauth2/authorize?client_id=885536366602104834&permissions=8&scope=bot
    to contact us please feel free to dm howtoplaygt#2898
    we are giving away preimum members!
    hope this bot helps`)
  }
})
client.on("message", message => {
  if(message.content === "+help fun") {
    var fun = new MessageEmbed()
    .setTitle("`Fun / Info commands`")
    .addField("meme","sent a random meme")
    .addField("hack","hack a member for fun")
    .addField("daily","get daily coins!")
    .addField("balance / bal","see your wallet balance")
    .addField("say","makes the bot say something")
    .addField("howgay","rate your gay self")
    .addField("8ball","something for yourself")
    .addField("rep","rep someone")
    .addField("vps","gen a random vps")
    .addField("ping","ping the bot")
    .addField("av / avatar","user avatar")
    .addField("serverinfo","get serverinfo")
    .addField("rank","CHeck your rank")
    .addField("rps","play rps with Mode bot")
    .addField("channelinfo","channel's info")
    .setColor("BLUE")
    message.react("✅")
    message.channel.send(fun)
  }
})
client.on("message", message => {
  if(message.content.toLowerCase().startsWith("+daily")) {
 let currency = "<:coinlmao:890412782275674112>"
 const check =  db.get(`dailyCheck_${message.author.id}`)
 const timeout = 86400000;
 if(check !== null && timeout - (Date.now() - check) > 0) {
const ms = require("pretty-ms")
const timeLeft = ms(timeout - (Date.now() - check))
let fail = new  Discord.MessageEmbed()
.setTitle("You've already had your daily!")
.setColor("RED")
.setDescription(`Nice try, but you've already claimed your daily for today!\nCome back after ${timeLeft} for your next daily.`)
.setTimestamp()
message.channel.send(fail)
 } else {
 let reward = 1000
 let currentBalance = db.get(`wallet_${message.author.id}`)
 let success = new  Discord.MessageEmbed()
 .setTitle("You claimed your daily!")
 .setColor("GREEN")
 .setDescription(`Nice job, you just claimed ${currency} ${reward.toLocaleString()}!\nCome back tomorrow for another ${currency} ${reward.toLocaleString()}!`)
 .setTimestamp()
 message.channel.send(success)
 db.set(`wallet_${message.author.id}`, currentBalance + reward )
 db.set(`dailyCheck_${message.author.id}`, Date.now())
 }
}
})


client.on("message", message => {
  if(message.content === "+help growtopia") {
    var embed100 = new MessageEmbed()
.setTitle("> Welcome to Growtopia!")
.addField("reload","reloading....")
.addField("event","event omg")
.addField("wotd","growtopia wotd")
.addField("world","searching worlds...")
.addField("achieve","your achievement")
.addField("xp","xp!")
.addField("farm","farm like real growtopia!")
.addField("item","searching growtopia items..")
.setDescription("credit to Cernodile & awesome187")
.setColor("BLUE")
message.channel.send(embed100)
  }
})
client.on("message", message => {
  if(message.content.toLowerCase().startsWith(`${prefix}balance`) || message.content.toLowerCase().startsWith(`${prefix}bal`)) {
        let balance =  db.get(`wallet_${message.author.id}`)
        let bank =  db.get(`bank_${message.author.id}`)

        if(balance === null) balance = 0
        if(bank === null) bank = 0
        let currency = "<:coinlmao:890412782275674112>"
        let moneyEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}'s Balance`)
        .setDescription(`Wallet:${balance} ${currency}\nBank:${bank} ${currency}`)
        .setColor("RANDOM")
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        message.channel.send(moneyEmbed)
  }
})
client.on("message", message => {
  if (message.content === "+slap") {
 let l = message.mentions.members.first() 
 
 
 if(!l) message.reply(`:x: **Please Mention someone to Slap!** :x:`)
 else {
 
 /*let slappers = [
 "https://media1.tenor.com/images/40d2c4e6eca563646a1b64efd8d04471/tenor.gif?itemid=15575210",

 "https://media1.tenor.com/images/e59ef31bad50ca64ea09f36a17ee50f0/tenor.gif?itemid=11314821",

 "https://media1.tenor.com/images/31f29b3fcc20a486f44454209914266a/tenor.gif?itemid=17942299",

 "https://media1.tenor.com/images/b90654059ef2cf0a4784c9b7b6e0e485/tenor.gif?itemid=17262452",

 "https://media1.tenor.com/images/29c7edfb6df189e313354fb3423ce333/tenor.gif?itemid=15308590"
 ];
 */
 let embedslap = new Discord.MessageEmbed()
 .setColor('RED')
 .setTitle(':sob: Ohhh, a super slap!!')
 .setDescription(`${message.author} slapped ${l}! It hurts! :sob:`)
 //.setImage(`${slappers[Math.floor(Math.random() * slappers.length)]}`);
 
 message.channel.send(embedslap)
 }
 }
})   

const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
 warnThreshold: 3,
 kickThreshold: 7,
 banThreshold: 7,
 maxInterval: 2000,
 warnMessage: '{@user}, Please stop spamming.', 
 kickMessage: '**{user_tag}** has been kicked for spamming.',
 muteMessage: '**{user_tag}** has been muted for spamming.',
 banMessage: '**{user_tag}** has been banned for spamming.', 
 maxDuplicatesWarning: 7,
 maxDuplicatesKick: 10,
 maxDuplicatesBan: 12,
 exemptPermissions: [ 'ADMINISTRATOR'],
 ignoreBots: true, 
 verbose: true, 
 ignoredUsers: [],
 muteRoleName: "Muted",
 removeMessages: true
});

client.on('message', (message) => antiSpam.message(message)); 


client.on("message", message => {
 if(message.content === `${prefix}changelog`) {
   var clembed = new MessageEmbed()
    .setTitle("Change log v2.0")
    .addField(`
   - Added +text [<channel name>]
   - Added +voice [<channel name>] 
   - Fix +text and +voice [ Only guild owners are allowed to use ]
   `,"Updated by howtoplaygt#2898")
   .addField(`
   - Removed +giveaway due to Error
   - No Data removed
   - Bot will up fully [ Wont down anymore ]
   Dm me if any problem about the bot`,"`Bot is UP!`")
    .setColor("GREEN")
    .setTimestamp()
    .setDescription("Updated changelog on 19 Oct 2021")
    
    var loadembed = new MessageEmbed()
    .setTitle("Checking verison Updates")
    .setColor("BLUE")
    message.delete()
message.channel.send(loadembed).then((sentMessage) => sentMessage.edit(clembed))
 }
})
/*client.on("message", message => {
  if (message.content.startsWith("+say")) {
 
 let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) message.reply("WHAT DO YOU WANT ME TO SAY?")
 message.delete();

 if (sentence.startsWith("+")) {
 message.reply("Are you trying to execute a command thru me? Manipulating an innocent bot?? :'( . Welp you can't")
 console.log(message.author.username + " said :- " + sentence)
 return;
 }

 if (sentence.includes("@")) {
 message.reply("you aint pinging anyone")
 console.log(message.author.username + " said :- " + sentence)
 return;
 }

 if (sentence.includes("@everyone") || sentence.includes("@here")) {
 console.log(message.author.username + " said :- " + sentence)
 message.reply("don't even think bout it")
 return;
 }

 if (sentence != "-say" || "@everyone") {
 message.channel.send(sentence);
 }
 console.log(message.author.username + " said :- " + sentence)
 } else {
 
 
}
})
*/
client.on("message", message => {
  if(message.content.startsWith('+say')){
    if(message.member.hasPermission("ADMINISTRATOR")) {
 const whattosay = message.content.slice("".length).trim().split(/ +/);
whattosay.shift().toLowerCase().split(" ")[0]
message.channel.send(whattosay.join(" "))
message.delete()
    }
}
})


client.on("message", message => {
  if (message.content.toLowerCase().startsWith("+howgay")) {
 let gayrate = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59","60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"]
 let victim = message.mentions.users.first()
 if (!victim) message.reply ("Mention someone!")
 else {
 message.lineReplyNoMention
 let embed = new Discord.MessageEmbed()
 .setTitle(`Howgay Machine`)
 .setDescription((`${victim} is ${gayrate[Math.floor(Math.random() * gayrate.length)]}% gay!`))
 .setFooter("howgay")
 .setColor("RANDOM")
 .setTimestamp()
 message.channel.send(embed)
 }
 }
})
client.on("message", message => {
  if (message.content.toLowerCase().startsWith("+8ball")) {
 let replies = ["Yes","No","Maybe","Not sure","Shut up you rat!","sure, why not","when you grow a braincell, yes","THAT'S A SOLID ****NO****","Nah that sucks tbh"]
 let randomized = replies[Math.floor(Math.random() * replies.length)]
 let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) message.reply("WHAT DO YOU WANT TO ASK 8BALL?")
 let embed = new Discord.MessageEmbed()
 .setTitle("8Ball")
 .addField("Your Question", `${sentence}`)
 .addField("8Ball:", `${randomized}`)
 .setColor("RANDOM")
 .setFooter(" ")
 message.channel.send(embed)
}
})
 client.on("message", message => {
   if (message.content.startsWith('+meme')) {
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });

 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;

 var link = 'https://reddit.com' + index.permalink;

 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('RANDOM')
 .setURL(link);

 message.channel.send(textembed);
 }

 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;

 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('RANDOM')
 .setURL(link);

 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('RANDOM')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 })

client.on("message", message => {
  if(message.content === `${prefix}invite`) {
    let button = new disbut.MessageButton()
      .setStyle('url')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=885536366602104834&permissions=8&scope=bot')
  .setLabel('Invite');
      message.channel.send("**Invite me here**", button)
  }
})
client.on("message", message => {
 if(message.content === `${prefix}lock`) {
 let embedYes = new Discord.MessageEmbed()
 .setDescription("**Channel Locked.**")
 .setFooter("Use +unlock to unlock the channel.")
 .setColor("GREEN")
 if(message.member.hasPermission("MANAGE_CHANNELS")) {
 message.channel.send(embedYes)
 message.channel.updateOverwrite(message.guild.roles.everyone, {
SEND_MESSAGES: false
});
 } else {
 let embed2 = new Discord.MessageEmbed()
 .setTitle("Error")
 .setColor("RED")
 .setDescription("You don't have permission to use this command.")
 message.channel.send(embed2)
 }
 }
 })
 client.on("message", message => {
 if(message.content === `${prefix}unlock`) {
 let embedNo = new Discord.MessageEmbed()
 .setDescription("Channel Unlocked.")
 .setColor("GREEN")
 if(message.member.hasPermission("MANAGE_CHANNELS")) {
 message.channel.send(embedNo)
 message.channel.updateOverwrite(message.guild.roles.everyone, {
SEND_MESSAGES: true
});
 } else {
 let embed = new Discord.MessageEmbed()
 .setTitle("Error")
 .setColor("RED")
 .setDescription("You don't have permission to use this command.")
 message.channel.send(embed)
 }
 }
 })
 let tick = "<:tick:888807206038962277>"
client.on("message", message => {
  if (message.content.startsWith(`${prefix}ban`)) {
 if (message.member.hasPermission("BAN_MEMBERS")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.ban().then(member => {
 message.channel.send(`${tick} banned him successfully`)
 })
 }
 } else {
 message.reply("You don't have the permission to do that...")
 }
 }
})
client.on("message", message => {
if(message.content.startsWith(`${prefix}unban`)) {
let args = message.content.split(" ").slice(1)
if(!args[0]) return message.reply("id u forgot")
if(isNaN(args[0])) return message.reply("Lmao u have to put ACTUAL id")
message.guild.members.unban(args[0]);
}
})
client.on("message", message => {
  if (message.content.startsWith(`${prefix}kick`)) {
 const user = message.mentions.users.first();
 if (user) {
 const member = message.guild.member(user);
 if (member) { 
 member
 .kick('Optional reason that will display in the audit logs')
 .then(() => {
 message.reply(`Successfully kicked ${user.tag}`);
 })
 .catch(err => {
 message.reply('I was unable to kick the member');
 console.error(err);
 });
 } else {
 message.reply("That user isn't in this guild!");
 }
 } else {
 message.reply("You didn't mention the user to kick!");
 }
 }
})

client.on("message", message => {
  if(message.content.startsWith(`${prefix}unmute`)) {
 if(message.member.hasPermission("ADMINISTRATOR")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("mention someone to unmute!")
 else {
let role = message.guild.roles.cache.find(role => role.name === "muted")
 member.roles.remove(role)
 message.channel.send("Member has been succesfully unmuted.")
 }

 }else {
 message.reply("You don't have permission to do that!")
 }
}
})
client.on("message", message => {
  if(message.content.startsWith(`${prefix}purge`)){
let arg = message.content.split(" ")
if(message.member.hasPermission("MANAGE_MESSAGES")) {
let clear = arg[1];
if(!clear) return message.channel.send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
**Example:** \`_purge 50\` `)
if(isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
if(clear > 100) return message.channel.send(":x: | ``I can't Clear more than 100 messages.``")
if(clear < 1) return message.channel.send(":x: | ``You cannot Clear less than 1 message.``")

message.channel.bulkDelete(clear)
message.channel.send(`:white_check_mark: | \`Succesfully cleared ${clear} messages! | If purge fails please make sure I have MANAGE_MESSAGES to make the purge seccessful.\` `)
.then(message => 
 message.delete({timeout: 10000})
 )
}else{
message.reply("You dont have perms!")
} 
}
})
client.on('guildCreate', guild => {
  guild.systemChannel.send(`Hello, I'm Mode. Thanks for inviting me, to check my commands do +help`)
});
client.on('guildCreate', guild => {
  console.log(`You have been invited to a discord server : ${guild}`)
});

client.on("message", message => {
  if(message.content.startsWith("+poll")) {
if(message.member.hasPermission("MANAGE_CHANNELS")) {
 let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 message.delete()

 if (sentence != "-say" || "@everyone") {
 let embed = new Discord.MessageEmbed()
 .setTitle("POLL Time")
 .setDescription(sentence)
 .setColor("YELLOW")
 .setFooter(`Requested by ${message.author.username}`)
 message.channel.send(embed).then(X => 
{
X.react('✅')
X.react("❎")
})
 } else {
 message.reply("You don't have permission to do that!")
 }
}
  }
})

client.on("message", message => {
  if(message.content.includes(`${prefix}rep`)) {
   var embedgay = new MessageEmbed()
   .setAuthor("Thanks for Reping (:")
   .addField(`Your Rep`,`${message.content}`)
   .setColor("YELLOW")
   message.react("✅")
   message.channel.send(embedgay)
  }
})
client.on("message", message => {
  if(message.content === '+vps'){
const lmaos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const lmaos1 = ['vps', 'gay', 'GTPS', 'ProVps', 'vpsname', 'mrgay', 'sexyvps', 'nobodyvps', 'bruh', 'lmao', 'zxnyvps'];
const random = Math.floor((Math.random() * lmaos.length));
const random1 = Math.floor((Math.random() * lmaos.length));
const random2 = Math.floor((Math.random() * lmaos.length));
const random3 = Math.floor((Math.random() * lmaos.length));
const random4 = Math.floor((Math.random() * lmaos.length));
const random5 = Math.floor((Math.random() * lmaos.length));
const random6 = Math.floor((Math.random() * lmaos.length));
const random7 = Math.floor((Math.random() * lmaos.length));
const random8 = Math.floor((Math.random() * lmaos.length));
const random9 = Math.floor((Math.random() * lmaos1.length));
const x = lmaos[random];
const x1 = lmaos[random1];
const x2 = lmaos[random2];
const x3 = lmaos[random3];
const x4 = lmaos[random4];
const x5 = lmaos[random5];
const x6 = lmaos[random6];
const x7 = lmaos[random7];
const x8 = lmaos[random8];
const x9 = lmaos1[random9];
let pass = "";
    let dict = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_+-|!@#$%^&*";
    for (var i = 0; i < 9; i++) {
        pass = pass + dict.charAt(Math.floor(Math.random() * dict.length));
	}
message.channel.send(`ok here your vps: 
ip: ||` + x + x1 + '.' + x2 + x3 + '.' + x4 + x5 + x6 + '.' + x7 + x8 + `||
name: ||` + x9 + `||
passworld: ||` + pass + '||')
}
})
client.on("message", message => {
  if(message.content.toLowerCase() === "+verify") {
let role = message.guild.roles.cache.find(role => role.name === "Member")
message.member.roles.add(role)
let embed = new Discord.MessageEmbed()
 .setTitle("Verified")
 //.setAuthor("Bot_Name Verify", "You_Can_add_Image_Here")
//.setThumbnail("You_can_add_image_here")
 .setDescription('Now U Can See All Visible Channel')
.setColor("GREEN")
 .setFooter('Verified')
 message.channel.send(embed)
 .then(msg => {
 msg.delete({ timeout: 5000 })
//1000 = 1 sec
//5000 = 5 sec
//10000 = 10 sec
 })
 }
if(message.content === "+verify") {
//You can use
//if(command === "verify") {
//Its need command handler
message.delete()
}
})
client.on("message", message => {
  if (message.content === "+ping") {
message.channel.send(`⏱️| **${client.ws.ping}ms** Pong!`)
}
})
client.on("message", message => {
  if(message.content.startsWith("+hack")) {
const user = message.mentions.users.first();
if(!user) return message.channel.send("Mention Someone to hack")
message.channel.send("**[25%]** Finding IP..").then(m => {
setTimeout(() => {
m.edit("**[50%]** IP FOUND! Looking for email and password..").then(m2 => {
setTimeout(() => {
m2.edit(`**[75%]** DONE! email: ${user.username}@icloud.com | password: XjdhgikshGdk`).then(m3 => {
setTimeout(() => {
m3.edit("**[100%]** Deleting System32..").then(m4 => {
setTimeout(() => {
m4.edit(`done hacking ${user}! all info was sent online.`)
}, 5500);
});
}, 2800);
});
}, 4500);
});
}, 5000);
});
};
})
client.on("message", message => {
   if(db.has(message.author.id + '+afk')){
 message.channel.send(`Welcome back ${message.author}`)
 db.delete(message.author.id + '+afk')
 db.delete(message.author.id + '+messageafk')
 }
 if (message.content.startsWith('+afk')) {
 message.channel.send('Aight, I have set your AFK. I will send a message to the users who mention you..')
 // then here you use the database :
 db.set(message.author.id + '+afk','true')
 db.set(message.author.id + '+messageafk', message.content.split(' ').slice(2))
 }
 if (message.content.includes('+afk off')) {
 db.delete(message.author.id + '+afk')
 db.delete(message.author.id + '+messageafk')
 }
 // If one of the mentions is the user
 message.mentions.users.forEach(user =>{
 if (message.author.bot) return false;

 if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
 if(db.has(user.id + '+afk')) message.channel.send(`${message.author}, the user you mentioned is currently AFK.. Leave a message if urgent by DMing him`)
 })
})
/*
client.on("message", message => {
  if(message.content.includes(" ")) {
    var embedg = new MessageEmbed()
    .setTitle("New logs")
    .setDescription(`Message : **${message.content}** by : **${message.author.tag}**`,"")
    .setTimestamp()
    .setColor("RED")
    const logchat = client.channels.cache.get('887276936458559511')
logchat.send(embedg)
  }
})
*/
client.on("message", message => {
if(message.content.startsWith("+suggest")) {
 let args = message.content
 .split(" ")
 .slice(1)
 if(!args[0]) return message.channel.send("Hey! To suggest something you need to send something!")
 const reportlog = new Discord.MessageEmbed()
 .setTitle(`A New Suggestion!`) 
 .setColor('RANDOM')
.setDescription(args.join(" "))
.setFooter(`Suggestion by ${message.author.tag}`)
.setTimestamp()
client.channels.cache.get('881420243333943337').send(reportlog).then (sentMessage => {
 sentMessage.react("⬆️")
 sentMessage.react("⬇️")
 })
 message.channel.send("Your Suggestion has been succesfully been sent.")
}
})
client.on("message", message => {
  if(message.content.startsWith(`${prefix}embed`)) {
      let args = message.content
 .split(" ")
 .slice(1)
 if(!args[0]) return message.channel.send("succesfully self embed")
    var selfembed = new MessageEmbed()
    .setDescription(args.join(" "))
    .setTimestamp()
    .setFooter(`Writen by ${message.author.tag}`)
    .setColor("RANDOM")
    message.delete()
    message.channel.send(selfembed)
  }
})
client.on("message", message => {
  if(message.content.toLowerCase().startsWith("+slowmode")){
 if (message.member.hasPermission("MANAGE_CHANNELS")) {
 let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" "); 
 if(sentence != null){
 message.channel.setRateLimitPerUser(sentence);
 }

 message.reply(`This chat now has a slowmode of ${sentence} seconds!`)
 } else {
 message.reply("You don't have perms to do that...")
 } 
}
})
client.on("message", message => {
  client.on("guildMemberAdd", async member => {
 let channel = member.guild.channels.cache.find(c => c.name === '863068890069205032')
 let WELCOME = new Discord.MessageEmbed()
 .setTitle('New Member Has Joined!')
 .setDescription(`
 Hey ${member.user}!
 We hope u have fun in this server 
 you are member number ${member.guild.memberCount}!`)
 .setColor('RED')
 .setThumbnail(client.user.avatarURL)
 .setTimestamp()
 .setFooter('Thanks For Joining!')
 channel.send(WELCOME)
})
})
client.on("message", async message => {
  if(message.content.startsWith("+rr")){
   if(message.author.id.includes === "797374206928748557") {
    const args = message.content.split(" ");
    if(!args[1]) return message.channel.send("Please include an emoji");
    if(!args[2]) return message.channel.send("There must be an id for the message");
    if(isNaN(args[2])) return message.channel.send("Please include a valid message id");
    if(!args[3]) return message.channel.send("Please include the id of the role ID");
    if(isNaN(args[3])) return message.channel.send("Please include a valid ID for the role that should be given upon reaction.");
    let emoji = ReactionEmojiGrab(args[1]);
    if(!isNaN(emoji)) emoji = client.emojis.cache.get(emoji);
    try{
      const msg = await message.channel.messages.fetch(args[2]);
      await msg.react(emoji);
      
      db.push(`${message.guild.id}.reactionroles`,
        {
          message: msg.id,
          emoji: emoji.id || emoji,
          role: args[3]
        }
      );
    }catch(e){
      message.channel.send("Error\n" + e);
    }
    }
  }
})

client.on("messageReactionAdd", (reaction, user) => {
  if(user.bot) return;
  const reactionRoles = db.get(`${reaction.message.guild.id}.reactionroles`);
  if(!reactionRoles) return;
  reactionRoles.forEach(async reactionRole => {
    if((reactionRole.emoji === reaction._emoji.name || reactionRole.emoji == reaction._emoji.id) && reactionRole.message == reaction.message.id){
      try{
        await reaction.message.guild.members.cache.get(user.id).roles.add(reactionRole.role)
      }catch(e){
        console.log(e);
      }
    }
  });
})

client.on("messageReactionRemove", (reaction, user) => {
  if(user.bot) return;
  const reactionRoles = db.get(`${reaction.message.guild.id}.reactionroles`);
  if(!reactionRoles) return;
  reactionRoles.forEach(async reactionRole => {
    if((reactionRole.emoji === reaction._emoji.name || reactionRole.emoji == reaction._emoji.id) && reactionRole.message == reaction.message.id){
      try{
        await reaction.message.guild.members.cache.get(user.id).roles.remove(reactionRole.role)
      }catch(e){
        console.log(e);
      }
    }
  });
})

function ReactionEmojiGrab(reactionArg){
  const contents = reactionArg.substring(1, reactionArg.length - 1).split(":");
  if(contents.length > 1){
    return contents[2];
  }else{
    return reactionArg;
  }
}

client.on("message", message => {
  if(message.content === '+av' || message.content === '+avatar'){
const target = message.mentions.users.first() || message.author;
const avashit = target.displayAvatarURL({size: 1024})
 const avatarEmbed = new Discord.MessageEmbed()
        .setColor(0x333333)
        .setAuthor(target.username + " Profile Photo")
        .setImage(avashit);
    message.channel.send(avatarEmbed);
}
})
 let on = "<:onbutton:890836240176414720>";
let off = "<:offbutton:890838083908550656>"
client.on("message", message => {
    if (message.content === '+antipromote') {
	   if (message.guild.me.hasPermission("ADMINISTRATOR")) {
	  if(promote){
		        message.channel.send(`${off} Anti promote is Off!`);
				promote = false;
				return;
	  }else {
		  var guildn = message.guild;
		  		        message.channel.send(`${on} Anti promote is On!`);
		  promote = true;
  }
  if(message.content.includes("Anti promote is On!")) {
    if(message.content.includes("http") || (message.content.includes("discord.gg/")))
    message.channel.send(`${message.author},Stop promoting`)
    message.delete()
  }
  }
  }
})
client.on("message", message => {
  if (message.content === '+serverinfo') {
const { guild } = message

    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setThumbnail(icon)
      .addFields(
        {
          name: 'Region',
          value: region,
        },
        {
          name: 'Members',
          value: memberCount,
        },
        {
          name: 'Owner',
          value: owner.user.tag,
        },
        {
          name: 'AFK Timeout',
          value: afkTimeout / 60,
        }
      )

    message.channel.send(embed)
  }
})
/*
           client.on('message', async message => {
             if(message.content === "+giveaway") {
              let args = message.content.substring(prefix.length).split(" ")
              if(message.member.permissions.has('ADMINISTRATOR')){
              if (message.content.startsWith(`${prefix}giveaway`)) {
                  let time = args[1]
                  if (!time) return message.channel.send('You did not specify a time!');
          
                  if (
                      !args[1].endsWith("d") &&
                      !args[1].endsWith("h") &&
                      !args[1].endsWith("m") &&
                      !args[1].endsWith("s") 
                  )
                      return message.channel.send('You need to use d (days), h (hours), m (minutes), or s (seconds)')
          
                      let gchannel = message.mentions.channels.first();
                      if (!gchannel) return message.channel.send("I can't find that channel in the server!")
          
                      let prize = args.slice(3).join(" ")
                      if (!prize) return message.channel.send('Arguement missing. What is the prize?')
          
                      message.delete()
                      gchannel.send(":tada: **NEW GIVEAWAY** :tada:")
                      let gembed = new Discord.MessageEmbed()
                          .setTitle("New Giveaway!")
                          .setDescription(`React with :tada: to enter the giveaway!\nHosted By: **${message.author}**\nTime: **${time}**\nPrize: **${prize}**`)
                          .setTimestamp(Date.now + ms(args[1]))
                          .setColor(3447003)
                      let n = await gchannel.send(gembed)
                      n.react("🎉")
                      setTimeout(() => {
                          if(n.reactions.cache.get("🎉").count <= 1) {
                              return message.channel.send("Not enough people for me to draw a winner!")
                          }
          
                          let winner = n.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();
                          gchannel.send(`Congratulations ${winner}! You just won the **${prize}**!`
                          );
                      }, ms(args[1]));
              }
            }
             }
          })
          */
 
          client.on("message", message => {
             if(message.content.startsWith('+createchannel') || message.content.startsWith('+cc')) {
              if (message.guild.me.hasPermission("ADMINISTRATOR")) {
  let cname = message.content.split(" ");
 cname.shift();
 cname = cname.join(" ");
 if(cname.length > 28) return message.channel.send('channel name cannot be more then 28 characters')
 message.guild.channels.create(`${cname}`, {
 persmissionOverwrites: [
 {
 id: message.guild.roles.everyone, //change this to id: "role_id" if you have verified role in your server
 allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
 },
 ],
 type: message.content.toLowerCase()
 }).then(async channel => {
 message.channel.send(`Creating channel`).then(async m2 => {
 setTimeout(async () => {
 m2.edit(
 new MessageEmbed()
 .setTitle('Sucess')
 .setDescription(`You channel has been created: ${channel}`)
 .setColor('00ff00')
 .setTimestamp()
 )
 }, 5000)
 })
 })
              } else {
                message.channel.send(`${message.author} Hey you need [ **MANAGE_CHANNELS** ] permission for that!`)
              }
             }
             })
 // -----
           client.on("message", message => {
             if(message.content.startsWith('+modebot') || message.content.startsWith('+updates')) {
              if (message.guild.me.hasPermission("ADMINISTRATOR")) {

 
 message.guild.channels.create(`modebot`, {
 persmissionOverwrites: [
 {
 id: message.guild.roles.everyone, //change this to id: "role_id" if you have verified role in your server
 allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
 },
 ],
 type: message.content.toLowerCase()
 }).then(async channel => {
 message.channel.send(`Creating channel`).then(async m2 => {
 setTimeout(async () => {
 m2.edit(
 new MessageEmbed()
 .setTitle('Sucess')
 .setDescription(`You channel has been created: ${channel}`)
 .setColor('00ff00')
 .setTimestamp()
 )
 }, 5000)
 })
 })
              } else {
                message.channel.send(`${message.author} Hey you need [ **MANAGE_CHANNELS** ] permission for that!`)
              }
             }
             })


          const Levels = require('discord-xp')
 Levels.setURL("mongodb+srv://TDSwamp:TDSwamp1234@tdswamp.n7myy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
   
client.on("message", async message => {
 if (!message.guild) return;
 if (message.author.bot) return;

 const prefix = '!';

 const args = message.content.slice(prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();

 const randomXp = Math.floor(Math.random() * 9) + 1; 
 const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
 if (hasLeveledUp) {
 const user = await Levels.fetch(message.author.id, message.guild.id);
 message.channel.send(`You leveled up to ${user.level}! Keep it going!`);
 }
 
 if(message.content === "+rank") {
 const user = await Levels.fetch(message.author.id, message.guild.id);
 message.channel.send(`You are currently level **${user.level}**!`)
 }
 
 if(message.content === "+leaderboard" || command === "+lb") {
 const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
 if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

 const leaderboard = Levels.computeLeaderboard(bot, rawLeaderboard); 

 const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);

 message.channel.send(`${lb.join("\n\n")}}`)
 }
})


// response with rps[Math.floor(Math.random() * rps.length)]

client.on("message", message => {
  if(message.content.startsWith("+rps")) {
    let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 var rps = ["Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors","Paper","Rock","Scissors"]
 var embedrps = new MessageEmbed()
.setTitle(`${message.author.username} u chose **${sentence}** and i chose ` + rps[Math.floor(Math.random() * rps.length)])
.setFooter(`Invite me here : https://discord.com/api/oauth2/authorize?client_id=885536366602104834&permissions=8&scope=bot`)
.setColor("RANDOM")
  message.channel.send(embedrps)
  } 
})
client.on("message", message => {
  if(message.content.startsWith("+dm")) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
 const whattosend = message.content.slice("".length).trim().split(/ +/);
whattosend.shift().toLowerCase().split(" ")[1]
const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
if(!member) return message.channel.send('**Provide a user!**')
if(!whattosend[1]) return message.channel.send('**What do you want to dm them?**')
member.send(whattosend.slice(1).join(" "))
message.delete()
message.channel.send(`**Sucessfully sent to __${member.user.tag}__**`)
    }
  }
})
client.on("message", message => {
  if(message.content.startsWith("+mute")) {
     if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
 return message.channel.send("I do not have permission to manage roles.");
 }

 const user = message.mentions.members.first();
 
 if(!user) {
 return message.channel.send("Please mention the member to who you want to mute")
 }
 
 if(user.id === message.author.id) {
 return message.channel.send("**You cant mute yourself");
 }
 
 
let reason = message.content.split(" ");
reason.shift();
reason = reason.join(" ");
 
 
 if(!reason) {
 return message.channel.send("**Please Give the reason to mute the member**")
 }
 
 
 let muterole = message.guild.roles.cache.find(x => x.name === "muted")
 
 
 if(!muterole) {
 return message.channel.send("This server do not have role with name `muted`")
 }
 
 
 if(user.roles.cache.has(muterole)) {
 return message.channel.send("Given User is already muted")
 }
 
 
 

 user.roles.add(muterole)
 
 message.channel.send(`You muted **${message.mentions.users.first().username}** For \`${reason}\``)
 
 user.send(`You are muted in **${message.guild.name}** For \`${reason}\``)
 
 
 
 }
})


client.on("message", message => {
  if(message.content.startsWith("+iloveu")) {
     let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 var embedpp = new MessageEmbed()
 .addField(`${sentence}`)
 .setColor("RANDOM")
 message.channel.send(embedpp)
  }
})
client.on("message", message => {
  if(message.content.startsWith("+gsm")) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
         let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 var gsm = new MessageEmbed()
 .setTitle("`Restarting Growsand system`")
 .setDescription(`${sentence}`)
 .setTimestamp()
 .setColor("BLUE")
 message.channel.send("@here",gsm)
 message.delete()
    }
  }
})

const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send(`Bot owner : howtoplaygt#2898 | Bot name : Mode#4025 | port : 2323 |`));

app.listen(port, () => console.log(`App is listening to http://localhost:${port}`));

client.login(process.env.TOKEN)