export const handleAxiosError = (error) => {
  console.error("Response Error:", error.response.data);
  console.error("Status Code:", error.response.status);

  if (error.response.status === 401) {
    alert("로그인이 필요합니다. 로그인 창으로 이동됩니다.");
    window.location.href = "/new-portal/login";
  }
};
