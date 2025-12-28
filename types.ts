
export enum CampaignStatus {
  DRAFT = 'DRAFT',
  SCHEDULED = 'SCHEDULED',
  SENDING = 'SENDING',
  COMPLETED = 'COMPLETED',
  PAUSED = 'PAUSED'
}

export interface Contact {
  id: string;
  name: string;
  phone: string;
  tags: string[];
  attributes: Record<string, string>;
}

export interface Campaign {
  id: string;
  name: string;
  status: CampaignStatus;
  sentCount: number;
  totalCount: number;
  createdAt: string;
  templateName: string;
  stats: {
    delivered: number;
    read: number;
    failed: number;
  };
}

export interface AutomationFlow {
  id: string;
  trigger: string;
  action: string;
  isActive: boolean;
}

export interface MessageTemplate {
  id: string;
  name: string;
  content: string;
  category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION';
  status: 'APPROVED' | 'PENDING' | 'REJECTED';
}
