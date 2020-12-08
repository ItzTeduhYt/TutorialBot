const Discord =  require('discord.js')
const client =  new Discord.Client()
const prefix = '**'

client.on('ready', () =>  {
  console.log(`Logged In as ${client.user.tag}!`)
})

client.on('message', async message => {
  if (message.author.bot) return;
  let args = message.content.slice(prefix.length).trim().split(/ +/g)
  let commands = args.shift().toLowerCase()
  if (!message.content.startsWith(prefix)) return;
  
  if (commands === 'test') return message.channel.send(`I'm Ready!`)
  try {
    let cmdFiles = require('./commands/' +  commands)
    cmdFiles.run(client, message, args)
  } catch (err) {
    return;
  }
})

client.login(process.env.TOKEN)
