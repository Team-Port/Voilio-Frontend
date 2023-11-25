import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { HOST_URL } from "../../lib/HostUrl";
import { handleAxiosError } from "./axios-utils";

import { getJwtToken } from "../Auth";

export const useUploadVideo = () => {
  const token = getJwtToken();

  return useMutation(
    (videoFormData) =>
      axios.post(`${HOST_URL}/api/v1/boards/video`, videoFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }),
    {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (error) => {
        return `An error has occurred: ${error.message}`;
      },
      enabled: !!token,
    }
  );
};

export const useUploadThumbnail = () => {
  const token = getJwtToken();

  return useMutation(
    (thumbnailFormData) =>
      axios.post(`${HOST_URL}/api/v1/boards/THUMBNAIL`, thumbnailFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }),
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        return `An error has occurred: ${error.message}`;
      },
      enabled: !!token,
    }
  );
};

export const useSubmitBoard = () => {
  const token = getJwtToken();
  const navigate = useNavigate();

  return useMutation(
    async (boardData) =>
      await axios.post(`${HOST_URL}/api/v1/boards/create`, boardData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
    {
      onSuccess: (data) => {
        console.log(data);
        alert("게시물이 정상적으로 업로드 되었습니다.");

        navigate("/new-portal");
        window.location.reload();
      },
      onError: (error) => {
        handleAxiosError(error);
      },
    }
  );
};
