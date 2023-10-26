import { Request, Response } from "express";
import {
  getTagsService,
  createTagService,
  deleteTagService,
} from "../services/tag.service";

export const registerTag = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const tag = await createTagService(name);
    res.json(tag);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
export const getAllTags = async (req: Request, res: Response) => {
  try {
    const tags = await getTagsService();
    res.json(tags);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

export const deleteTag = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const tag = await deleteTagService(id);
    res.json(tag);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
