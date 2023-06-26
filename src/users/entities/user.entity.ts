export interface Users {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: Date;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: EyeColor;
  hair: Hair;
  domain: string;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
}

export interface Address {
  address: string;
  city?: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Company {
  address: Address;
  department: string;
  name: string;
  title: string;
}

export type EyeColor = 'Green' | 'Brown' | 'Gray' | 'Amber' | 'Blue';

export type Gender = 'male' | 'female';

export interface Hair {
  color: Color;
  type: Type;
}

export type Color = 'Black' | 'Blond' | 'Brown' | 'Chestnut' | 'Auburn';

export type Type = 'Strands' | 'Curly' | 'Very curly' | 'Straight' | 'Wavy';
