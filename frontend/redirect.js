const rootPath = "/capstonealternate";
const path = window.location.pathname;
window.localStorage.setItem("redirect", path);
window.location.replace(rootPath);
