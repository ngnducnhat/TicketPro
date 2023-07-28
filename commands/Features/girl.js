const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    PermissionFlagsBits,
} = require("discord.js");
const { botColor, botWebsite, text } = require("../../config.json");
const girlSchema = require("../../Models/girl");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("girl")
        .setDescription("Send Girl image")
        .setDescriptionLocalization("vi", "Mlem Mlem"),

    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setColor("DarkVividPink")
            .setTitle(`<:mlemmlem:1072921828315648122> Mlem Mlem`)
            .setDescription(`a`)
            .setFooter({ text: "Sưu tầm tại J2TEAM Girls" });

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("next")
                .setLabel(`Xem Tiếp`)
                .setStyle(ButtonStyle.Primary)
                .setEmoji("<:mlemmlem:1072921828315648122>"),
            new ButtonBuilder()
                .setStyle(ButtonStyle.Link)
                .setLabel(`Link Group`)
                .setURL(
                    "https://www.facebook.com/groups/j2team.community.girls/"
                )
        );

        interaction.reply({
            embeds: [embed],
            components: [row],
        });
    },
};
