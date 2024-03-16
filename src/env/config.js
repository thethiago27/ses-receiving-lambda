require('dotenv').config()

module.exports = {
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
  NODE_ENV: process.env.NODE_ENV,
  USER_RECIPIENT_ID: process.env.USER_RECIPIENT
}