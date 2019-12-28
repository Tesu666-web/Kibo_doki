
const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready'), function () {

    // bot.user.setGame('Test juste pour voir tkt mon reuf').catch(console.error)

}
bot.on('message', function (message)  {
    if (message.content === '!ping') {
      message.channel.send('pong !')
    }
  })


bot.login(process.env.TOKEN)
