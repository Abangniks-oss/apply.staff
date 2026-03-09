const {Client,GatewayIntentBits,ActionRowBuilder,ButtonBuilder,ButtonStyle} = require('discord.js')

const client = new Client({
intents:[GatewayIntentBits.Guilds]
})

client.on("ready",()=>{
console.log("Bot Online")
})

client.on("interactionCreate", async interaction =>{

if(!interaction.isButton()) return

if(interaction.customId === "accept"){
interaction.reply("✅ Application diterima")
}

if(interaction.customId === "reject"){
interaction.reply("❌ Application ditolak")
}

})

client.login("TOKEN_BOT")