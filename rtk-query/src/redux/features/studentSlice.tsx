import { Students } from "@/app/dataType/StudentsDataType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mern-crud-app-peach.vercel.app/api/v1",
  }),
  tagTypes: ["Students"],
  endpoints: (builder) => ({
    getStudents: builder.query<{ data: Students[] }, void>({
      query: () => "/read-studentsList",
      providesTags: ["Students"],
    }),
    getSingleStudents: builder.query<{ data: Students[] }, void>({
      query: (id) => `/read-oneStudent/${id}`,
      providesTags: ["Students"],
    }),
    updateStudent: builder.mutation<void, Students>({
      query: (student) => ({
        url: `/update-studentList${student._id}`,
        method: "PUT",
        body: student,
      }),
      invalidatesTags: ["Students"],
    }),
    createStudent: builder.mutation<void, Students>({
      query: (formData) => ({
        url: "/create-studentList",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Students"],
    }),
    deleteStudent: builder.mutation<void, string>({
      query: (id) => ({
        url: `/delete-student/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Students"],
    }),
  }),
});

// { data: Students }

export const {
  useGetStudentsQuery,
  useGetSingleStudentsQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentApi;
