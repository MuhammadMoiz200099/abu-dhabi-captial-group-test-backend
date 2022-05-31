import CustomerTest from "./test-scripts/customer.test"

describe('Backend Unit Test', () => {
  describe('Configure Customers Unit Test', () => {
    CustomerTest.getCustomer()
    CustomerTest.addCustomer()
  });
});
