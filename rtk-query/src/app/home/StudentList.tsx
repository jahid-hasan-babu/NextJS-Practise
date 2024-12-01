/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  useDeleteStudentMutation,
  useGetStudentsQuery,
} from "@/redux/features/studentSlice";
import Link from "next/link";

export default function StudentList() {
  const { data: students, isLoading, isError } = useGetStudentsQuery();
  const [deleteStudent] = useDeleteStudentMutation();

  return (
    <div className="w-11/12 mx-auto pb-9">
      <div className="w-full overflow-x-auto mb-6">
        <div>
          <h1 className="text-4xl p-4 text-center font-bold">STUDENT LIST</h1>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Something went wrong</p>}
        </div>
        <table className="min-w-full divide-y divide-gray-200  mt-4 ">
          <thead>
            <tr className=" bg-green-500 text-white ">
              <th className="px-4 py-2 text-sm">FirstName</th>
              <th className="px-4 py-2 text-sm">LastName</th>
              <th className="px-4 py-2 text-sm">Gender</th>
              <th className="px-4 py-2 text-sm">DateOfBirth</th>
              <th className="px-4 py-2 text-sm">Nationality</th>
              <th className="px-4 py-2 text-sm">Address</th>
              <th className="px-4 py-2 text-sm">Email</th>
              <th className="px-4 py-2 text-sm">Phone</th>
              <th className="px-4 py-2 text-sm">AdmissionDate</th>
              <th className="px-4 py-2 text-sm">Courses</th>
              <th className="px-4 py-2 text-sm">Update</th>
              <th className="px-4 py-2 text-sm">Delete</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {students?.data?.map((student: any) => {
              return (
                <tr key={student?._id} className="mt-2 bg-slate-500 text-white">
                  <td className="px-9 py-2 text-sm">{student?.firstName}</td>
                  <td className="px-4 py-2 text-sm">{student?.lastName}</td>
                  <td className="px-4 py-2 text-sm">{student?.gender}</td>
                  <td className="px-4 py-2 text-sm">{student?.dateOfBirth}</td>
                  <td className="px-4 py-2 text-sm">{student?.nationality}</td>
                  <td className="px-4 py-2 text-sm">{student?.address}</td>
                  <td className="px-4 py-2 text-sm">{student?.email}</td>
                  <td className="px-4 py-2 text-sm">{student?.phone}</td>
                  <td className="px-4 py-2 text-sm">
                    {student?.admissionDate}
                  </td>
                  <td className="px-4 py-2 text-sm">{student?.courses}</td>
                  <td>
                    <Link
                      className="btn btn-success"
                      href={`/register/?id=${student?._id}`}
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteStudent(student?._id);
                      }}
                      className="btn btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
