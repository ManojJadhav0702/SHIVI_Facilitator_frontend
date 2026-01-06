export interface Proposal {
  id?: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  serviceType: string;
  projectDescription: string;
  budget?: string;
  timeline?: string;
  createdAt?: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}