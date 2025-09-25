export type SegmentId = 'startup'|'smb'|'creators'|'edtech'|'edu'|'investors'|'corp'|'gov';

export interface HeroCopy {
  title: string; subtitle: string;
  ctas: { primary: string; secondary: string };
}

export interface Segment {
  id: SegmentId; title: string;
  icp: string[]; tasks: string[]; deliverables: string[];
  value: string; cta: string;
}

export interface CaseCard {
  segment: SegmentId;
  problem: string; solution: string; result: string; kpi: string;
}

export interface ArtifactCard { tool: 'Notion'|'Figma'|'BI'; items: string[]; }
export interface FaqItem { q: string; a: string; }
export interface Pricing { packageId: string; name: string; price: string; features: string[]; }

export interface Company {
  who?: string; mission?: string; why?: string[];
  method?: string[]; artifacts?: string[]; kpi?: string[]; clients?: string[];
}

export interface SEOConfig {
  orgName: string; url: string; logo: string;
  ogTitle: string; ogDesc: string; ogImage: string;
}
