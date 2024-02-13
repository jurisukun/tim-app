export const customfetch = async (url, method, body) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  if (result?.refreshToken || result?.token) {
    localStorage.setItem("token", result.refreshToken ?? result.token);
  }

  return result;
};
