const VideoDetailPage = () => {
  return (
    <div className="flex flex-row gap-[30px] pl-[230px] pt-[110px] pr-[25px]">
      <div className="bg-white w-[69%] rounded-[10px] w-auto px-[60px] py-[20px] z-10">
        <div className="flex flex-row w-full mb-[17px] items-center">
          <div className="flex-grow text-4xl">Title</div>
          <div className="flex flex-row justify-end gap-[10px]">
            <div className="text-[#8F8F8F] mt-[2px]">2023.10.7</div>
            <div className="rounded-[50px] bg-[#85AED3] px-[10px] py-[3px] min-w-[70px] flex justify-center font-semibold text-white">
              카테고리
            </div>
          </div>
        </div>
        <div className="border-[5px] h-[450px]">이미지</div>
        <div className="flex flex-row my-[20px]">
          <div className="flex flex-row items-center flex-grow gap-[15px]">
            <div className="rounded-full w-[50px] h-[50px] border-[1px] border-black" />
            <div className="text-xl">creator</div>
          </div>
          <div className="flex flex-row gap-[10px]">
            <div className="flex flex-row items-center gap-[5px]">
              <img className="mt-[18px]" src="/asset/Icon_eye.svg" />
              <div className="text-[#8F8F8F]">3.4k</div>
            </div>
            <div className="flex flex-row items-center gap-[5px]">
              <img className="mt-[19px]" src="/asset/Icon_heart.svg" />
              <div className="text-[#8F8F8F]">1234</div>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-[#444444] mb-[20px]" />
        <div>
          무슨 이유일까요? 지난해부터 이어진 고금리, 고물가 부담에 주거비와
          생활비를 줄이기 위해서라는데요. 같은 서울이어도, 대학가와 직장가의
          주거 비용 차이가 큰데요. 부동산 정보 플랫폼으로 신림동과 서초동,
          익선동의 원룸을 검색해봤습니다. 역과 거리에서는 차이가 조금 나지만
          준공 연도와 면적 등을 고려해서 비슷한 곳을 찾아봤는데요. 보증금은
          서초동과 익선동이 신림동보다 크게 높았고요. 월세 역시 직장가가
          대학가보다 10만 원 넘게 비쌌습니다. 상황이 이렇다 보니, 지난해부터
          직장인들이 대학가 원룸으로 모여들었는데요. 올해 개강 시즌에는 원룸
          매물이 더 귀해져 대학생들이 집을 구하지 못하는 사례도 있을 정도입니다.
        </div>
      </div>
      <div className="bg-white w-[31%] rounded-[10px] w-auto px-[60px] py-[20px] z-10">
        hello
      </div>
    </div>
  );
};

export default VideoDetailPage;
