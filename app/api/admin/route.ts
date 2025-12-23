import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define path to properties file
// Note: In Vercel serverless, we can't write persistently to the filesystem.
// This will work locally. For production, a database is required.
const dataFilePath = path.join(process.cwd(), 'app', 'lib', 'properties.ts');

// Helper to parse properties from the TS file
// This is a hacky way to read the data without a DB, parsing the text content.
function getProperties() {
    try {
        const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
        // Extract the array part using regex or simple parsing
        // Looking for: export const sampleProperties: Property[] = [...];
        const match = fileContent.match(/export const sampleProperties: Property\[\] = (\[[\s\S]*\]);/);
        if (match && match[1]) {
            // Need to convert TS/JS object string to JSON (add quotes to keys)
            // This is complex regex work.
            // Safer alternative for this "No DB" constraint: 
            // Serve a simplified JSON file if we can, but we are stuck with properties.ts
            // Let's rely on the client sending the full state for "Add" and we just append to a JSON file we create if it doesn't exist?
            // Better: Let's create a data.json file if it doesn't exist, and use that as source of truth if transparent.
            // But the site reads from properties.ts.
            return null;
        }
    } catch (error) {
        return null;
    }
}

// Simple in-memory store for serverless runtime (will reset on cold boot)
// plus fs write for local dev.
let propertiesCache: any[] = [];

export async function GET() {
    // Return the properties
    // In a real app, this would query the DB. 
    // For now, we return a success message or the mock data.
    return NextResponse.json({ message: "API active" });
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        // We are generating a new property entry.
        // Since we cannot reliably modify properties.ts source code programmatically without risk,
        // and we don't have a DB, we will SIMULATE the addition for the User's session if possible or just Log it.

        // However, the user specifically asked to "post more houses". 
        // To make this work LOCALLY (which is where they are testing), we can append to properties.ts.

        const newProperty = {
            id: Date.now().toString(),
            ...data,
            createdAt: new Date().toISOString()
        };

        // Read current file
        let fileContent = fs.readFileSync(dataFilePath, 'utf-8');

        // Find the end of the array
        const closingBracketIndex = fileContent.lastIndexOf('];');

        if (closingBracketIndex !== -1) {
            const newEntryString = `
    {
        id: '${newProperty.id}',
        title: ${JSON.stringify(newProperty.title)},
        location: ${JSON.stringify(newProperty.location)},
        price: ${newProperty.price},
        beds: ${newProperty.beds},
        baths: ${newProperty.baths},
        sqft: ${newProperty.sqft},
        description: ${JSON.stringify(newProperty.description)},
        images: ${JSON.stringify(newProperty.images)},
        amenities: ${JSON.stringify(newProperty.amenities)},
        available: true,
        createdAt: '${newProperty.createdAt}'
    },`;

            const newContent = fileContent.slice(0, closingBracketIndex) + newEntryString + fileContent.slice(closingBracketIndex);
            fs.writeFileSync(dataFilePath, newContent);
            return NextResponse.json({ success: true, property: newProperty });
        }

        return NextResponse.json({ success: false, error: "Could not parse file structure" }, { status: 500 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Failed to save property" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json();

        let fileContent = fs.readFileSync(dataFilePath, 'utf-8');

        // This is a very fragile way to delete, but for a local "hack" requested by user it works.
        // We will read the file, try to identify the block with that ID and remove it.
        // Or simpler: We just accept we can't easily delete from a complex TS file with Regex safely.

        return NextResponse.json({ success: false, error: "Deletion not supported in file-based mode. Please edit app/lib/properties.ts manually." }, { status: 501 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Failed to delete" }, { status: 500 });
    }
}
