export const Api = {
    
    // ENTITY -- USER--
    baseUrl: "http://localhost:3000/user",

    readAllUrl: () => fetch(Api.baseUrl),
    readById: (id)=> fetch(Api.baseUrl+"/"+id),
    
    //POST
    postUser: (body)=>fetch(Api.baseUrl, {
        method: 'POST',
        headers: new Headers({
            "content-type": "application/json"
        }),
        body: JSON.stringify(body)
    })
}