export default class FetchService {
    constructor() {

    }

    async performGetHttpRequest(fetchLink, headers, query=null) {
        if(!fetchLink || !headers) {
            throw new Error("One or more GET request parameters was not passed.");
        }
        try {
            const rawResponse = await fetch(fetchLink, {
                method: "GET",
                headers: headers,
                query: (query != null) ? query : ""
            });
            const content = await rawResponse.json();
            return content;
        }
        catch(err) {
            console.error(`Error at fetch GET: ${err}`);
            throw err;
        }
    }

    async performPostHttpRequest(fetchLink, headers, body) {
        if(!fetchLink || !headers || !body) {
            throw new Error("One or more POST request parameters was not passed.");
        }
        try {
            const rawResponse = await fetch(fetchLink, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            });
            const content = await rawResponse.json();
            return content;
        }
        catch(err) {
            console.error(`Error at fetch POST: ${err}`);
            throw err;
        }
    }

    async performPutHttpRequest(fetchLink, headers, body) {
        if(!fetchLink || !headers || !body) {
            throw new Error("One or more POST request parameters was not passed.");
        }
        try {
            const rawResponse = await fetch(fetchLink, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(body)
            });
            const content = await rawResponse.json();
            return content;
        }
        catch(err) {
            console.error(`Error at fetch PUT: ${err}`);
            throw err;
        }
    }
}

/*-- Objects --*/
const fetchService = new FetchService();
/*-- /Objects --*/

/*--Functions--*/
async function submitForm(e, form) {
    // 1. Prevent reloading page
    e.preventDefault();
    // 2. Submit the form
    // 2.1 User Interaction
    const btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.disabled = true;
    setTimeout(() => btnSubmit.disabled = false, 2000);
    // 2.2 Build JSON body
    const jsonFormData = buildJsonFormData(form);
    // 2.3 Build Headers
    const headers = buildHeaders();
    // 2.4 Request & Response
    const response = await fetchService.performPostHttpRequest(`https://jsonplaceholder.typicode.com/posts`, headers, jsonFormData); // Uses JSON Placeholder
    console.log(response);
    // 2.5 Inform user of result
    if(response)
        window.location = `/success.html?FirstName=${response.FirstName}&LastName=${response.LastName}&Email=${response.Email}&id=${response.id}`;
    else
        alert(`An error occured.`);
}

function buildHeaders(authorization = null) {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": (authorization) ? authorization : "Bearer TOKEN_MISSING"
    };
    return headers;
}

function buildJsonFormData(form) {
    const jsonFormData = { };
    for(const pair of new FormData(form)) {
        jsonFormData[pair[0]] = pair[1];
    }
    return jsonFormData;
}
/*--/Functions--*/

/*--Event Listeners--*/
const sampleForm = document.querySelector("#sampleForm");
if(sampleForm) {
    sampleForm.addEventListener("submit", function(e) {
        submitForm(e, this);
    });
}
/*--/Event Listeners--*/