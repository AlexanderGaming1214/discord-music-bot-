module.exports = {
    app: {
        token: 'give you bot token',
        playing: 'by the Community ❤️',
        global: true,
        guild: 'give you bot clientID',
        extraMessages: false,
        loopMessage: false,
        lang: 'en',
        enableEmojis: false,
    },

    emojis:{
        'back': '<:previous:1204987352636985344>',
        'skip': '<:skip:1204987331879370762>',
        'ResumePause': '<:resume:1204987258248110081:pause:1204987215617462344 >',
        'savetrack': '<:drive:1163766399316021268>',
        'volumeUp': '<:volup:1204987455795757087>',
        'volumeDown': '<:voldown:1204987440515784735>',
        'loop': '<:queue:1204987613610778624>',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        Translate_Timeout: 10000,
        maxVol: 200,
        spotifyBridge: true,
        volume: 100,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
