const express = require("express");
const router = express.Router();
const multer = require("multer");
const Articles = require("../models/articles");

const storage = multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, "./mernweb/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});

//Request Get All Articles
router.get("/", (req,res) => {
    Articles.find()
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//Request Add new Article
router.post("/add", upload.single("articleImage"), (req, res) => {
    const newArticle = new Articles({
        title : req.body.title,
        article : req.body.article,
        authorname : req.body.authorname,
        articleImage : req.file.originalImage
    });

    newArticle
        .save()
        .then(() => res.json("New Article posted!"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

//Request FIND ARTICLE BY ID 
router.get("/:id", (req, res) => {
    Articles.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//REQUEST FIND ARTICLE BY ID AND UPDATE
router.put("/update/:id", upload.single("articleImage"), (req,res) => {
    Articles.findById(req.params.id)
    .then((article) => {
        article.title = req.body.title;
        article.article = req.body.article;
        article.authorname = req.body.authorname;
        article.articleImage = req.file.articleImage;


        article
            .save()
            .then(() => res.json("Article Updated!"))
            .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//REQUEST FIND ARTICLE BY ID AND DELETE
router.delete("/:id", (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("Article Deleted!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;