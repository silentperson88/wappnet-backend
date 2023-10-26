import { getDatabase } from "../../database/db";
import { Contact } from "../models/contact.model";

export const getContacts = async () => {
  const db = getDatabase();

  return new Promise<Contact[]>((resolve, reject) => {
    const query = "SELECT * FROM contact";
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
