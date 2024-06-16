const express = require("express");

const mongodb = require("./data/database");
const app = express();

const port = process.env.PORT || 3000;

app.use("/", require("./routes"));

mongodb.initDB((err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {
            console.log(`Database is listening and node app is running on port ${port}`);
        })
    }
});