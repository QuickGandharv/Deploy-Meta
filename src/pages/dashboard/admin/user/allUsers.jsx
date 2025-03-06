// const AllUsers = () => {
//   return (
//     <div>
//       <h1 className="text-black-default text-xl font-semibold">All Users</h1>
//     </div>
//   );
// };

// export default AllUsers;
import { BsThreeDots } from "react-icons/bs";

const AllUsers = () => {
  return (
    <>
      <div className="recent-applications bg-white-default border-2 border-white-default rounded-2xl pb-6">
        <div className="flex justify-between items-center bg-white-default p-5 rounded-lg">
          <h2 className="text-black-default">All Users</h2>
        </div>
        <div className="table w-full">
          <table className="w-full">
            <thead className="bg-white-300">
              <tr>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Id
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Image
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Class Name
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Course Name
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Class Incharge
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Class Teacher
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  No. of Sections
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Sections
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="text-black-default text-left text-base font-medium px-5 py-3">
                  001
                </td>
                <td className="text-black-default text-left text-base font-medium px-5 py-3">
                  <div>
                    <img
                      src="https://www.radiustheme.com/demo/html/psdboss/akkhor/akkhor/img/figure/student2.png"
                      className="h-10 w-10 object-cover position-center rounded-full"
                      alt="Photo"
                    />
                  </div>
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  Class 1
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  Course Demo
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  Incharge 1
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  Teacher 2
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  4
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  A, B
                </td>
                <td className="text-base text-left font-normal text-black-default px-5 py-3">
                  <BsThreeDots className="text-black-200 text-2xl" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="text-black-default text-left text-base font-medium px-5 py-3">
                  002
                </td>
                <td className="text-black-default text-left text-base font-medium px-5 py-3">
                  <div>
                    <img
                      src="https://www.radiustheme.com/demo/html/psdboss/akkhor/akkhor/img/figure/student3.png"
                      className="h-10 w-10 object-cover position-center rounded-full"
                      alt="Photo"
                    />
                  </div>
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  Class 2
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  Course Demo
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  Incharge 3
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  Teacher 1
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  3
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  A, B, C
                </td>
                <td className="text-base text-left font-normal text-black-default px-5 py-3">
                  <BsThreeDots className="text-black-200 text-2xl" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
