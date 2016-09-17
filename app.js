'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: "EAAEPcWnIuLUBAAiHouXNDqni38wa7gOYkeMO3VniVYoXG7rAgsF47Bb9ZCjKx8YCQdgkZA3zl9SPlt1MwZCmQqa4eKccJ27O87deQBTUMlKYyR2vtt6jtebgWHVlVV9pD0vsQf6ZBevX4Hk2LbVCEfB8sPnwNRIA3B1pYY6CSwZDZD",
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
