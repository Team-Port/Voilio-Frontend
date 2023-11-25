const AuthInput = ({
  formTitle,
  placeholder,
  icon,
  anotherIcon,
  value,
  setValue,
  event,
  setEvent,
}) => {
  return (
    <div className="text-[#1E293B] flex flex-col gap-[8px]">
      <div className="text-sm font-semibold">{formTitle}</div>
      <div className="flex items-center flex-row border-[1px] border-[#E2E8F0] rounded-[4px] px-[12px] py-[16px] bg-white">
        <input
          type={event ? "text" : "password"}
          className="w-full outline-none"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {icon && (
          <img
            className="m-[0px] w-[18px] h-[18px]"
            src={event ? anotherIcon : icon}
            onClick={() => setEvent(!event)}
          />
        )}
      </div>
    </div>
  );
};

export default AuthInput;
