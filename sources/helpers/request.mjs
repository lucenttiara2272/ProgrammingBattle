// basic helper function to make a request to the server and return the response as json
async function makeRequest(url, method="POST", token="", payload=null) {
    let data = {};
    const headers = {
        method:method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": token,
        }
    }

    if(payload) {
        headers.body = JSON.stringify(payload);
    }

    try {
        const response = await fetch(url, headers);
        data = await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    return data;
};


async function createGroup(url, method="POST", payload=null) {
    let data = {};
    const headers = {
        method:method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    }

    if(payload) {
        headers.body = JSON.stringify(payload);
    }

    try {
        const response = await fetch(url, headers);
        data = await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    return data;
};

// export default makeRequest;
export {createGroup, makeRequest};