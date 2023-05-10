import fetch from "node-fetch";

export const basicGitHubLogger = async () => {
  const response = await fetch("https://github.com/");
  let body = "";
  // const body = await response.text();
  response.then((body = response.text()));
  console.log(body);
};
