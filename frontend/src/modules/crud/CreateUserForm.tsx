import axios from "axios";
import React, { useState } from "react";

export function CreateUserForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const baseUrl = process.env.REACT_APP_API_URL;

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const url = `${baseUrl}/createUser?email=${email}&password=${password}&name=${name}&phone=${phone}`;

    const response = await axios.get(url);

    const statusCode = response.status;
    const isSuccessful = statusCode === 200;

    if (isSuccessful) {
      setResponseMessage(`user ${email} created successfully`);
    } else {
      setResponseMessage("user wasn't created");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create User</h2>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <br></br>
        <label>Phone</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        <br></br>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <button type="submit">Create</button>
        <p>{responseMessage}</p>
      </form>
    </>
  );
}
