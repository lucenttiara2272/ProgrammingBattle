import {makeRequest, createGroup} from "./helpers/request.mjs";

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

let token = "";

// setup th team
if (token === "") {
    let response = await createGroup(`${regTeamURL}`, "POST", userConfig);
    // result
    console.log(response);
    token = response.token;
    console.log("Token:", token);
}


// start a match
// console.log(`Starting match...`);
// response = await makeRequest(`${matchURL}`, "POST", token);
// console.log(response);