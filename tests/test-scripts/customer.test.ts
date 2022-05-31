import CustomerService from "../services/customer.service";
import { payload } from "./../constants/customer.constant";

class CustomerTest {
  getCustomer() {
    it("Should Get all customers", async () => {
      const response = await CustomerService.getCustomer();
      expect(response.body.data).toBeDefined();
      expect(response.body.message).toBe("Customers Feteched Successfully");
      expect(response.status).toBe(200);
    })
  }
  addCustomer() {
    it("Should Get all avatars", async () => {
      const response = await CustomerService.addCustomer(payload);
      expect(response.body.data).toBeDefined();
      expect(response.body.message).toBe("Customer added Successfully");
      expect(response.status).toBe(200);
    })
  }
}

export default new CustomerTest();
