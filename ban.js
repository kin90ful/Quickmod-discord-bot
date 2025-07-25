// ★ Crafted by Kin ★
// /ban Command – Hammer of ZenZi

const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban a member from the server.')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addUserOption(option =>
            option.setName('target').setDescription('Select a user to ban').setRequired(true)
        )
        .addStringOption(option =>
            option.setName('reason').setDescription('Reason for ban').setRequired(false)
        ),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'No reason provided.';

        const member = interaction.guild.members.cache.get(target.id);
        if (!member) return interaction.reply({ content: '⚠️ User not found.', ephemeral: true });

        await member.ban({ reason });
        await interaction.reply(`⛔ ${target.tag} has been banned.\n**Reason:** ${reason}`);
    },
};
