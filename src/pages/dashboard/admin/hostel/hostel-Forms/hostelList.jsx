import { BsThreeDots } from "react-icons/bs";

const HostelList = () => {
  return (
    <>
      <div className="recent-applications bg-white-default border-2 border-white-default rounded-2xl pb-6">
        <div className="flex justify-between items-center bg-white-default p-5 rounded-lg">
          <h2 className="text-black-default">Hostel List</h2>
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
                  Hostel Name
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Hostel Type
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Address
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="text-black-default text-left text-base font-medium px-5 py-3">
                  001
                </td>
                <td className="text-black-default text-left text-base font-medium px-5 py-3">
                  Phoenix Residence
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  Boys
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  25 Crowfield Road, Phoenix
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  Rising to nurture young minds
                </td>
              </tr>

              <tr className="border-b">
                <td className="text-black-default text-left text-base font-medium px-5 py-3">
                  002
                </td>
                <td className="text-black-default text-left text-base font-medium px-5 py-3">
                  Tranquil Haven
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  Girls
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  81 Hartland Avenue, Milwaukee
                </td>
                <td className="text-black-default text-base font-normal px-5 py-3">
                  Rising to nurture young minds
                </td>
              </tr>
              {/* <tr className="border-b">
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
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HostelList;
