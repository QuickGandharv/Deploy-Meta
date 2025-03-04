import { BsThreeDots } from "react-icons/bs";

const HostelRooms = () => {
  return (
    <>
      <div className="recent-applications bg-white-default border-2 border-white-default rounded-2xl pb-6">
        <div className="flex justify-between items-center bg-white-default p-5 rounded-lg">
          <h2 className="text-black-default">Hostel Rooms</h2>
          {/* <OutlineButton
            text="View All"
            classname="text-primary-default border-primary-default px-6 py-2"
          /> */}
        </div>
        <div className="table w-full">
          <table className="w-full">
            <thead className="bg-white-300">
              <tr>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Id
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Room No
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Hostel Name
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Room Type
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  No of Bed
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Cost Per Bed
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="text-black-default text-left text-base font-medium px-5 py-3">
                  001
                </td>
                <td className="text-black-default text-left text-base font-medium px-5 py-3">
                  A1
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  Phoenix Residence
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  One Bed
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  1
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  $200
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
                  A2
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  Tranquil Haven
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  One Bed Ac
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  1
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  $300
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

export default HostelRooms;
