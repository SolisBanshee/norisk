export const getComments = async () => {
  const api_call = await fetch(`http://localhost:5000/api/v1/comments/read`);
  const data = await api_call.json();
  if (data && !!data.length) {
    return data;
  } else {
    return [];
  }
};
