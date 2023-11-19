export const handleAxiosError = (error) => {
  console.error("Response Error:", error.response.data);
  console.error("Status Code:", error.response.status);

  if (error.response.status === 401) {
    window.location.href = "/new-portal/login";
  }
};
