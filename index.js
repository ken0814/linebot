import 'dotenv/config'
import linebot from 'linebot'
import data from './data.js'
import list from './list.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', (event) => {
  if (event.message.text.match('!')) {
    list(event)
  } else if (event.message.type === 'text') {
    data.fetch(event)
  } else {
    event.reply('請輸入指定文字')
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
