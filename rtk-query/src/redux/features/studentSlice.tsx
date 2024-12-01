import { Students } from "@/app/dataType/StudentsDataType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mern-crud-app-peach.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    getStudents: builder.query<Students[], void>({
      query: () => "/read-studentsList",
    }),
  }),
});

export const { useGetStudentsQuery } = studentApi;
