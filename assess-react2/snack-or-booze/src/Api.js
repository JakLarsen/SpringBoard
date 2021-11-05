import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  /**
   * GET snacks, drinks, or order from json-server pseudo-API
   */
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }
  static async getOrder() {
    const result = await axios.get(`${BASE_API_URL}/order`);
    return result.data;
  }

  /**
   * POST a new snack or drink to json-server pseudo-API
   */
  // static async postSnack(snack){
  //   await axios.post(`${BASE_API_URL}/snacks`)
  // }
  // static async postDrink(drink){
  //   await axios.post(`${BASE_API_URL}/drinks`)
  // }

}

export default SnackOrBoozeApi;
