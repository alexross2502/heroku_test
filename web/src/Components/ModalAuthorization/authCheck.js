export async function authCheck(formData) {
  let data = {};
  data.password = formData.password;
  data.login = formData.email;
  const response = await fetch(
    "https://intership-alex.herokuapp.com/api/admin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return await response.json().then((answer) => {
    return answer;
  });
}
