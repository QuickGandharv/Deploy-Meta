import { CiSearch } from "react-icons/ci";
const Searchbar = ({
  placeholder,
  value,
  onChange,
  text,
  id,
  className,
  lableclass,
  icon = true,
}) => {
  return (
    <div className={`flex flex-col`}>
      <label
        htmlFor={id}
        className={`text-black-default text-xs mb-2 flex-1 ${lableclass}`}
      >
        {text}
      </label>
      <div
        className={`bg-white-300 flex items-center p-3 rounded-full ${
          className ? className : ""
        }`}
      >
        {icon && (
          <label
            htmlFor={id}
            className="text-black-default mr-2 text-2xl flex-1"
          >
            <CiSearch />
          </label>
        )}

        <input
          className="text-black-300 text-base bg-transparent w-full"
          id={id}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
export default Searchbar;
