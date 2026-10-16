import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import sharp from 'sharp';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const artworkPath = join(projectRoot, 'src/assets/og-620-trio.svg');
const outputPath = join(projectRoot, 'public/og-620-trio.jpg');
const artwork = await readFile(artworkPath);

await sharp(artwork)
  .jpeg({ quality: 86, mozjpeg: true, progressive: true })
  .toFile(outputPath);

console.log(`Generated ${outputPath}`);
