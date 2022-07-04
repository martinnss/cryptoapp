
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders={
    'X-RapidAPI-Key': 'cba7b95ac7msh4659ff3eb1a7eaap16f678jsncad238fb633e',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl= 'coinranking1.p.rapidapi.com'
const createRequest=(url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl:baseUrl}),
    endpoints: (builder) => ({
        getCryptos:builder.query({
            query:() => createRequest('/coins')         /* lo que vamos a fetch*/
        })
    })
})

export const {
    useGetCryptosQuery,
}  = cryptoApi;