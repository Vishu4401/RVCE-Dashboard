// const fileUpload = require('file-upload');
const express = require("express");
const upload = require("express-fileupload");

const app = express();
app.use(upload());

// app.listen(4056);
// console.log("listening 4056");



app.get("/", (req, res) => [res.sendFile(__dirname + "/index.html")]);


app.post("/", (req, res) => {
  if (req.files) {
    console.log(req.files);
    const file = req.files.file;
    const filename = file.name;
    console.log(filename);

    file.mv("./" + filename, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("file uploaded");
      }
    });
  }
});
