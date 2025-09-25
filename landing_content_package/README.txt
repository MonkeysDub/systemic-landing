# Content Package for Cursor
UTF-8, ready to drop into Next.js project root.

## Structure
- /content
  - i18n/ru.json, en.json
  - hero.json
  - company.md
  - segments.json
  - cases.json
  - artifacts.json
  - faq.json
  - seo.json
  - pricing.json
- /schemas/content.ts
- /lib/content.ts

## Usage (Cursor)
1) Place folders `/content`, `/schemas`, `/lib` in project root.
2) Import server-side:
   ```ts
   import { getHero, getSegments, getCases, getArtifacts, getFaq, getSEO, getPricing, getCompanyMd } from './lib/content';
   ```
3) Components must render only from these files. No hardcoded strings.
