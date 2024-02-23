import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.URI

export const dataApi = createApi({
    reducerPath: 'productsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getProducts: builder.query({
            query: ()=> 'api/products'
        }),
        getProductById: builder.query({
            query: (id)=> `/api/products/${id}`
        })
    })
})

export const {useGetProductsQuery,useGetProductByIdQuery} = dataApi