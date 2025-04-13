import axios from "axios";
import React, { useState } from "react";

export function ReadUserForm() {
  const [email, setEmail] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [showUser, setShowUser] = useState<string>("");
  const baseUrl = process.env.REACT_APP_API_URL;

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const url = `${baseUrl}/readUser?email=${email}`;

    const response = await axios.get(url);

    const statusCode = response.status;
    const isSuccessful = statusCode === 200;

    if (isSuccessful) {
      const { email, password } = response.data;
      setResponseMessage(`User (${email}) was found`);
      setShowUser(`Email: ${email}`);
    } else {
      setResponseMessage("user missing");
      setShowUser("");
    }
  }
  return (
    <>
      <form className="form-control api-inputs input-group mb-2" data-bs-theme="dark" onSubmit={handleSubmit}>
        <h2>Show User</h2>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <button type="submit">Show</button>
        <p>{responseMessage}</p>
      </form>
      {showUser}
    </>
  );
}
