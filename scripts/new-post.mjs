import fs from 'node:fs';
import path from 'node:path';

const [slugArg, ...titleParts] = process.argv.slice(2);
const titleArg = titleParts.join(' ').trim();

if (!slugArg) {
	console.error('Usage: npm run new:post -- <slug> "<Title>"');
	process.exit(1);
}

const slug = slugArg
	.toLowerCase()
	.normalize('NFKD')
	.replace(/[\u0300-\u036f]/g, '')
	.replace(/[^a-z0-9]+/g, '-')
	.replace(/(^-|-$)/g, '');

const title = titleArg || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
const today = new Date().toISOString().slice(0, 10);

const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');
const filePath = path.join(contentDir, `${slug}.md`);

if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir, { recursive: true });
if (fs.existsSync(filePath)) {
	console.error(`Post already exists: ${filePath}`);
	process.exit(1);
}

const template = `---
title: '${title.replaceAll("'", "’")}'
description: ''
pubDate: '${today}'
heroImageUrl: 'https://...'
game: ''
platform: ''
youtubeUrl: 'https://www.youtube.com/watch?v='
images:
  - 'https://...'
tags: []
---

Escreva aqui o texto do gameplay.
`;

fs.writeFileSync(filePath, template, 'utf8');
console.log(`Created: ${filePath}`);

