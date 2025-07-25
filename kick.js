// ★ Crafted by Kin ★
// kick Command – Clean Removal

const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kick a member from the server.')
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .addUserOption(option =>
            option.setName('target').setDescription('Select a user to kick').setRequired(true)
        )
        .addStringOption(option =>
            option.setName('reason').setDescription('Reason for kick').setRequired(false)
        ),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'No reason provided.';

        const member = interaction.guild.members.cache.get(target.id);
        if (!member) return interaction.reply({ content: '⚠️ User not found.', ephemeral: true });

        await member.kick(reason);
        await interaction.reply(`✅ ${target.tag} has been kicked.\n**Reason:** ${reason}`);
    },
};
