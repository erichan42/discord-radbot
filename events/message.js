const commands = require('./../commands/index');

module.exports = async (client, message) => {
  if (message.content.startsWith('!')) {
    const args = message.content.split(' ');
    args[0] = args[0].substring(1);

    switch (args[0]) {
      case 'ping':
        commands.ping(client, message);
        break;
      case 'play':
        await commands.play(client, message, args);
        break;
      default:
        message.channel.send('Command not found.');
    }
  }
}