import type { Tenant } from './tenant.model';

export interface Course {
  id: string;
  name: string;
  tenant: Tenant;
}
