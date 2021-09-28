export const Api = {
    baseUrl: "https://pokeapi.co/api/v2",

    readAllUrl: () => fetch(Api.baseUrl + "/pokemon"),
    readById: (id)=> fetch(Api.baseurl+"/pokemon"+id),
}