'use server';

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export default async function short(shortUrl) {
    // Ensure shortUrl is valid
    if (!shortUrl || typeof shortUrl !== 'string') {
        throw new Error('A valid shortUrl string is required');
    }

    // Query the database for the unique short URL
    const res = await prisma.url.findUnique({
        where: {
            shortUrl: shortUrl, // Use shortUrl directly
        },
    });
    // Return the original URL
    return res; // Assuming 'originalUrl' is the field name in your database
}
