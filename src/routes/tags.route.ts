import express from "express";
import {
  getAllTags,
  registerTag,
  deleteTag,
} from "../controllers/tag.controller";
import { tagsValidator } from "../validator/tag.validator";

const router = express.Router();

// rsgister new tags
router.post("/", tagsValidator.createTag, registerTag);

// get all tags
router.get("/", getAllTags);

// delete tags
router.delete("/:id", deleteTag);

export default router;
