import axios from "axios";
import React, { useState } from "react";

export function UpdateUserForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [showUsers, setShowUsers] = useState<boolean>(false);
  const baseUrl = process.env.REACT_APP_API_URL;

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const response = await axios.get(`${baseUrl}/updateUser?email=${email}&password=${password}`);

    const statusCode = response.status;
    const isSuccessful = statusCode === 200;

    if (isSuccessful) {
      setResponseMessage(`user (${email}) updated successfully`);
    } else {
      setResponseMessage("user wasn't updated");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update User</h2>
      <label>Email (required)</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} required />
      <br />
      <label>Password </label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Update</button>
      <p>{responseMessage}</p>
    </form>
  );
}
