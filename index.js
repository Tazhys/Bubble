const Discord = require("discord.js");
const chalk = require("chalk");
const client = new Discord.Client({
    fetchAllMembers: true,
    disableMentions: 'everyone'
});

client.config = require("./Data/config.json");
client.footer = `beep boop`;

client.on("ready", () => {
    console.log(chalk.greenBright(`[INFO]`) + ` ${client.config.botname} is now online!`)
});

client.on("message", async message => {

    if (message.mentions.has(client.user.id)) {
        message.reply(`Why are you fucking mentioning me? :rage:`)
    }

    if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;
    let args = message.content.slice(client.config.prefix.length).trim().split(/ +/)
    let command = args.shift().toLowerCase()
    console.log(chalk.bgYellowBright(`[COMMAND]`) + ` ${message.author.tag} used the command ` + chalk.greenBright(command) + ` in ${message.guild.name}`)

    if (command === 'help') {
        message.channel.send("`help (show's this message)` | `@mention triggers a funny reaction`")
    }

    if (command === 'embed') {
        let embedCommand = new Discord.MessageEmbed()
            .setTitle(`something here lol`)
            .setAuthor(`something boop`, message.author.displayAvatarURL({ type: "dynamic" }))
            .setThumbnail(message.author.displayAvatarURL({ type: "dynamic" }))
            .setDescription(`boooooop`)
            .addField(`boooop`, `hi lol`)
            .addField(`boooop`, `hi lolvfdbbdsbsdflkbndfkjbdfsbnjjdsfb;ndfs;jbdsa'f`, true)
            .addField(`boooop`, `hi lol`, true)
            .addField(`boooop`, `dagvadsjkvbldasvbdfabv dafbadf;badfbadfj;a`)
            .addField(`boooop`, `hi lol`, true)
            .addField(`boooop`, `hi lol`, true)
            .setFooter(client.footer, message.author.displayAvatarURL({ type: "dynamic" }))
            .setImage(message.author.displayAvatarURL({ type: "dynamic" }))
            .setColor("GREEN")
        message.channel.send(embedCommand)
    }
});

client.login(client.config.token)