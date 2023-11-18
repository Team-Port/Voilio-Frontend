import { useState } from "react";
import { format } from "date-fns";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { HOST_URL } from "../../lib/HostUrl";
import axios from "axios";

const CommentBox = ({ activeId, handleActive, comment }) => {
  const isActive = activeId === comment.id;

  return (
    <div
      className={`flex flex-col gap-[15px] px-[20px] py-[12px]
      ${isActive ? "bg-[#F3F3F3]" : ""}`}
    >
      <div className="flex flex-row items-center">
        <img
          className="m-0 rounded-full w-[35px] h-[35px]"
          src={comment.user.imageUrl}
        />
        <div className="ml-[8px]">{comment.user.nickname}</div>
        <div className="flex justify-end flex-grow mr-[5px] text-[#8F8F8F]">
          yyyy.M.d
        </div>
      </div>
      <div className={isActive ? "" : "line-clamp-4"}>{comment.content}</div>
      <div className="flex flex-row gap-[20px]">
        <img className="m-0" src="/asset/Icon_heart.svg" />
        <div className="flex flex-row gap-[8px] items-center">
          <img
            className="m-0"
            src="/asset/Icon_comment.svg"
            onClick={() => handleActive(comment.id)}
          />
          <div className="text-sm">{comment.childComments.length}</div>
        </div>
      </div>
      {comment && comment.childComments && (
        <div className="pl-[29px]">
          {comment.childComments.map((childComment) => (
            <ChildCommentBox
              key={childComment.id}
              childComment={childComment}
              isActive={isActive}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ChildCommentBox = ({ childComment, isActive }) => {
  if (isActive)
    return (
      <div className="flex flex-col gap-[15px] py-[12px]">
        <div className="flex flex-row items-center">
          <img
            className="m-0 rounded-full w-[35px] h-[35px]"
            src={childComment.user.imageUrl}
          />
          <div className="ml-[8px]">{childComment.user.nickname}</div>
          <div className="flex justify-end flex-grow mr-[5px] text-[#8F8F8F]">
            yyyy.M.d
          </div>
        </div>
        <div>{childComment.content}</div>
        <img className="w-[17px] h-[17px] m-0" src="/asset/Icon_heart.svg" />
      </div>
    );
};

const Comment = ({ boardId, activeId, handleActive }) => {
  const [content, setContent] = useState("");

  const queryClient = useQueryClient();
  const token = sessionStorage.getItem("jwtAuthToken");

  const { data: comments } = useQuery({
    queryKey: [{ boardId }, "comment"],
    queryFn: () =>
      fetch(`${HOST_URL}/api/v1/comments/${boardId}/list`)
        .then((res) => res.json())
        .then((data) => data.data),
    onError: (error) => {
      return `An error has occurred: ${error.message}`;
    },
    enabled: !!token,
  });

  const createComment = (payload) => {
    return axios.post(`${HOST_URL}/api/v1/comments`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const { mutate: submitComment } = useMutation(
    (comment) => createComment(comment),
    {
      onSuccess: (data) => {
        console.log(`Comment has posted successfully: ${data}`);
        queryClient.invalidateQueries([{ boardId }, "comment"]);
        setContent("");
      },
      onError: (error) => {
        return `An error has occurred: ${error.message}`;
      },
    }
  );

  return (
    <div className="bg-white w-full h-full rounded-[10px] flex flex-col px-[23px] pt-[20px] pb-[28px] z-10">
      <span className="text-xl">댓글</span>
      <div className="mt-[15px] bg-black h-[1px]" />
      <div className="flex flex-col h-full overflow-y-auto">
        {comments && comments.length > 0 ? (
          comments.map((comment) => {
            return (
              <div>
                <CommentBox
                  key={comment.id}
                  activeId={activeId}
                  handleActive={handleActive}
                  comment={comment}
                />
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center h-full">
            작성된 댓글이 없습니다.
          </div>
        )}
      </div>
      <div className="flex items-end flex-grow px-[13px]">
        <div className="flex w-full flex-row items-center gap-[7px]">
          <div className="pt-[3px]">user4</div>
          <input
            className="py-[10px] outline-none flex-grow border-b-[1px] border-black"
            placeholder="댓글을 입력하세요."
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <img
            className="m-0 pt-[5px]"
            src="/asset/Icon_upload2.svg"
            alt="comment submit button"
            onClick={() => {
              submitComment({
                boardId: boardId,
                content: content,
                parentId: activeId === null ? 0 : activeId,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Detail = () => {
  const [activeId, setActiveId] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleActive = (commentId) => {
    setActiveId(commentId);
    if (activeId === commentId && isActive) {
      // 해당 옵션을 재클릭하여 옵션이 해제된 경우
      setIsActive(false);
      setActiveId(null);
    } else {
      setIsActive(true);
    }
  };

  const token = sessionStorage.getItem("jwtAuthToken");
  const { boardId } = useParams();

  const queryClient = useQueryClient();

  const { data: boardData } = useQuery({
    queryKey: [{ boardId }, "board"],
    queryFn: () =>
      fetch(`${HOST_URL}/api/v1/boards/${boardId}`)
        .then((res) => res.json())
        .then((data) => data.data),
    onError: (error) => {
      return `An error has occurred: ${error.message}`;
    },
    enabled: !!token,
  });

  const clickLike = (payload) => {
    return axios.post(`${HOST_URL}/api/v1/likes/`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const { mutate: setLike } = useMutation((boardId) => clickLike(boardId), {
    onSuccess: (data) => {
      console.log(`Set like successfully: ${data}`);
      queryClient.invalidateQueries([{ boardId }, "board"]);
    },
    onError: (error) => {
      return `An error has occurred: ${error.message}`;
    },
  });

  if (!boardData) return null;
  return (
    <div className="pl-[230px] h-[100vh] pt-[110px] pb-[20px] pr-[25px] gap-[20px] grid grid-cols-7">
      <div className="z-10 flex flex-row col-span-5">
        <div className="bg-white h-[98%] w-full rounded-[10px] overflow-y-auto px-[60px] py-[20px]">
          <div className="flex flex-row w-full mb-[17px] pt-[10px] items-center">
            <div className="text-3xl line-clamp-2">{boardData.title}</div>
          </div>
          {boardData.videoUrl ? (
            <div className="h-[450px]">
              <iframe
                className="w-full h-full"
                type="text/html"
                title="video player"
                src={boardData.videoUrl}
              />
            </div>
          ) : (
            <></>
          )}
          <div className="flex flex-row my-[20px]">
            <div className="flex flex-row items-center flex-grow gap-[15px]">
              <img
                className="rounded-full w-[50px] h-[50px]"
                src={boardData.userSimpleDto.imageUrl}
                alt="user profile"
              />
              <div className="text-xl">{boardData.userSimpleDto.nickname}</div>
            </div>
            <div className="flex flex-col gap-[3px]">
              <div className="flex flex-row justify-end gap-[10px]">
                <div className="rounded-[50px] bg-[#85AED3] py-[1px] px-[8px] items-center min-w-[70px] flex justify-center text-sm font-semibold text-white">
                  {boardData.category1}
                </div>
                <div className="rounded-[50px] bg-[#EAB191] py-[1px] px-[8px] items-center min-w-[70px] flex justify-center text-sm font-semibold text-white">
                  {boardData.category2}
                </div>
              </div>
              <div className="flex flex-row gap-[10px] items-center">
                <div className="text-[#8F8F8F]">
                  {format(new Date(boardData.createAt), "yyyy.M.d")}
                </div>
                <div className="flex flex-row items-center gap-[5px]">
                  <img
                    className="mt-[3px]"
                    src="/asset/Icon_eye.svg"
                    alt="eye icon"
                  />
                  <div className="text-[#8F8F8F]">{boardData.view}</div>
                </div>
                <div className="flex flex-row items-center gap-[5px]">
                  {boardData.existLike ? (
                    <img
                      className="mt-[3px] hover:cursor-pointer"
                      src="/asset/Icon_filled_heart.svg"
                      alt="filled heart icon"
                      onClick={() => {
                        setLike({
                          contentId: boardId,
                          division: "BOARD_LIKE",
                        });
                      }}
                    />
                  ) : (
                    <img
                      className="mt-[3px] hover:cursor-pointer"
                      src="/asset/Icon_heart.svg"
                      alt="heart icon"
                      onClick={() => {
                        setLike({
                          contentId: boardId,
                          division: "BOARD_LIKE",
                        });
                      }}
                    />
                  )}
                  <div className="text-[#8F8F8F]">{boardData.likeCount}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-[#444444] mb-[20px]" />
          <div dangerouslySetInnerHTML={{ __html: boardData.content }} />
        </div>
      </div>
      <div className="right-0 h-[98%] overflow-y-auto z-10 col-span-2">
        <Comment
          boardId={boardId}
          activeId={activeId}
          handleActive={handleActive}
        />
      </div>
    </div>
  );
};

export default Detail;
