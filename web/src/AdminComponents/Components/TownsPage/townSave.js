export async function townSave(name) {
  let data = {};
  data.name = name;
  const response = await fetch(
    "https://intership-alex.herokuapp.com/api/towns",
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
