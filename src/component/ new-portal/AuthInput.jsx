const AuthInput = ({ formValue, placeholder, icon }) => {
  return (
    <div className="text-[#1E293B] flex flex-col gap-[8px]">
      <div className="text-sm font-semibold">{formValue}</div>
      <div className="flex flex-row border-[1px] border-[#E2E8F0] rounded-[4px] px-[12px] py-[16px] bg-white">
        <input className="w-full outline-none" placeholder={placeholder} />
        {icon && <img className="m-[0px]" src={icon} />}
      </div>
    </div>
  );
};

export default AuthInput;
