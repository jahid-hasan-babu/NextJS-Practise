import { useGetStudentsQuery } from "@/redux/features/studentSlice";

export default function StudentList() {
  const { data } = useGetStudentsQuery();
  return (
    <div>
      <h1>Student List</h1>
    </div>
  );
}
