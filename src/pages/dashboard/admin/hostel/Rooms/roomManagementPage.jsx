import { BsThreeDots } from "react-icons/bs";
import Button from "../../../../../components/ui/Button";
import Room from "../../../../../database/rooms.json";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../../../tailwind.config";
import { useState } from "react";
import AddRoomPopup from "./popup/addRoomPopup";

const RoomManagementPage = () => {
  const rooms = Room.rooms;

  const fullConfig = resolveConfig(tailwindConfig);

  const StatusColors = {
    occupied: fullConfig.theme.colors.danger.default,
    vacant: fullConfig.theme.colors.success.default,
    underMaintenance: fullConfig.theme.colors.warning.default,
  };

  const StatusLightColors = {
    occupied: fullConfig.theme.colors.danger["300"],
    vacant: fullConfig.theme.colors.success["300"],
    underMaintenance: fullConfig.theme.colors.warning["300"],
  };

  const [addRoom, setAddRoom] = useState(false);
  return (
    <>
      <div className="recent-applications bg-white-default border-2 border-white-default rounded-2xl pb-6 relative">
        <div className="flex justify-between items-center bg-white-default p-5 rounded-lg">
          <h2 className="text-black-default">Rooms</h2>
          <Button
            text="Add Room"
            type="button"
            onclick={() => setAddRoom(true)}
          />
        </div>
        {addRoom && (
          <div
            className="text-white-default fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity duration-300 h-full w-full bg-black-default/50"
            id="popup"
          >
            <AddRoomPopup closeButton={setAddRoom} />
          </div>
        )}
        {/* {addRoom && (
          <div className="fixed inset-0 bg-black-default opacity-50 flex items-start justify-end z-50">
            <AddRoomPopup onClose={() => setAddRoom(false)} />
          </div>
        )} */}
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
                    <BsThreeDots size={24} className="text-gray-500" />
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
