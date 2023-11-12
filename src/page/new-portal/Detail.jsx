import { useState } from "react";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

import { HOST_URL } from "../../lib/HostUrl";
import { useQuery } from "react-query";

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
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [category1, setCategory1] = useState("");
  // const [category2, setCategory2] = useState("");
  // const [date, setDate] = useState(null);
  // const [videoUrl, setVideoUrl] = useState("");

  // const [isLoading, setIsLoading] = useState(false);

  // const token = sessionStorage.getItem("jwtAuthToken");
  const { boardId } = useParams();

  // useEffect(() => {
  //   setIsLoading(true);

  //   if (!token || !boardId) return;

  //   const getBoardData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${HOST_URL}/api/v1/boards/${boardId}`,
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       );

  //       setTitle(response.data.data.title);
  //       setContent(response.data.data.content);
  //       setCategory1(response.data.data.category1);
  //       setCategory2(response.data.data.category2);
  //       setDate(response.data.data.createAt);
  //       setVideoUrl(response.data.data.videoUrl);

  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   getBoardData();
  // }, [token, boardId]);

  const { data, isLoading } = useQuery({
    queryKey: [{ boardId }],
    queryFn: () =>
      fetch(`${HOST_URL}/api/v1/boards/${boardId}`)
        .then((res) => res.json())
        .then((data) => data.data),
    onError: (error) => {
      return `An error has occurred: ${error.message}`;
    },
  });

  if (isLoading) return <div></div>;

  return (
    <div className="pl-[230px] pt-[110px] pr-[25px] gap-[20px] grid grid-cols-7">
      <div className="flex flex-row h-[100vh] col-span-5 z-10">
        <div className="bg-white w-full h-[87%] rounded-[10px] overflow-y-auto px-[60px] py-[20px]">
          <div className="flex flex-row w-full mb-[17px] items-center">
            <div className="flex-grow text-4xl">{data.title}</div>
            <div className="flex flex-row justify-end gap-[10px]">
              <div className="text-[#8F8F8F] mt-[2px]">
                {format(new Date(data.createAt), "yyyy.M.d")}
              </div>
              <div className="rounded-[50px] bg-[#85AED3] px-[10px] py-[3px] min-w-[70px] flex justify-center font-semibold text-white">
                {data.category1}
              </div>
              <div className="rounded-[50px] bg-[#EAB191] px-[10px] py-[3px] min-w-[70px] flex justify-center font-semibold text-white">
                {data.category2}
              </div>
            </div>
          </div>
          <div className="h-[450px]">
            {data.videoUrl ? (
              <iframe
                className="w-full h-full"
                type="text/html"
                title="video player"
                src={data.videoUrl}
              />
            ) : (
              <div>no video</div>
            )}
          </div>
          <div className="flex flex-row my-[20px]">
            <div className="flex flex-row items-center flex-grow gap-[15px]">
              <img
                className="rounded-full w-[50px] h-[50px]"
                src={data.userSimpleDto.imageUrl}
              />
              <div className="text-xl">{data.userSimpleDto.nickname}</div>
            </div>
            <div className="flex flex-row gap-[10px]">
              <div className="flex flex-row items-center gap-[5px]">
                <img className="mt-[3px]" src="/asset/Icon_eye.svg" />
                <div className="text-[#8F8F8F]">{data.view}</div>
              </div>
              <div className="flex flex-row items-center gap-[5px]">
                <img className="mt-[3px]" src="/asset/Icon_heart.svg" />
                <div className="text-[#8F8F8F]">{data.likeCount}</div>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-[#444444] mb-[20px]" />
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
      <div className="right-0 z-10 col-span-2">
        <Comment comments={comments} />
      </div>
    </div>
  );
};

export default Detail;
