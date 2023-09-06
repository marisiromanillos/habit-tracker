const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/user", userRoutes);

//route
app.get("/goals", (req, res) => {
  try {
    const allGoals = [
      { id: 0, name: "Lift Heavier 💪🏾" },
      { id: 1, name: "Code More 👩🏾‍💻" },
      { id: 2, name: "Eat Better 🥗" },
      { id: 3, name: "Sleep 8 Hours 😴" },
    ];
    res.send(allGoals);
  } catch (error) {
    console.log("goals not found");
  }
});

const port = process.env.PORT || 6001;

app.listen(6001, () => {
  console.log("The Server is running!");
});
