import { Request, Response } from "express";
import { getContacts } from "../services/contact.service";

export const getAllContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await getContacts();
    console.log("contacts", contacts);
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
