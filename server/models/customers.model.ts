import { Schema, model } from 'mongoose';
import { ICustomersModel, ICustomers } from '../../types/customers';

export const CustomersName = 'Customers';
const { Types } = Schema;

const CustomersSchema = new Schema<ICustomersModel<ICustomers>>({
  fullname: {
    type: Types.String,
    required: true
  },
  username: {
    type: Types.String,
    required: true
  },
  email: {
    type: Types.String,
    required: true
  },
  picture: {
    type: Types.String
  },
  gender: {
    type: Types.String,
    required: true
  },
  address: {
    type: Types.String,
    required: true
  },
  phone_number: {
    type: Types.String,
    required: true
  }
});


export const Customers = model<ICustomers>(CustomersName, CustomersSchema) as ICustomersModel<ICustomers>;