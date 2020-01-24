import {
  users as sampleUsers,
  // breaches as sampleBreaches,
  // response as sampleResponse
} from "./sample";
import axios from "axios";

function authenticate(email, password) {
  const account = sampleUsers.find(a => a.email === email);
  if (account && account.password === password) {
    return account;
  } else {
    return null;
  }
}

async function login(email, password) {
  const account = authenticate(email, password);
  if (account) {
    const API_URL = 'https://haveibeenpwned.woventeams.com/api/v3/breachedaccount/test@example.com?truncateResponse=false';
    try {
      const response = await axios.get(API_URL);
      console.log(response);
      if (response.data.length > 0) {
        const responseData = response.data;
        
        let breaches = [];
        for (let i = 0; i < responseData.length; i++) {
          let response = responseData[i];
          if (
            response.IsSensitive === false &&
            response.DataClasses.includes("Passwords") &&
            response.AddedDate >= account.lastLogin
          ) {
            breaches.push({
              name: response.Name,
              domain: response.Domain,
              breachDate: response.BreachDate,
              addedDate: response.AddedDate
            });
          }
        }
        console.log(account);
        console.log(breaches.length);
        return {
          success: true,
          meta: {
            suggestPasswordChange: true,
            // hardcoded for now...
            breachedAccounts: breaches
          }
        };
      } else {
        return { success: true };
      }
    } catch (e) {
      console.log(e);
      return { success: true };
    } 
    
  } else {
    return {
      success: false,
      message: "The username or password you entered is invalid."
    };
  }
}

export default login;
