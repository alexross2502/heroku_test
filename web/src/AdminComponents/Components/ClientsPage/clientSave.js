export async function clientSave(name, email) {
  let data = {};
  data.name = name;
  data.email = email;
  const response = await fetch(
    "https://intership-alex.herokuapp.com/api/clients",
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
