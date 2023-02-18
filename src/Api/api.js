async function makeApiCall(endpoint, options) {
    debugger;
    const response = await fetch(endpoint, options);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

export default makeApiCall;