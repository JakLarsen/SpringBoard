import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;
  static currentUser = null;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    console.log('in getCompany()')
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(){
    console.log('in getCompanies()')
    let res = await this.request(`companies`)
    return res
  }

  static async getJobByID(id){
    console.log('in getJobByID()')
    let res = await this.request(`jobs/${id}`)
    return res
  }
  static async getJobs(){
    console.log('in getJobs()')
    let res = await this.request(`jobs`)
    return res
  }

  static async getFilteredCompanies(searchTerm){
    console.log('in getFilteredCompanies()')
    let res = await this.request(`companies?name=${searchTerm}`)
    console.log('Res:', res)
    return res
  }

  static async getFilteredJobs(searchTerm){
    console.log('in getFilteredJobs()')
    let res = await this.request(`jobs?title=${searchTerm}`)
    console.log('Res:', res)
    return res
  }

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async applyToJob(data){
    let res = await this.request(`users/${data.username}/jobs/${data.jobID}`, data, "post");
    console.log('applyToJob', res)
    return res
  }

  static async getUserAppliedJobs(data){
    let res = await this.request(`users/${data.username}/jobs/applied`)
    return res.jobs
  }

  static async removeApplication(data){
    let res = await this.request(`users/${data.username}/jobs/${data.jobID}`, data, "delete")
    return res
  }

}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";



export default JoblyApi;
