let ytdl = require('ytdl-core')
exports.run = async(client, message, args) => {
  if (!message.member.voice.channel) return message.channel.send(`Mohon masuk ke Voice Channel!`);
  
  if (!args[0]) return  message.channel.send(`Mohon masukan link video youtube!`);
  
  let validateURL = await  ytdl.validateURL(args[0])
  if (!validateURL) return message.channel.send(`Mohon masukan link video youtube yg benar!`);
  
  let info = await ytdl.getInfo(args[0])
  let connection = await message.member.voice.channel.join()
  
  let dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly' }));
  message.channel.send(`Now Playing: ${info.videoDetails.title}!`)
}
