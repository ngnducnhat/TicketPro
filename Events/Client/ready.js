const mongoose = require("mongoose");
const config = require("../../config.json");
require('colors');

module.exports = {
    name: "ready",
    once: true,

    async execute(interaction, client) {
        await mongoose.connect(config.mongodb || '', {
            keepAlive: true,
        });

        if (mongoose.connect)
            console.log('✔ MONGODB'.green, 'Database connected');

        setInterval(() => {
            const activities = [
                {
                    name: "Ticket",
                    type: 3,
                },
                {
                    name: "/help",
                    type: 0,
                },
            ];
            const customActivities = Math.floor(
                Math.random() * activities.length
            );

            client.user.setActivity(`${activities[customActivities].name}`, {
                type: activities[customActivities].type,
                status: "online",
            });
        }, 5000);
        console.log(`✔ ${client.user.username}`.green, `is now online.`);
    },
};