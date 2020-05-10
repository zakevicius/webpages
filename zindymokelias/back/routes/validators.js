const { check } = require("express-validator");

module.exports = {
  requireTitle: check("title").trim().isLength({ min: 5 }).withMessage("Title is required"),
  requireIntro: check("intro").trim().isLength({ min: 5 }).withMessage("Intro is required"),
  requireContent: check("content").trim().isLength({ min: 5 }).withMessage("Content is required")
};
