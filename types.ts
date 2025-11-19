export enum Section {
  HERO = 'hero',
  EXECUTIVE_SUMMARY = 'executive-summary',
  ARCHITECTURE = 'architecture',
  TECH_STACK = 'tech-stack',
  CHAT_PROTOTYPE = 'chat-prototype',
  ROADMAP = 'roadmap',
  COSTS = 'costs',
  SCHEMA = 'schema'
}

export interface CostItem {
  name: string;
  min: number;
  max: number;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  duration: string;
  items: string[];
}

export interface LogField {
  field: string;
  type: string;
  requirement: 'Required' | 'Optional';
  notes: string;
}
