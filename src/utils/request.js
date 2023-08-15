export const getRequest = async (url) => {
    const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("GET Request Failed");
    return response.json();
};

export const postRequest = async (url, body) => {
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
    });
    if (!response.ok) throw new Error("POST Request Failed");
    return response.json();
};
