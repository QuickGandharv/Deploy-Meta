import { MdKeyboardArrowDown } from "react-icons/md";

const SelectField = ({ label, className, icon }) => {
  return (
    <div>
      <div className="relative">
        <label className="text-black-default mb-1.5">{label}</label>
        <select
          className={`border rounded-md px-4 py-3 text-base font-normal text-black-300 ${className}`}
        >
          <option value="">Select Category</option>
          <option value="Science">Science</option>
          <option value="Arts">Arts</option>
          <option value="Business">Business</option>
        </select>
        <MdKeyboardArrowDown className="absolute text-black-default right-4 top-11 size-6" />
      </div>
    </div>
  );
};

export default SelectField;
