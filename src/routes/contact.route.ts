import express from "express";
import { getAllContacts } from "../controllers/contact.controller";

const router = express.Router();

router.get("/", getAllContacts);

export default router;
