function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '6289601145546', 'Nurutomo', m)
  this.sendContact(m.chat, '6289601145546', 'sahabat ku Dora', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
