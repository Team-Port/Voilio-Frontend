import { useMutation, useQuery } from "react-query";
import { QueryClient } from "react-query";

import { HOST_URL } from "../../lib/HostUrl";
import axios from "axios";
import jwt_decode from "jwt-decode";

import {
  getJwtToken,
  setJwtToken,
  removeJwtToken,
  setUserNickname,
} from "../auth";

export const useLogin = () => {
  const queryClient = new QueryClient();
  const myInfoQuery = useMyInfo();

  return useMutation(
    ({ email, password }) =>
      axios.post(`${HOST_URL}/api/v1/auth/login`, {
        email,
        password,
      }),
    {
      onSuccess: (response) => {
        console.log(response);

        const token = response.data.data.replace("Bearer ", "");
        setJwtToken(token);

        const decodedToken = jwt_decode(token);
        const expirationTime = decodedToken.exp * 1000;

        if (expirationTime < Date.now()) {
          removeJwtToken();
        }

        alert("반가워요!");
        window.location.href = "/new-portal";
      },
      onError: (error) => {
        console.log(error);
        if (error?.response.status === 401) {
          alert("E-mail 또는 비밀번호를 확인해 주세요.");
        }
      },
    }
  );
};

export const useMyInfo = () => {
  const token = getJwtToken();

  return useQuery({
    queryKey: ["me"],
    queryFn: () =>
      fetch(`${HOST_URL}/api/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => data.data),
    onSuccess: (data) => {
      setUserNickname(data.nickname);
    },
    onError: (error) => {
      return `An error has occurred: ${error.message}`;
    },
    enabled: !!token,
  });
};
