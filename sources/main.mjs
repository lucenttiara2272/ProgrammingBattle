import makeRequest from "./helpers/request.mjs";

import { error } from "node:console";


//#region API URLS
const baseURL = 'https://batlearena.onrender.com';
const regTeamURL = `${baseURL}/teams`;
const matchURL = `${baseURL}/match`;

const team = process.env.TEAM;
const password = process.env.PW;
const names = process.env.NAMES;
//#endregion

//START
const userConfig = {
    "name": team,
    "members": names,
    "password": password,
}

let token = process.env.TOKEN;

// setup th team
if (!token) {
    let response = await makeRequest(`${regTeamURL}`, "POST", "", userConfig);
    // result
    console.log(response);
    token = response.token;
}


// start a match
response = await makeRequest(`${matchURL}`, "POST", token);
console.log(response);