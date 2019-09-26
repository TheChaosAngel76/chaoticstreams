const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const prefix = '!';

// Start Glitch stuff ==========>
/*
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
// console.log(process.env.PROJECT_DOMAIN);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
*/
// End Glitch stuff <==========


const commands = [
    // Random
    [
        "Help [command] : Returns all commands.",
        "Talk : Returns random phrases.",
        "Hello : Says hello back.",
        "Ping : Returns 'pong'.",
        "Info : Returns info about Chaotic Bot.",
        "Uptime : Returns time since I last launched.",
    ],
  ];
 const king = [
  [
         "🥊komplette liste Preise:",
         "T💥40 € => 3 Monate",
         "💥60 € => 6 Monate",
         "💥90 € => 12 Monate",
    ],
 ];


var responses = [
    "Hey.",
    "No.",
    "Why?",
    "How?",
    "I don't know.",
    "Ask Jett.",
    "Yes.",
    "Agreed.",
    "Bye.",
    "Boi.",
    "Nah.",
    "Wut.",
    "Wat.",
    "Impossible! :O",
    "No way!",
    "Of course!",
    "Why you asking me?",
    "Don't ask me!",
    "I had nothing to do with it!",
    "Leave me alone. :P",
    "<:Thonk:358268256110510091>",
];

var greetings = [
    "Hai",
    "Hi",
    "Sup",
    "Hello",
    "Yo, wus up",
    "Greetings",
    "Hola",
    "Good day",
    "Howdy",
    "Hey",
    "Hiya",
    "Hi there",
    "Heyyaz",

];



var millisToTime = function(milliseconds) {
    let x = milliseconds / 1000;
    let s = Math.floor(x % 60);
    x /= 60;
    let m = Math.floor(x % 60);
    x /= 60;
    let h = Math.floor(x % 24);
    //x /= 24;
    //let d = Math.floor(x);

    return h + ' Hours, ' + m + ' Minutes, ' + s + " Seconds";
};

var totalTime = 0;
var statusNum = 0;
var mode;


var status = [
    'online',
    'idle',
    'dnd'
];

client.on('ready', () => {
    var games = [
        `${client.guilds.size} Servers`,
        `${client.users.size} Users`,
        `${client.channels.size} Channels`
    ];
    client.user.setPresence({ game: { name: `${prefix}help | ${games[Math.floor(Math.random()*games.length)]}`, type: 0 } });
    client.user.setUsername('Chaotic Streams');
    console.log('I am ready Jett!');
    console.log(`I have started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);

    setInterval(function() {
        totalTime++;
    }, 1);

  /*
    let embed = new Discord.RichEmbed();
    embed.setColor('#0DB221');
    embed.setThumbnail('https://media.discordapp.net/attachments/372916099114729472/388913604377968662/image.png');
    embed.addField('Ready', 'I am online and at your service, CHAOS!');
    embed.setTimestamp();
    client.users.find('id', '615437464173281291').send({ embed });
  */

    //client.user.setGame({name: prefix + 'help'});
    //client.user.setGame({type: 1, name: prefix + "help", url: ""});
    //client.user.setStatus(status[Math.round(Math.random()*2)]);
});

client.on('message', message => {

    if (!message.content.startsWith(prefix)) return;
    if (message.author.id === client.user.id) return;
    if (message.author.bot) return;

    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length).toLowerCase();

    var args = message.content.split(" ").slice(1);
    //args[0] = args[0].toLowerCase();
    //var args = message.content.split(" ").slice(1);//.toString().toLowerCase();
    //var args = argsU.toLowerCase();
    //args = args.toLowerCase();

    if (command === 'ping') {
        message.channel.send("Pong!");
    } else
       if (command === 'king') {
       let embed = new Discord.RichEmbed();
            embed.setColor("#ffff00");
            embed.addField("NEWS", 'Zurzeit keine');
            embed.addField('Preise', king[0]);
         message.channel.send({ embed });
    } else
    if (command === 'hello' || command === 'hi') {
        message.channel.send(`${greetings[Math.floor(Math.random()*(greetings.length))]} ${message.author.username}!`);
    } else
    if (command === 'talk') {
        message.channel.send(responses[Math.round(Math.random(0, 1)*10)]);
    } else
    if (command === 'uptime') {
        message.channel.send(':clock2: **Chaotic Streams** has been online for ' + millisToTime(totalTime) + '.');
    } else
    if (command === 'info') {
        let embed = new Discord.RichEmbed();
        embed.setThumbnail(client.user.avatarURL);
        embed.addField('Users', client.users.size, true);
        embed.addField('Servers', client.guilds.size, true);
        embed.addField('Creator', '<@625658409403940868>', true);
        embed.addField("Invite", 'http://bit.ly/inviteChaoticStreams', true);
        embed.setColor('#00ffcc');
        message.channel.send({ embed });
    } else

    

    if (command === 'help') {
        if (args[0] === 'userinfo' || args[0] === 'userInfo') {
            let embed = new Discord.RichEmbed();
            embed.setColor("#ffff00");
            embed.addField("Userinfo", 'Use **`k.userInfo <username>`** for user\'s statistics.');
            message.channel.send({ embed });
        } else
        if (args[0] === 'browse') {
            let embed = new Discord.RichEmbed();
            embed.setColor("#ffff00");
            embed.addField("Browse", 'Use **`k.browse hot`** for top hotlist program.\nUse **`k.browse recent`** for most recent program.\nUse **`k.browse votes`** for highest voted program.');
            message.channel.send({ embed });
        } else
        if (args[0] === 'programdata' || args[0] === 'programData') {
            let embed = new Discord.RichEmbed();
            embed.setColor("#ffff00");
            embed.addField("ProgramData", 'Use **`k.programData <program-id>`** for a program\'s data.');
            message.channel.send({ embed });
        } else
        if (args[0] === 'discussion') {
            let embed = new Discord.RichEmbed();
            embed.setColor("#ffff00");
            embed.addField("Discussion", 'Use **`k.discussion <username>`** for a user\'s discussion.');
            message.channel.send({ embed });
        } else
        if (args[0] === 'badges') {
            let embed = new Discord.RichEmbed();
            embed.setColor("#ffff00");
            embed.addField("Badges", 'Use **`k.badges <username>`** for a user\'s badge counts.');
            message.channel.send({ embed });
        } else
        if (args[0] === 'userprograms' || args[0] === 'userPrograms') {
            let embed = new Discord.RichEmbed();
            embed.setColor("#ffff00");
            embed.addField("UserPrograms", 'Use **`k.userPrograms <username>`** to get all a user\'s program stats.');
            message.channel.send({ embed });
        } else
        if (args[0] === 'badgeinfo' || args[0] === 'badgeInfo') {
            let embed = new Discord.RichEmbed();
            embed.setColor("#ffff00");
            embed.addField("BadgeInfo", 'Use **`k.badgeInfo <badge-name>`** to returns info about a given badge.');
            message.channel.send({ embed });
        }
        else if (args.length === 0) {
            let embed = new Discord.RichEmbed();
            embed.setColor("#ffff00");
            embed.addField("Random Stuff", commands[0]);
            message.channel.send({ embed });
        }
        else {
            let embed = new Discord.RichEmbed();
            embed.setColor('#ff0000');
            embed.addField('Error', 'That command is not defined for `help` to check. Use **`k.help`** to see commands.');
            message.channel.send({ embed });
        }
    } else

   

    if (command === 'update') {
        // Automatically run this command incase the bot crashes, it continues to run regardless if I start it.
        // Check author name, only I can call these commands.
        // Bot only posts in certain channel with ID.
        // Maybe let admin use command.
        // Add timestamp.
        // Instead of posting a new message every interval, it just edits the message so there is always one.

        // Check perms and channel.
        if (message.author.id != 625658409403940868) {
            message.channel.send('You don\'t have permission to use this command, sorry!');
            return;
        }
        if (message.channel.id != 625658409403940868) {
            message.channel.send('I can\'t execute this command outside of the Dusktopia #recent-list channel, sorry!');
            return;
        }
        // Check arg.
        if (args[0] === 'stop') {
            mode = 'stop';
        } else
        if (args[0] === 'start') {
            mode = 'start';
        }

       

        let currentTime;
        let run = setInterval(function() {
            currentTime = new Date().getSeconds(); // CHANGE
            if (currentTime % 10 === 0) {
                getProgram();
            }
            if (mode === 'stop') {
                clearInterval(run);
            }
        }, 1000);
    } else

    if (command === "restart") {
        if (!message.author.id == 625658409403940868) {
              message.reply(":x: Only  Chaos can restart the bot.");
              return;
          }
          message.channel.send("<a:loadinggif:406945578967367680> Restarting");
          client.user.setStatus("dnd");
          setTimeout(() => {
              process.exit(0);
          }, 1000);
    }
    /*
    else {
        let embed = new Discord.RichEmbed();
        embed.setColor('#ff0000');
        embed.addField('Error', 'That command is not defined. Use **`k.help`** for more.');
        message.channel.sendEmbed(embed);
    }*/
});

client.login(process.env.BOT_TOKEN)
    .then(() => console.log("Valid token"))
    .catch(() => console.log("Invalid token"));
