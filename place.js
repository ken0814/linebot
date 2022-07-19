import axios from 'axios'

const lists = []

export default async (e) => {
  try {
    const { data } = await axios.get('https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx')
    for (const p of data) {
      lists.push(p.Address)
    }
    e.reply(`地點:${lists}`)
  } catch (error) {
    console.log(error)
  }
}
