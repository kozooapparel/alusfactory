// Content Loader - Reads JSON files from src/content/ directory
// Used by Astro components to fetch products, gallery, and settings

import fs from 'node:fs';
import path from 'node:path';

// Use process.cwd() for consistent path resolution
const contentDir = path.join(process.cwd(), 'src/content');

// Types
export interface Product {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    specs: string[];
    badge?: string;
    featured: boolean;
    order: number;
}

export interface GalleryItem {
    title: string;
    image: string;
    caption: string;
    category: string;
    featured: boolean;
    order: number;
}

export interface SiteSettings {
    siteName: string;
    tagline: string;
    whatsapp: string;
    email: string;
    address: string;
    heroBg: string;
    heroProduct: string;
}

// Helper to read all JSON files from a folder
function readJsonFilesFromFolder<T>(folderName: string): T[] {
    const folderPath = path.join(contentDir, folderName);

    if (!fs.existsSync(folderPath)) {
        console.warn(`Content folder not found: ${folderPath}`);
        return [];
    }

    const files = fs.readdirSync(folderPath).filter((f: string) => f.endsWith('.json'));

    return files.map((file: string) => {
        const content = fs.readFileSync(path.join(folderPath, file), 'utf-8');
        return JSON.parse(content) as T;
    });
}

// Helper to read single JSON file
function readJsonFile<T>(filePath: string): T | null {
    const fullPath = path.join(contentDir, filePath);

    if (!fs.existsSync(fullPath)) {
        console.warn(`Content file not found: ${fullPath}`);
        return null;
    }

    const content = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(content) as T;
}

// =============================================
// PUBLIC API
// =============================================

/**
 * Get all products sorted by order
 */
export function getProducts(): Product[] {
    return readJsonFilesFromFolder<Product>('products')
        .sort((a, b) => a.order - b.order);
}

/**
 * Get featured products (for homepage)
 */
export function getFeaturedProducts(): Product[] {
    return getProducts()
        .filter(p => p.featured)
        .slice(0, 4);
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: string): Product[] {
    if (category === 'Semua') return getProducts();
    return getProducts().filter(p => p.category === category);
}

/**
 * Get all gallery items sorted by order
 */
export function getGallery(): GalleryItem[] {
    return readJsonFilesFromFolder<GalleryItem>('gallery')
        .sort((a, b) => a.order - b.order);
}

/**
 * Get featured gallery items (for homepage)
 */
export function getFeaturedGallery(): GalleryItem[] {
    return getGallery()
        .filter(g => g.featured)
        .slice(0, 5);
}

/**
 * Get site settings
 */
export function getSiteSettings(): SiteSettings {
    const settings = readJsonFile<SiteSettings>('settings/site.json');

    // Default fallback
    return settings || {
        siteName: 'Alus Factory',
        tagline: 'Custom Apparel Manufacturing',
        whatsapp: '628112230558',
        email: 'info@alusfactory.com',
        address: '',
        heroBg: '86_efklrp',
        heroProduct: 'Untitled_design_u6t3pr.png'
    };
}
