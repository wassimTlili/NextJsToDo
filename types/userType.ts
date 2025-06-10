import { todoType } from "./todoType";

export type userType = {
  id: number; // Database primary key (serial)
  name: string;
  email: string;
  clerkId: string;
  firstName: string;
  lastName: string;
  photo: string;
  createdAt: Date;
  updatedAt: Date;
  todos?: todoType[]; 
};