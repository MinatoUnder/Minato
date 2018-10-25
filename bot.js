const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('ready', () => {
     client.user.setActivity("#UnderWolrd",{type: 'Streaming'});

});

client.on("message", async message => {
        if(!message.channel.guild) return;
 var prefix= "?";
        if(message.content.startsWith(prefix + 'server')) {
        let guild = message.guild
        let channel = message.channel
        let guildicon = guild.icon_url
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let allchannels = guild.channels.size
        let textchannels = guild.channels.filter(e => e.type === "text")
        let voicechannels = guild.channels.filter(e => e.type === "voice")
          var embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(`**📑 **معلومات عن السيرفر`)
          .setDescription(`معلومات عن : ${guild.name}`)
          .addField("**صاحب السيرفر 👨** :", `${guild.owner}`, true)
          .addField("**أيدي السيرفر 📊** :", `${guild.id}`, true)
          .addField("**موقع السيرفر 📡** :", `${guild.region}`, true)
          .addField("**مستوى حماية السيرفر 🏧** :", `${guild.verificationLevel}`, true)
          .addField("**عدد الرومات الصوتية 🎦** :", `${voicechannels.size}`, true)
          .addField("**عدد الرومات الكتابية 📝** :", `${textchannels.size}`, true)
          .addField("**عدد اعضاء السيرفر 💃** :", `${members}`, true)
          .addField("**عدد البوتات 🗿** :", `${bots}`, true)
          .addField("**عدد الاشخاص 🙌** :", `${humans}`, true)
          .addField("**عدد رتب السيرفر 📈** :", `${guild.roles.size}`, true)
          .addField(`**أيموجيات الخاصة بالسيرفر 😍** : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
          .setFooter(`تم انشاء هذه السيرفر في: ${guild.createdAt}`)
 
       message.channel.send({ embed: embed });
 
      }
    });

const HeRo = new Discord.Client();
client.on('message', message => {
var prefix = "?";

    if (message.content === prefix + "date") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**「  Date - التاريخ 」 **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( "「"+ Day + "-" + Month + "-" + Year + "」")
             message.channel.sendEmbed(Date15);
    }
});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == "?" + 'bc1') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

client.on("message", message => {

            if (message.content.startsWith("?" + "bc2")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" 🌹**هلا !!** ");
    }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith("?")) return;

  let command = message.content.split(" ")[0];
  command = command.slice("?".length);
  var argresult = message.content.split(" ").slice(1);
if (command == "sendpic") {
  message.channel.sendFile(argresult.join(" "))

}
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith("?")) return;

  let command = message.content.split(" ")[0];
  command = command.slice("?".length);
  var argresult = message.content.split(" ").slice(1);
if (command == "sendembedpic") {
    let embedsay = new Discord.RichEmbed()
 .setColor("RANDOM")
.setDescription("UnderWolrd 🌹")
.setImage(`${argresult}`)
message.channel.send({embed:embedsay});


}
});

client.on('message', message => {
            if (message.content.startsWith("?help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     Help ' ,' تم ارسال الاوامر الي الخاص ✉  ')
.setColor('#B101FC')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if (message.content.startsWith("?" + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **?bc1** ' ,' **يسوي برودكاست لكل الاعضاء بامبد** ')
.addField('     **?bc2**  ' ,' **يسوي برودكاست لكل الاعضاء بدون امبد** ')
.addField('     **?date** ' , '**يعطيك الوقت و التاريخ**') 
.addField('     **?server** ' , '**يعطيك معلومات عم السيرفر**') 
.addField('     **?sendpic** ' ,' **يعطيك الصورة بس لازم تحط الامر ورابط الصورة**')
.addField('     **?sendembedpic ** ' , '****')
.addField('     **هل تعلم ** ' ,' **  لعبة هل تعلم  ** ')
.addField('     **clear ** ' ,' **  لمسح الشات بدون رقم  ** ')
.addField('     **say ** ' ,' **  عشان يتكلم عنك  ** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

client.login(process.env.BOT_TOKEN);
