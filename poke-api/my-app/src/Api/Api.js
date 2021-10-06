export const Api = {
    
    // ENTITY -- USER--
    baseUrl: "http://localhost:3000",

    readAllUrl: () => fetch(Api.baseUrl + "/user"),
    readById: (id)=> fetch(Api.baseurl+"/user/"+id),
    
    //POST
    // postUrl: (id,body)=>fetch(Api.baseUrl+"/user")
}