import { BsThreeDots } from "react-icons/bs";
import Button from "../../../../../components/ui/Button";
import Building from "../../../../../database/buildings.json";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../../../tailwind.config";
import { useState } from "react";
import AddBuildingPopup from "./popup/addBuildingPopup";

const BuildingsManagementPage = () => {
  const buildings = Building.buildings;

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
          <h2 className="text-black-default">Buildings</h2>
          <Button
            text="Add Building"
            type="button"
            onclick={() => setAddRoom(true)}
          />
        </div>
        {addRoom && (
          <div
            className="text-white-default fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity duration-300 bg-black-default/50 w-full h-full"
            id="popup"
          >
            <AddBuildingPopup closeButton={setAddRoom} />
          </div>
        )}
        <div className="table w-full relative">
          <table className="w-full">
            <thead className="bg-white-300">
              <tr>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  ID
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Building Name
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  No of Floors
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  No of Rooms
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Electricity Reading
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Staff Members
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Security Guards
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Food Vendors
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  cost
                </th>
                <th className="text-black-default text-base font-medium px-5 py-3 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {buildings.map((building, index) => (
                <tr key={index} className="border-b">
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {building.buildingId}
                  </td>
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {building.buildingName}
                  </td>
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {building.floorNumber}
                  </td>
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {building.roomName}
                  </td>
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {building.electricityMeterReading}
                  </td>
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {building.staffMembers}
                  </td>
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {building.securityGuards}
                  </td>
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {building.foodVendors}
                  </td>
                  <td className="text-black-default text-left text-base font-medium px-5 py-3">
                    {building.cost}
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

export default BuildingsManagementPage;
