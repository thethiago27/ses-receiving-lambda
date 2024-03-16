function parseEmailMessage(email) {
  const { mail } = email;
  const { commonHeaders, receipt, headers } = mail;

  return {
    subject: commonHeaders.subject || '',
    from: commonHeaders.from || '',
    to: commonHeaders.to || '',
    timestamp: commonHeaders.date || '',
    body: mail.commonHeaders.textBody || '',
    headers: headers.map(header => ({name: header.name, value: header.value})),
  };
}

module.exports = { parseEmailMessage };