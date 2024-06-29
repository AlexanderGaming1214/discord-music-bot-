const { EmbedBuilder } = require('discord.js');
const { Translate } = require('../process_tools');

module.exports = async ({ inter, queue }) => {
    if (!queue?.isPlaying()) return inter.editReply({ content: await Translate(`No music currently playing... try again ? <❌>`) });

    queue.delete();

    const embed = new EmbedBuilder()
        .setColor('#2f3136')
        .setAuthor({ name: await Translate(`Music stopped into this server, see you next time <✅>`) });

    return inter.editReply({ embeds: [embed] });
}