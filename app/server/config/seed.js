const { User } = require("../models");
const db = require("./connection");
const userInfo  = require("../seeders/user-seeds.json");

db.once("open", async () => {
    console.log(`Database connection open...`);
    try {
        let userDropCheck = await db.db.listCollections({ name: "users" }).toArray();
        if(userDropCheck.length) {
            await db.dropCollection("users");
            console.log(`---------- MongoDB Collection users droped! ----------`);
        }
        const userData = await User.create(userInfo);
        console.log(`\n----------Loading seed for collection users...`);
        console.log(userData);
        console.log(`---------- User Model data seeded ----------`);
        console.log(`\n---------- Seeding completed successfully. ----------`);
        process.exit(0);
        
    } catch (error) {
        console.log(`ERROR message: ${error}`);
    }
});