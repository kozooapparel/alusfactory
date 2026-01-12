// Cloudinary Configuration for Alus Factory
// Cloud Name from your Cloudinary account

export const CLOUDINARY_CLOUD_NAME = 'dxfxcwtvt';

// Base URL untuk Cloudinary
export const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;

// Helper function untuk generate Cloudinary URL dengan transformasi
export function cloudinaryUrl(
    path: string,
    options: {
        width?: number;
        height?: number;
        crop?: 'fill' | 'fit' | 'scale' | 'thumb';
        quality?: 'auto' | number;
        format?: 'auto' | 'webp' | 'jpg' | 'png';
    } = {}
): string {
    const {
        width,
        height,
        crop = 'fill',
        quality = 'auto',
        format = 'auto'
    } = options;

    const transforms: string[] = [];

    if (width) transforms.push(`w_${width}`);
    if (height) transforms.push(`h_${height}`);
    if (crop) transforms.push(`c_${crop}`);
    transforms.push(`q_${quality}`);
    transforms.push(`f_${format}`);

    const transformString = transforms.join(',');

    // Tambahkan .jpg jika belum ada extension
    const pathWithExt = path.includes('.') ? path : `${path}.jpg`;

    return `${CLOUDINARY_BASE}/${transformString}/${pathWithExt}`;
}

// ============================================
// DAFTAR GAMBAR DARI CLOUDINARY
// File disimpan di root tanpa folder products/
// ============================================

// Produk Jersey
export const JERSEY_IMAGES = [
    '86_efklrp',
    '86_efklrp', // Replaced 57_mqqjah
    '86_efklrp', // Replaced 58_v2fkjy
    '86_efklrp', // Replaced 36_nsul3f
    '33_x0fsjn',
    '34_jqblmc',
    '98_jyveu',
    '97_ngpflq',
    '96_ysaxrs',
    '95_p4meax',
    '94_rru2h',
    '93_qqccsn',
    '91_mquqs',
    '92_mqum5a',
    '90_oyocde',
    '89_jr9d2f',
    '88_qjk3po',
    '87_qzmryy',
    '85_nejb8l',
    '84_lxvpnj',
    '83_wqfeme',
    '82_qnwtkx',
    '80_kqsol',
    '81_xhycnx',
    '79_pe3a8v',
    '78_xw3fhl',
    '77_fap8ho',
    '76_hzfftq',
    '75_jl6dp',
    '73_dilwtx',
    '43_qochv2',
    '44_nvblam',
    '41_caxb3m',
    '38_pnnkjj',
    '40_r5ltsd',
    '39_rtron4',
    '37_ff3aoh',
    '35_e5xrq3',
    '32_flnfs',
    '31_dgekc',
    '30_rbw7to',
    '29_b4acs',
    '28_ztygzx',
    '24_saonqh',
    '23_k8hdv',
    '22_auxly2',
    '21_lon9ew',
    '20_qqywud',
    '19_r1gfij',
    '18_ruk50x',
    '17_emliq',
    '16_vmn6cc',
    '15_s6yz3',
    '14_acahij',
    '13_bbz8mq',
    '12_jmprui8',
    '11_n79ah',
    '10_b83eyq',
    '9_mefwlc',
    '8_isxcm',
    '7_qjhzf',
    '4_prlk4d',
    '110_ejuil',
    '109_e9wpii',
    '109_eibwei',
    '108_mdmps5',
    '107_wrgh51',
    '106_dwds62',
    '105_xcfy62',
    '104_kaxek5',
    '103_oqjocn',
    '102_rchdmo',
    '100_hsrsy',
    '101_cvwq38',
    '99_gfqizz',
];

// Produk Jaket
export const JAKET_IMAGES = [
    '51_kixbrk',
    '5_yxxh3u',
    '6_cmz5dz',
    '1_bafq1w',
    '3_t4ifsn',
    '2_n2vias',
];

// Produk Kaos
export const KAOS_IMAGES = [
    '27_jawzt9',
    '26_gnvgr2',
    '25_lhbnqq',
    '54_szldyt',
    '49_kvthsz',
    '53_ikt8zb',
    '50_ttixul',
    '52_juwjar',
];

// Gallery Images
export const GALLERY_IMAGES = [
    { path: '86_efklrp', caption: 'Jersey Custom Tim Futsal - Full Printing Sublimation', category: 'Tim Olahraga' },
    { path: '86_efklrp', caption: 'Jersey Esports Premium - Desain Full Custom', category: 'Tim Olahraga' },
    { path: '51_kixbrk', caption: 'Jaket Hoodie Komunitas - Bahan Fleece Premium', category: 'Komunitas' },
    { path: '27_jawzt9', caption: 'Kaos Event Komunitas - Cotton Combed 30s', category: 'Komunitas' },
    { path: '86_efklrp', caption: 'Jersey Basket Custom - Pola V-Neck', category: 'Tim Olahraga' },
    { path: '26_gnvgr2', caption: 'Polo Shirt Korporat - Lacoste CVC Bordir', category: 'Perusahaan/Korporat' },
    { path: '5_yxxh3u', caption: 'Jaket Windbreaker Event Musik', category: 'Event' },
    { path: '86_efklrp', caption: 'Jersey Sepakbola Tim Lokal', category: 'Tim Olahraga' },
    { path: '25_lhbnqq', caption: 'T-Shirt Merchandise Brand', category: 'Event' },
    { path: '33_x0fsjn', caption: 'Jersey Gaming Squad - Sublimation Print', category: 'Tim Olahraga' },
    { path: '6_cmz5dz', caption: 'Hoodie Angkatan Universitas', category: 'Komunitas' },
    { path: '54_szldyt', caption: 'Kaos Gathering Perusahaan', category: 'Perusahaan/Korporat' },
    { path: '43_qochv2', caption: 'Jersey Tim Bola Voli Custom', category: 'Tim Olahraga' },
    { path: '20_qqywud', caption: 'Jersey Futsal League - Full Print', category: 'Tim Olahraga' },
    { path: '110_ejuil', caption: 'Jersey Badminton Premium', category: 'Tim Olahraga' },
    { path: '49_kvthsz', caption: 'Kaos Crew Event Festival', category: 'Event' },
];

// Hero Background
export const HERO_BG = '86_efklrp';
export const HERO_PRODUCT = 'Untitled_design_u6t3pr.png';

// About Section Images
export const ABOUT_IMAGES = [
    '86_efklrp', // Jersey Hero (Pasti ada)
    '51_kixbrk', // Hoodie (Confirmed ada)
];

// Header Backgrounds untuk setiap halaman
export const HEADER_BG = {
    produk: '36_nsul3f',
    galeri: '51_kixbrk',
    tentang: '26_gnvgr2',
};
