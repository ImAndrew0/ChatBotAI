const Discord = require("discord.js");
const fetch = require("node-fetch")

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]
})

var token = 'process.env.token'
client.login(token)

client.on("ready", () => {
    console.log("OK")
})

client.on("messageCreate", message => {
    if(message.author.bot || message.channel.type == "DM"){
        return
    }

    if(message.channel.id == "945414851398893572"){
        fetch(`https://api-monkedev.herokuapp.com/fun/chat?msg=${message.content}`)
            .then(response => response.json())
            .then(data => {
                message.channel.send(data.response)
            })

            .catch(() => {
                message.channel.send("❌ Impossibile trovare una risposta!")
            })
    }
})