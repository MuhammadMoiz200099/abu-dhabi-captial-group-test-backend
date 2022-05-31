import Utils from '../utils/utils.service';
import { customer } from '../utils/api.service';

class CustomerService {
  getCustomer() {
    return Utils.getClient()
      .get(customer.customer)
  }
  addCustomer(payload) {
    return Utils.getClient()
      .post(customer.customer)
      .send(payload)
  }
}

export default new CustomerService();
