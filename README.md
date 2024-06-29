# Discord music bot

module.exports = {
    app: {
        token: 'give you bot token',
        playing: '/help',
        global: true,
        guild: 'give you bot clientID',
        extraMessages: false,
        loopMessage: false,
        lang: 'en',
        Translate_Timeout: 10000,
        enableEmojis: false
},
    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 200,
        spotifyBridge: true,
        volume: 100,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 60000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 60000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
