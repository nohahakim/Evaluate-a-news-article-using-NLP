
async function postData(url = "", data = {}) {
  const response = await fetch('http://localhost:8081/api', {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    return await response.json();
  } catch (error) {
    console.log(error);
  }

};
export { postData }