import { BookingInterface } from 'interfaces/booking';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  organization?: OrganizationInterface;
  _count?: {
    booking?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  organization_id?: string;
}
