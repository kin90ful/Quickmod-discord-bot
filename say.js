// ★ Crafted by Kin ★

const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Make the bot say something.')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .addStringOption(option =>
            option.setName('message').setDescription('Message to send').setRequired(true)
        ),
    async execute(interaction) {
        const msg = interaction.options.getString('message');
        await interaction.reply({ content: '📢 Message sent!', ephemeral: true });
        await interaction.channel.send(msg);
    },
};
