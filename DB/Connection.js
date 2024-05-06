const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    ""
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((e) => console.log(e));
