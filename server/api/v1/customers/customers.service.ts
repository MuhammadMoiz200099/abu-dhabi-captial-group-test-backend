import { PaginateResult } from "mongoose";
import { ICustomers } from "../../../../types/customers";
import { Customers } from "../../../models";

export class CustomersService {

  constructor() { }

  async getCustomers(options): Promise<PaginateResult<ICustomers>> {
    return new Promise(async (resolve, reject) => {
      try {
        const get = await Customers.paginate({}, { ...options });
        return resolve(get);
      } catch (error) {
        return reject(error);
      }
    });
  }

  async addCustomers(payload: ICustomers): Promise<ICustomers> {
    return new Promise(async (resolve, reject) => {
      try {
        if (!payload) {
          return reject({ code: 400, message: "Please send a valid payload request obj" })
        }
        const add = new Customers(payload);
        return resolve(add.save())
      } catch (error) {
        return reject(error);
      }
    });
  }

}

export default new CustomersService();
