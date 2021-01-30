const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 
  
  const embed = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setTitle(' TASİA Yardım Menüsü ^-^')
  .setDescription(`\n\n**${prefix}afk**\nAfk Olursunuz.\n\n**${prefix}çek**\nSesli Kanalda Bulunan Birisin Yanınıza Çekersiniz.\n\n**${prefix}git**\nSeste Olan Birisini Yanınıza Çekersiniz.\n\n**${prefix}jail**\nJail Atarsınız.\n\n**${prefix}unjail**\nJail Açarsınız.\n\n**${prefix}mute**\nVhat Mute ATarsınız.\n\n**${prefix}unmute**\nMute açarsınız\n\n**${prefix}sorgula**\nKullanıcının Nerede Hangi Seste Olduğpuna Bakarsın\n\n**${prefix}yetkili-say**\nSesteki Yetkilileri Gösterir\n\n**${prefix}sicil**\nsicilini gösterir\n\n`)
 message.channel.send(embed)
}

exports.conf = {
  enabled: false,
  guildOnly: false,
  permLevel: 0,
  aliases: ['help', 'h', 'y', 'yardım']
}

exports.help = {
  name: 'yardım',
  description: 'Kinda Code & Only V12',
  usage: 'yardım'
}