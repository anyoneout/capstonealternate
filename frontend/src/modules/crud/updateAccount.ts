import axios from "axios";
import { Account } from "../../types/Account";

export async function updateAccount(account: Account): Promise<{ status: number }> {
  const { email, password } = account;
  const baseUrl = process.env.REACT_APP_API_URL;
  //makes sure both fields are filled in
  if (!email || !password) {
    return { status: 400 };
  }
  //checks if email already exists on server
  const readUrl = `${baseUrl}/readUser?email=${email}`;
  const readUser = await axios.get(readUrl);
  console.log("readUser.data =", readUser.data);

  //if user does not exist, returns 404 error to keep update from creating a new user
  if (!readUser.data.email) {
    return { status: 404 };
  }
  //updates user with password
  const url = `${baseUrl}/updateUser?email=${email}&password=${password}`;
  const response = await axios.get(url);
  return { status: response.status };
}
