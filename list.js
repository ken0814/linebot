import axios from 'axios'

const storeName = []

export default async (event) => {
  try {
    const { data } = await axios.get('https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx')
    for (const D of data) {
      if (D.Address.includes(event.message.text.slice(2))) {
        storeName.push(D.Name)
      }
    }
    const text = JSON.stringify(storeName).replace(/\[/g, '').replace(/\]/g, '').replace(/\"/g, '').replace(/\,/g, ', ')
    if (text === '') {
      event.reply('查無資料')
    } else {
      event.reply(`${event.message.text.slice(2)}農村地方小吃:
${text}`)
    }
    storeName.splice(0, storeName.length)
  } catch (error) {
    console.log(error)
  }
}
