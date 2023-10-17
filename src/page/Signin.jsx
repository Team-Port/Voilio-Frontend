const Signin = () => {
  return (
    <div className="relative flex bg-[#F8FAFC] flex-row">
      <img
        className="absolute flex-shrink top-[-30px] left-[-3px] w-[18%]"
        src="/asset/new-logo.svg"
      />
      <div className="h-[100vh] px-[12%] w-1/2 items-center justify-center flex">
        <div className="flex flex-col w-full">
          <div className="text-[#1E293B] font-bold text-4xl mb-[16px]">
            Welcome Voilio
          </div>
          <div className="text-[#475569] mb-[30px]">
            <li>
              Voilio는{" "}
              <span className="text-[#FF6A8C]">
                영상 기반 포트폴리오 공유 웹사이트
              </span>
              예요.
            </li>
            <li>로그인을 하면 다양한 영상을 공유해서 나를 알릴 수 있어요.</li>
            <li>다양한 분야의 사람들, 채용 담당자들과 DM을 해보세요.</li>
          </div>
          <div className="flex flex-col gap-[16px] mb-[32px]">
            <div className="text-[#1E293B] flex flex-col gap-[8px]">
              <div className="text-sm font-semibold">E-mail</div>
              <div className="border-[1px] border-[#E2E8F0] rounded-[4px] px-[12px] py-[16px] bg-white">
                <input
                  className="w-full outline-none"
                  placeholder="아이디로 사용할 이메일을 입력해 주세요."
                />
              </div>
            </div>
            <div className="text-[#1E293B] flex flex-col gap-[8px]">
              <div className="text-sm font-semibold">Password</div>
              <div className="flex flex-row border-[1px] border-[#E2E8F0] rounded-[4px] px-[12px] py-[16px] bg-white">
                <input
                  className="w-full outline-none"
                  placeholder="비밀번호를 입력해 주세요."
                />
                <img className="m-[0px]" src="/asset/Icon_eyeOff.svg" />
              </div>
            </div>
            <div className="text-[#1E293B] flex flex-col gap-[8px]">
              <div className="text-sm font-semibold">Password Check</div>
              <div className="flex flex-row border-[1px] border-[#E2E8F0] rounded-[4px] px-[12px] py-[16px] bg-white">
                <input
                  className="w-full outline-none"
                  placeholder="비밀번호를 한 번 더 입력해 주세요."
                />
                <img className="m-[0px]" src="/asset/Icon_eyeOff.svg" />
              </div>
            </div>
            <div className="text-[#1E293B] flex flex-col gap-[8px]">
              <div className="text-sm font-semibold">Nickname</div>
              <div className="flex flex-row border-[1px] border-[#E2E8F0] rounded-[4px] px-[12px] py-[16px] bg-white">
                <input
                  className="w-full outline-none"
                  placeholder="채널 이름으로 사용할 닉네임을 입력해 주세요."
                />
                <img className="m-[0px]" src="/asset/Icon_random.svg" />
              </div>
            </div>
          </div>
          <div className="flex justify-center px-[24px] py-[16px] mb-[29px] bg-[#FACAD5] rounded-[4px] text-white font-bold">
            Join
          </div>
        </div>
      </div>
      <img
        className="m-[0px] h-[100vh] w-1/2 object-cover"
        src="/asset/login-bg.svg"
      />
    </div>
  );
};

export default Signin;
