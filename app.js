'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: "EAADKfIbnZChMBAOxeTXkZBVkSXpywRCtc3Hgx0BvFZBOkqOpBruUH583wluzEWzeYQrmqIec897g3FMwTFFxQmi9nELaohNARmeZAYQaZCzXcgsurp0EMHOULwaQdMUZASCJY1WrPWXmACJYYZAMaAXAkHZCaQM3WZBFifPNEN57MiAZDZD",
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)
