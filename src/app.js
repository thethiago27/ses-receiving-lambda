const TelegramBot = require("node-telegram-bot-api");
const {TELEGRAM_BOT_TOKEN} = require("./env/config");
const {parseEmailMessage} = require("./services/parser-email-message");
const {checkIsSpam} = require("./services/check-is-spam");

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, {polling: true})

exports.handler = async (event, context, callback) => {

  const sesNotification = event.Records[0].ses;

  const verifyMessage = checkIsSpam(sesNotification.mail.receipt);

  if (verifyMessage) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({message: "Email is spam"})
    })
  }

  const message = parseEmailMessage(sesNotification);

  if (message) {

    const text = `New email from ${message.from} with subject: ${message.subject} and body`;

    await bot.sendMessage(process.env.USER_RECIPIENT, text);
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({message: "Email sent"})
  })

}
