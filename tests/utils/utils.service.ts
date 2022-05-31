import supertest from "supertest";
import AppConfig from "../config/app.config";

class Utils {

  private agent = supertest.agent(AppConfig.bkUrl);

  getClient() {
    return this.agent;
  }

}

export default new Utils;
