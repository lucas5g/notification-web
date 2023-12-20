import express from 'express'
import WebPush from 'web-push'
import cors from 'cors'
const publicKey = 'BNDS9MRreKOaJyhN5TVLMTyAY6LQ-RWor_Wn-BA8ma6eIcTK5soLSZIQBvIa3fTuIiYsHCjgKnnWMWMInGWuLqg'
const privateKey = 'xEoo2Hoy_aQhcsCtOx8CMSUUCpMOgHfSpNBOjc-2khw'
const api = 'http://localhost:3333'

WebPush.setVapidDetails(
  // api,
  'https://localhost:3333',
  publicKey,
  privateKey
)

const app = express()
app.use(cors())
app.use(express.json())
app.post('/register', (req, res) => {
  console.log(req.body)
})

app.post('/send', async (req, res) => {
  const subscription = req.body

  setTimeout(() => {


    // WebPush.sendNotification(subscription, 'Hello do backend')
  }, 3500)
  return res.sendStatus(201)
})

app.listen(3333, () => console.log(`Server Run!\n ${api}`))