import mongoose from "mongoose";
import User from "../models/User.ts";
import dbConnect from "./connection.ts";
import userInfo from "../seeders/user-seeds.json" with { type: "json" };

const seedDatabase = async () => {
    try {
        await dbConnect();
        await User.deleteMany({});
        console.log(`---------- MongoDB Collection users droped! ----------`);
        console.log(`---------- 🗑️  Cleared all users. ---------- `);
        const userData = await User.create(userInfo);
        console.log(`\n----------Loading seed for collection users... ----------`);
        console.log(userData);
        console.log(`---------- User Model data seeded ----------`);
        console.log(`\n---------- Seeding completed successfully. ----------\n`);
        console.log(`---------- 🌱 Successfully inserted ${userData.length} users. ----------\n`);
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding data:', error);
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
}
seedDatabase();