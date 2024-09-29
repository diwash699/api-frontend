import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
  tagTypes: ["Products"],
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "products",
      }),
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "products", // Adjust to your endpoint for adding a product
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags:['Products']
    }),
    deleteProduct: builder.mutation({
        query: (productid) => ({
          url: `products/${productid}`, // Adjust to your endpoint for deleting a product
          method: "DELETE",
        }),
        invalidatesTags: ["Products"],
  }),
  updateProduct: builder.mutation({
    query: (updatedProduct) => ({
        url: `products/${updatedProduct.productid}`,
        method: 'PATCH',
        body: updatedProduct,
    }),
    invalidatesTags: ['Products'],
}),
})
});

export const { useGetAllProductsQuery, useAddProductMutation, useDeleteProductMutation, useUpdateProductMutation } = productApi;
export default productApi;
