export interface CurrentOrganisation {
    id: number;
    name: string;
    logo_url: string;
    is_personal: boolean;
  }
  
  interface DocumentLink {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  }

  interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
  }

  interface PaginationMeta {
    current_page: number;
    from: number;
    last_page: number;
    links: PaginationLink[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  }

export interface User {
    data : {
        id: number;
        name: string;
        email: string;
        profile_picture_url: string;
        email_verified_at: string;
        identification_number: string;
        current_organisation: CurrentOrganisation;
    }
  }
  
export interface Document {
    id: number;
    status: string;
    document_name: string;
    issuer_name: string;
    issuer_logo_url: string;
    recipient_name: string;
    received_on: string | null;
    expire_at: string | null;
    created_at: string;
    updated_at: string;
    archived_at: string | null;
    deleted_at: string | null;
  }

export interface DocumentsList {
    data: Document[];
    links: DocumentLink;
    meta: PaginationMeta;
}

export interface CareerGoal {
    id: number;
    name: string;
    description: string;
    category: string;
    type: string;
    progress: number;
  }

export interface CareerGoalList {
  data: CareerGoal[];
}