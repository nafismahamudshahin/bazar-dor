import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const mongoDbUrl = process.env.BETTER_AUTH_DB_URL as string

const client = new MongoClient(mongoDbUrl);

const db = client.db("bazerdorbd");

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        client,
    }),
});