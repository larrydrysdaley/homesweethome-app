import { NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { Property } from '@/app/lib/properties';

const DATA_FILE = path.join(process.cwd(), 'data', 'properties.json');
const IMAGES_DIR = path.join(process.cwd(), 'public', 'uploads');

// Ensure directories exist
async function ensureDirectories() {
    const dataDir = path.join(process.cwd(), 'data');
    if (!existsSync(dataDir)) {
        await mkdir(dataDir, { recursive: true });
    }
    if (!existsSync(IMAGES_DIR)) {
        await mkdir(IMAGES_DIR, { recursive: true });
    }
}

// Read properties from file
async function readProperties(): Promise<Property[]> {
    try {
        await ensureDirectories();
        if (!existsSync(DATA_FILE)) {
            return [];
        }
        const data = await readFile(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading properties:', error);
        return [];
    }
}

// Write properties to file
async function writeProperties(properties: Property[]) {
    await ensureDirectories();
    await writeFile(DATA_FILE, JSON.stringify(properties, null, 2));
}

// GET - Fetch all properties
export async function GET() {
    try {
        const properties = await readProperties();
        return NextResponse.json(properties);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 });
    }
}

// POST - Add new property
export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const properties = await readProperties();

        const newProperty: Property = {
            id: Date.now().toString(),
            title: formData.get('title') as string,
            location: formData.get('location') as string,
            price: parseInt(formData.get('price') as string),
            beds: parseInt(formData.get('beds') as string),
            baths: parseInt(formData.get('baths') as string),
            sqft: parseInt(formData.get('sqft') as string),
            description: formData.get('description') as string,
            images: JSON.parse(formData.get('images') as string),
            amenities: JSON.parse(formData.get('amenities') as string),
            available: formData.get('available') === 'true',
            createdAt: new Date().toISOString()
        };

        properties.push(newProperty);
        await writeProperties(properties);

        return NextResponse.json(newProperty, { status: 201 });
    } catch (error) {
        console.error('Error creating property:', error);
        return NextResponse.json({ error: 'Failed to create property' }, { status: 500 });
    }
}

// DELETE - Remove property
export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'Property ID required' }, { status: 400 });
        }

        const properties = await readProperties();
        const filteredProperties = properties.filter(p => p.id !== id);

        if (properties.length === filteredProperties.length) {
            return NextResponse.json({ error: 'Property not found' }, { status: 404 });
        }

        await writeProperties(filteredProperties);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting property:', error);
        return NextResponse.json({ error: 'Failed to delete property' }, { status: 500 });
    }
}
