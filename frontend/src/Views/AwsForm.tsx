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
