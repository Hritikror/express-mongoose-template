const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://hritik-ror:HRItik.123%40%23@cluster0.0oiaf.mongodb.net/"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((e) => console.log(e));
