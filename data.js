import axios from 'axios'

const fetch = async (event) => {
  try {
    const { data } = await axios.get('https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx')
    const i = data.findIndex(item => item.Name === event.message.text)
    if (i > -1) {
      event.reply([
        {
          type: 'flex',
          altText: `${data[i].Name}資訊`,
          contents: {
            type: 'bubble',
            size: 'kilo',
            hero: {
              type: 'image',
              url: data[i].PicURL,
              size: 'full',
              aspectRatio: '2:1',
              aspectMode: 'cover',
              action: {
                type: 'uri',
                uri: 'http://linecorp.com/'
              }
            },
            body: {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: data[i].Name,
                  weight: 'bold',
                  size: 'xl'
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  margin: 'lg',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'box',
                      layout: 'baseline',
                      spacing: 'sm',
                      contents: [
                        {
                          type: 'text',
                          text: '地址',
                          color: '#aaaaaa',
                          size: 'sm',
                          flex: 1
                        },
                        {
                          type: 'text',
                          text: data[i].Address,
                          wrap: true,
                          color: '#666666',
                          size: 'sm',
                          flex: 5
                        }
                      ]
                    },
                    {
                      type: 'box',
                      layout: 'baseline',
                      spacing: 'sm',
                      contents: [
                        {
                          type: 'text',
                          text: '電話',
                          color: '#aaaaaa',
                          size: 'sm',
                          flex: 1
                        },
                        {
                          type: 'text',
                          text: data[i].Tel,
                          wrap: true,
                          color: '#666666',
                          size: 'sm',
                          flex: 5
                        }
                      ]
                    },
                    {
                      type: 'box',
                      layout: 'baseline',
                      spacing: 'sm',
                      contents: [
                        {
                          type: 'text',
                          text: '介紹',
                          color: '#aaaaaa',
                          size: 'sm',
                          flex: 1
                        },
                        {
                          type: 'text',
                          text: data[i].HostWords.replace(/\<br\>/gi, ''),
                          wrap: true,
                          color: '#666666',
                          size: 'sm',
                          flex: 5
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        }
      ])
    } else {
      event.reply('查無資料  請確認輸入內容')
    }
  } catch (error) {
    console.log(error)
  }
}

export default {
  fetch
}
