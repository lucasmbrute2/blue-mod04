export const Api = {
    baseUrl: "http://localhost:3000",

    readAllUrl: () => fetch(Api.baseUrl + "/user"),
    readById: (id)=> fetch(Api.baseurl+"/user/"+id),
}