/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Students } from "../dataType/StudentsDataType";
import {
  useCreateStudentMutation,
  useGetSingleStudentsQuery,
  useUpdateStudentMutation,
} from "@/redux/features/studentSlice";
import { useRouter, useSearchParams } from "next/navigation";

export default function Register() {
  const [formData, setFormData] = useState<Students>(Object);
  const [editMode, setEditMode] = useState<boolean>(false); //for editing
  const [createStudent] = useCreateStudentMutation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const id: string | null = searchParams.get("id");

  const { data } = useGetSingleStudentsQuery(id!);
  const [updateStudent] = useUpdateStudentMutation();

  // const handleChange = (e: any) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value || "",
  //   } as Students);
  // };

  useEffect(() => {
    if (id && data) {
      setEditMode(true);
      setFormData({ ...data.data[0] });
    } else {
      setEditMode(false);
    }
  }, [id, data]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value || "",
    } as Students);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (editMode) {
      await updateStudent(formData);
    }
    if (formData) {
      await createStudent(formData);
      router.push("/");
    } else {
      console.error("formData is undefined");
    }
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-green-600">
        Registration & Update Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-600"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-600"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="nationality"
              className="block text-sm font-medium text-gray-600"
            >
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={formData.nationality || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <textarea
             
              id="address"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="admissionDate"
              className="block text-sm font-medium text-gray-600"
            >
              Admission Date
            </label>
            <input
              type="date"
              id="admissionDate"
              name="admissionDate"
              value={formData.admissionDate || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="course"
              className="block text-sm font-medium text-gray-600"
            >
              Course
            </label>
            <input
              type="text"
              id="courses"
              name="courses"
              value={formData.courses || ""}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </div>
        <div className="text-center">
          <button className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full	">
            Submit
          </button>
        </div>
      </form>
      <Toaster position="bottom-center" />
    </div>
  );
}
