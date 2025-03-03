const InputField = ({ type, id, label, placeholder, className, ...rest }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className={`text-black-default mb-1.5 ${className}`}>
        {label}
      </label>
      <div>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`border rounded-md text-base font-normal leading-5 px-4 py-3 ${className}`}
          {...rest}
        />
      </div>
    </div>
  );
};

export default InputField;
