import axios from "axios";
import React, { useState } from "react";

export function DeleteUserForm() {
  const [email, setEmail] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [showUsers, setShowUsers] = useState<boolean>(false);
  const baseUrl = process.env.REACT_APP_API_URL;

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const url = `${baseUrl}/deleteUser?email=${email}`;

    const response = await axios.get(url);

    const statusCode = response.status;
    const isSuccessful = statusCode === 200;

    if (isSuccessful) {
      setShowUsers(true);
      setResponseMessage(`user (${email}) deleted successfully`);
    } else {
      setShowUsers(false);
      setResponseMessage("user wasn't deleted");
    }
  }
  return (
    <>
      <form className="form-control api-inputs input-group mb-2" data-bs-theme="dark" onSubmit={handleSubmit}>
        <h2>Delete User</h2>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <button type="submit">Delete</button>
        <p>{responseMessage}</p>
      </form>
    </>
  );
}
