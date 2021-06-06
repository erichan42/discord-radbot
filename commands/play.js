const ytdl = require('ytdl-core');

const play = async (client, message, args) => {
  if (args.length === 1) {
    return;
  }

  if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();

    const url = args[1];
    const ytdlOptions = {
      filter: 'audioonly'
    }
    const stream = ytdl(url, ytdlOptions);

    const streamOptions = { seek: 0, volume: 1.0 };
    const dispatcher = connection.play(stream, streamOptions);
    dispatcher.on('end', (end) => {
      connection.disconnect();
    })
  }
}

module.exports = play;