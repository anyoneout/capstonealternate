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
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Create user</legend>
                <div className="input-group mb-2" data-bs-theme="dark">
                  <input
                    type="email"
                    className="form-control api-inputs"
                    placeholder="Email"
                    aria-label="create user email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group mb-2" data-bs-theme="dark">
                  <input
                    type="text"
                    placeholder="Password"
                    className="form-control api-inputs"
                    aria-label="create user password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input-group mb-2" data-bs-theme="dark">
                  <input
                    type="text"
                    className="form-control api-inputs"
                    placeholder="Name"
                    aria-label="create user name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="input-group mb-2" data-bs-theme="dark">
                  <input
                    type="text"
                    className="form-control api-inputs"
                    placeholder="Phone"
                    aria-label="create user phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </fieldset>

              <button type="submit">Create</button>
              <p>{responseMessage}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
