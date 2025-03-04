import { BsThreeDots } from "react-icons/bs";
import Button from "../../../../../components/ui/Button";
import Room from "../../../../../database/rooms.json";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../../../tailwind.config";

const RoomManagementPage = () => {
  const rooms = Room.rooms;

  const fullConfig = resolveConfig(tailwindConfig);

  const StatusColors = {
    occupied: fullConfig.theme.colors.warning.default,
    vacant: fullConfig.theme.colors.info.default,
    underMaintenance: fullConfig.theme.colors.success.default,
    // manager: fullConfig.theme.colors.danger.default,
  };

  const StatusLightColors = {
    occupied: fullConfig.theme.colors.warning["300"],
    vacant: fullConfig.theme.colors.info["100"],
    underMaintenance: fullConfig.theme.colors.success["300"],
    // manager: fullConfig.theme.colors.danger["300"],
  };
  return (
    <>
      <div className="recent-applications bg-white-default border-2 border-white-default rounded-2xl pb-6">
        <div className="flex justify-between items-center bg-white-default p-5 rounded-lg">
          <h2 className="text-black-default">Rooms</h2>
          <Button text="Add Room" type="button" />
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
                  Block
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Room Type
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  No of Bed
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Cost
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Status
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => (
                <tr key={index} className="border-b">
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {room.id}
                  </td>
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {room.roomNo}
                  </td>
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {room.block}
                  </td>
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {room.roomType}
                  </td>
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {room.noOfBed}
                  </td>
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {room.cost}
                  </td>
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    <div
                      className="rounded-full w-fit"
                      style={{
                        backgroundColor: StatusLightColors[room.status],
                      }}
                    >
                      <p
                        className="capitalize text-sm font-medium px-3 py-1"
                        style={{ color: StatusColors[room.status] }}
                      >
                        {room.status}
                      </p>
                    </div>
                  </td>
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {room.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RoomManagementPage;

// import React from "react";
// import Room from "../../../../../database/rooms.json";

// const rooms = Room.rooms;

// const RoomManagementPage = () => {
//   return (
//     <tbody>
//       {rooms.map((room) => (
//         <tr key={room.id} className="border-b">
//           <td className="text-black-default text-left text-base font-medium px-5 py-3">
//             {room.roomNo}
//           </td>
//           <td className="text-black-default text-left text-base font-medium px-5 py-3">
//             {room.block}
//           </td>
//           <td className="text-black-default text-left text-base font-medium px-5 py-3">
//             {room.roomType}
//           </td>
//           <td className="text-black-default text-left text-base font-medium px-5 py-3">
//             {room.noOfBed}
//           </td>
//           <td className="text-black-default text-left text-base font-medium px-5 py-3">
//             {room.cost}
//           </td>
//           <td className="text-black-default text-left text-base font-medium px-5 py-3">
//             {room.status}
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   );
// };

// export default RoomManagementPage;
