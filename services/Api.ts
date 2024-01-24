import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { todo } from "../types/types";

export const Api = createApi({
    reducerPath: "Api",
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:3000'
    }),
    endpoints: ({mutation,query})=>{
        return{
            getTodos:query<todo[],void>({
                query:()=>"/api/todos"
            })
        }
    }
})

export const { useGetTodosQuery } = Api