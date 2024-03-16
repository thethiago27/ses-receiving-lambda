function parseEmailMessage(email) {
  const { mail } = email;
  const { commonHeaders, headers } = mail;

  return {
    subject: commonHeaders.subject || '',
    from: commonHeaders.from || '',
    to: commonHeaders.to || '',
    timestamp: commonHeaders.date || '',
    headers: headers.map(header => ({name: header.name, value: header.value})),
  };
}

module.exports = { parseEmailMessage };