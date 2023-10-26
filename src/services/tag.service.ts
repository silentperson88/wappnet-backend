import { getDatabase } from "../../database/db";
import { Tag } from "../models/tag.model";

export const createTagService = async (name: string) => {
  const db = getDatabase();
  return new Promise<Tag>((resolve, reject) => {
    const query = "INSERT INTO tag (name) VALUES (?)";
    const values = [name];
    db.query(query, values, (err, result) => {
      if (err) {
        reject(err);
      } else {
        const tag = {
          id: result.insertId,
          name,
        };
        resolve(tag);
      }
    });
  });
};

export const getTagsService = async () => {
  const db = getDatabase();
  return new Promise<Tag>((resolve, reject) => {
    const query = "SELECT * FROM tag";
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export const deleteTagService = async (id: string) => {
  const db = getDatabase();
  return new Promise<Tag>((resolve, reject) => {
    const query = "DELETE FROM tag WHERE id = ?";
    const values = [id];
    db.query(query, values, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
