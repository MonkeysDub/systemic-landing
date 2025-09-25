import fs from 'node:fs/promises';
import path from 'node:path';
import type { HeroCopy, Segment, CaseCard, ArtifactCard, FaqItem, SEOConfig, Pricing } from '../schemas/content';

const root = process.cwd();

async function readFile(p: string) {
  return fs.readFile(path.join(root, 'content', p), 'utf8');
}

export async function getHero(): Promise<HeroCopy> {
  return JSON.parse(await readFile('hero.json'));
}
export async function getCompanyMd(): Promise<string> {
  return readFile('company.md');
}
export async function getSegments(): Promise<Segment[]> {
  return JSON.parse(await readFile('segments.json'));
}
export async function getCases(): Promise<CaseCard[]> {
  return JSON.parse(await readFile('cases.json'));
}
export async function getArtifacts(): Promise<ArtifactCard[]> {
  return JSON.parse(await readFile('artifacts.json'));
}
export async function getFaq(): Promise<FaqItem[]> {
  return JSON.parse(await readFile('faq.json'));
}
export async function getSEO(): Promise<SEOConfig> {
  return JSON.parse(await readFile('seo.json'));
}
export async function getPricing(): Promise<Pricing[]> {
  return JSON.parse(await readFile('pricing.json'));
}
