import React, { useState } from "react";
import { CreateUserForm } from "./CreateUserForm";
import { UpdateUserForm } from "./UpdateUserForm";
import { DeleteUserForm } from "./DeleteUserForm";
import { ReadUserForm } from "./ReadUserForm";

export default function AwsForm() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <fieldset>
              <legend>User login/ OpenAI token</legend>
              <div className="input-group mb-2" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Name"
                  aria-label="User Name"
                  aria-describedby="basic-addon1"
                  id="nameInput"
                />
              </div>
              <div className="input-group mb-2" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Email"
                  aria-label="User email"
                  aria-describedby="basic-addon2"
                  id="emailInput"
                />
              </div>
              <div className="input-group mb-2" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Token"
                  aria-label="OpenAi Token Input"
                  aria-describedby="basic-addon2"
                  id="openAiTokenInput"
                />
              </div>
            </fieldset>
            <CreateUserForm />
            <UpdateUserForm />
            <DeleteUserForm />
            <ReadUserForm />
          </div>
        </div>
      </div>
    </main>
  );
}
