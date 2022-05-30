import { Request, Response } from "express";
import l, { logger } from "../../../common/logger";
import { manageError } from "../../../helper/response.helper";
import { BaseController } from "../_base.controller";
import CustomersService from "./customers.service";

export class Controller extends BaseController {

  async getCustomers(req: Request, res: Response): Promise<void> {
    try {
      const response = await CustomersService.getCustomers({
        page: +(req.query.page || 1),
        limit: +(req.query.limit || 10)
      });
      super.response(res, response, 200, "");
    }
    catch (error) {
      logger.error(error);
      const err = manageError(error);
      l.error(`Error in getting Customers, err code: ${400}`);
      l.error(err.message);
      super.response(res, '', err.code, err.message);
    }
  }
  async postCustomers(req: Request, res: Response): Promise<void> {
    try {
      const response = await CustomersService.addCustomers(req.body);
      super.response(res, response, 200, "");
    }
    catch (error) {
      logger.error(error);
      const err = manageError(error);
      l.error(`Error in adding Customers, err code: ${400}`);
      l.error(err.message);
      super.response(res, '', err.code, err.message);
    }
  }

}

export default new Controller();
