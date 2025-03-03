import { useForm } from "react-hook-form";
import SelectField from "../../../../../components/forms/selectField";

const TransportInformationForm = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const Route = [
    { value: "amritsar", label: "Amritsar" },
    { value: "ludhiana", label: "Ludhiana" },
    { value: "jalandhar", label: "Jalandhar" },
  ];

  const vehicleNumber = [
    { value: "pb-10-0001", label: "PB-10-0001" },
    { value: "pb-10-0002", label: "PB-10-0002" },
    { value: "pb-10-0003", label: "PB-10-0003" },
  ];

  const checkPoint = [
    { value: "jalandhar bypass", label: "Jalandhar Bypass" },
    { value: "samrala chownk", label: "Samrala Chownk" },
    { value: "clock tower", label: "Clock Tower" },
  ];

  return (
    <div>
      <h2 className="text-black-default">Transport Information</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-2.5">
        <div className="grid grid-cols-3 gap-7">
          <SelectField
            label="Route"
            name="route"
            options={Route}
            control={control}
          />
          <SelectField
            label="Vehicle Number"
            name="vehicle number"
            options={vehicleNumber}
            control={control}
          />
          <SelectField
            label="Check Point"
            name="check point"
            options={checkPoint}
            control={control}
          />
        </div>
      </form>
    </div>
  );
};

export default TransportInformationForm;
