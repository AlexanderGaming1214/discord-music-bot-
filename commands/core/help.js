const { EmbedBuilder } = require('discord.js');
const { Translate } = require('../../process_tools');

module.exports = {
    name: 'help',
    description:("All the commands this bot has!"),
    showHelp: false,

    async execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
            .setColor('#ff0000')
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
            .setDescription(await Translate('This code comes from a <GitHub> project <[AlexanderGamig1214/discord-music-bot](https://github.com/AlexanderGaming1214/discord-music-bot-.git)>.<\n>The use of this one is possible while keeping the credits for free.<\n>If you want to remove the credits join the Discord support server. <[here](https://discord.gg/h3xvtExevy)>)'))
            .addFields([{ name: `Enabled - ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') }])
            .setTimestamp()
            .setFooter({ text: await Translate('Music comes first - Made with heart by the Community <❤️>'), iconURL: inter.member.avatarURL({ dynamic: true }) });

        inter.editReply({ embeds: [embed] });
    }
};
