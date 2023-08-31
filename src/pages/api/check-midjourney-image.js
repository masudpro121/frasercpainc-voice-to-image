const axios = require("axios")
export default async function handler(req, res) {
  const response = await axios.get("https://api.thenextleg.io/v2/message/"+req.query.id,{
      headers:  {
        Authorization : 'Bearer f1cd0d27-a07c-4b8b-b08c-a4f3a64e93f7',
        'Content-Type': 'application/json'
      }
    })

  res.send(response.data)
  // res.status(200).json({ name: 'John Doe' })
}
