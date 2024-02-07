let accessToken;

fetch("https://restaurant-project-rwmk.onrender.com/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=UTF-8" },
  body: JSON.stringify({
    email: "rare123@gmail.com",
    password: "rarerabbit",
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    accessToken = data.accessToken;
    //localStorage.set('token', accessToken);
  });
