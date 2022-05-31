import { Document } from "mongoose";

export interface ICustomers extends Document {
  fullname: string;
  username: string;
  email: string;
  picture: string;
  gender: string;
  address: string;
  phone_number: string;
}

export interface ICustomersModel<T extends Document> { }
