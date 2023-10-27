const ServiceIntro = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="text-[#1E293B] font-bold text-4xl">Welcome Voilio</div>
      <div className="text-[#475569] mb-[40px]">
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
    </div>
  );
};

export default ServiceIntro;
