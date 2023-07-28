const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    PermissionFlagsBits,
} = require("discord.js");
const girlSchema = require("../../Models/girl");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("upload")
        .setDescription("upload image")
        .setDescriptionLocalization("vi", "upload")
        .addAttachmentOption((option) =>
            option.setName("image").setDescription("Ảnh").setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction, client) {
        const file = interaction.options.getAttachment("image");
        console.log(file)
        imgur.uploadImgur(file.url).then((result) => {
            console.log(result);
        });
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
