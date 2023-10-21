const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 (a7ad) 6 (sebt)
  const hourOfDay = now.getHours();

  // bech naraw layamet wel wa9t alli yekhdem fih l site (mil thnin lel jom3a mil 9h lel 17h)
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
    next();
  } else {
    res.sendFile(__dirname + "/public/error.html");
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/public/services.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
