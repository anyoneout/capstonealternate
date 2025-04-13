import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Views/Home";
import { About } from "./Views/About";
import { BfPage } from "./Views/BfPage";
import { OaPage } from "./Views/OaPage";
import Examples from "./Views/Examples";
import { HandleRefresh } from "./Views/components/HandleRefresh";
import { CollapsibleNavbar } from "./Views/components/CollapsibleNavbar";
import SignInArea from "./Views/components/SignInArea";
import "./index.scss";
import { Server } from "./Views/Server";
import { TriviaApiResponsePage } from "./Views/TriviaApiResponsePage";
import { DynamoAuthPage } from "./Views/DynamoAuthPage";

const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);
const domain = window.location.hostname;
let rootPath = "";
if (domain === "anyoneout.github.io") rootPath = "/Capstone-Level-4";
root.render(
  <BrowserRouter>
    <CollapsibleNavbar />
    <HandleRefresh>
      <Routes>
        <Route path={`${rootPath}/`} element={<Home />} />
        <Route path={`${rootPath}/BfPage`} element={<BfPage />} />
        <Route path={`${rootPath}/OaPage`} element={<OaPage />} />
        <Route path={`${rootPath}/Examples`} element={<Examples />} />
        <Route path={`${rootPath}/About`} element={<About />} />
        <Route path={`${rootPath}/signin`} element={<SignInArea />} />
        <Route path={`${rootPath}/server`} element={<Server />} />
        <Route path={`${rootPath}/trivia`} element={<TriviaApiResponsePage />} />
        <Route path={`${rootPath}/dynamo`} element={<DynamoAuthPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HandleRefresh>
  </BrowserRouter>
);
