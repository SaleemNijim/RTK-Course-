import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// https://dummyjson.com/products
// https://dummyjson.com/products/3
export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products/add",
        method: "POST",
        body: newProduct,
      }),
    }),
    updateProduct:builder.mutation({
        query:({id , updatedProduct}) =>({
            url:`/products/${id}`,
            method:"PUT",
            body:updatedProduct

        })
    }),
    deleteProduct:builder.mutation({
        query:(id)=>({
            url:`/products/${id}`,
            method:"DELETE"
        })
    })
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productApi;
