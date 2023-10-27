import { useState } from "react";
import { format } from "date-fns";

const comments = [
  {
    id: 1,
    author: "test user",
    createdAt: "2023-10-26",
    text: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세",
    subComments: [
      {
        id: 1,
        author: "test user2",
        createdAt: "2023-10-26",
        text: "heyyyyyy",
      },
      {
        id: 2,
        author: "test user3",
        createdAt: "2023-10-26",
        text: "hola",
      },
    ],
  },
  {
    id: 2,
    author: "test user2",
    createdAt: "2023-10-26",
    text: "hello",
  },
  {
    id: 3,
    author: "test user3",
    createdAt: "2023-10-27",
    text: "진작 할걸.. 진작 할걸.. 진작 할걸.. 진작 할걸.. 진작 할걸.. 진작 할걸.. 진작 할걸.. 진작 할걸.. 진작 할걸.. ",
  },
];

const CommentBox = ({ activeId, setActiveId, comment }) => {
  const isActive = activeId === comment.id;

  return (
    <div
      className={`flex flex-col gap-[15px] px-[20px] py-[12px]
      ${isActive ? "bg-[#F3F3F3]" : ""}`}
    >
      <div className="flex flex-row items-center">
        <img className="m-0 w-[35px] h-[35px]" src="/asset/Icon_user.svg" />
        <div className="ml-[8px]">{comment.author}</div>
        <div className="flex justify-end flex-grow mr-[5px] text-[#8F8F8F]">
          {format(new Date(comment.createdAt), "yyyy.M.d")}
        </div>
      </div>
      <div className={isActive ? "" : "line-clamp-4"}>{comment.text}</div>
      <div className="flex flex-row gap-[20px]">
        <img className="m-0" src="/asset/Icon_heart.svg" />
        <img
          className="m-0"
          src="/asset/Icon_comment.svg"
          onClick={() => {
            setActiveId(comment.id);
          }}
        />
      </div>
      {comment.subComments && comment.subComments.length > 0 && (
        <div className="pl-[29px]">
          {comment.subComments.map((subComment) => (
            <SubCommentBox
              key={subComment.id}
              subcomment={subComment}
              isActive={isActive}
            />
          ))}
        </div>
      )}
    </div>
  );
};
const SubCommentBox = ({ subcomment, isActive }) => {
  if (isActive)
    return (
      <div className="flex flex-col gap-[15px] py-[12px]">
        <div className="flex flex-row items-center">
          <img className="m-0 w-[35px] h-[35px]" src="/asset/Icon_user.svg" />
          <div className="ml-[8px]">{subcomment.author}</div>
          <div className="flex justify-end flex-grow mr-[5px] text-[#8F8F8F]">
            {format(new Date(subcomment.createdAt), "yyyy.M.d")}
          </div>
        </div>
        <div className="line-clamp-4">{subcomment.text}</div>
        <img className="w-[17px] h-[17px] m-0" src="/asset/Icon_heart.svg" />
      </div>
    );
};

const Comment = ({ comments }) => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="bg-white w-full h-[87%] rounded-[10px] flex flex-col px-[23px] pt-[20px] pb-[28px] z-10">
      <span className="text-xl">댓글</span>
      <div className="mt-[15px] bg-black h-[1px]" />
      <div className="overflow-y-auto">
        {comments.map((comment) => {
          return (
            <div>
              <CommentBox
                key={comment.id}
                activeId={activeId}
                setActiveId={setActiveId}
                comment={comment}
              />
            </div>
          );
        })}
      </div>
      <div className="flex items-end flex-grow px-[13px]">
        <div className="flex w-full flex-row items-center gap-[7px]">
          <div className="pt-[3px]">user4</div>
          <input
            className="py-[10px] outline-none flex-grow border-b-[1px] border-black"
            placeholder="댓글을 입력하세요."
          />
          <img className="m-0 pt-[5px]" src="/asset/Icon_upload2.svg" />
        </div>
      </div>
    </div>
  );
};

const Detail = () => {
  return (
    <div className="pl-[230px] pt-[110px] pr-[25px] gap-[20px] grid grid-cols-7">
      <div className="flex flex-row h-[100vh] col-span-5 z-10">
        <div className="bg-white h-[87%] rounded-[10px] overflow-y-auto px-[60px] py-[20px]">
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
            매물이 더 귀해져 대학생들이 집을 구하지 못하는 사례도 있을
            정도입니다. 무슨 이유일까요? 지난해부터 이어진 고금리, 고물가 부담에
            주거비와 생활비를 줄이기 위해서라는데요. 같은 서울이어도, 대학가와
            직장가의 주거 비용 차이가 큰데요. 부동산 정보 플랫폼으로 신림동과
            서초동, 익선동의 원룸을 검색해봤습니다. 역과 거리에서는 차이가 조금
            나지만 준공 연도와 면적 등을 고려해서 비슷한 곳을
            찾아봤는데요. 보증금은 서초동과 익선동이 신림동보다 크게
            높았고요. 월세 역시 직장가가 대학가보다 10만 원 넘게
            비쌌습니다. 상황이 이렇다 보니, 지난해부터 직장인들이 대학가
            원룸으로 모여들었는데요. 올해 개강 시즌에는 원룸 매물이 더 귀해져
            대학생들이 집을 구하지 못하는 사례도 있을 정도입니다.
          </div>
        </div>
      </div>
      <div className="right-0 z-10 col-span-2">
        <Comment comments={comments} />
      </div>
    </div>
  );
};

export default Detail;
