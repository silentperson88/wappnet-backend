import fs from "fs";
import { connectDatabase, getDatabase } from "../../database/db";

const seedTags = async () => {
  await connectDatabase();
  const db = getDatabase();
  const tagsData = JSON.parse(
    fs.readFileSync("./data/tags.data.json", "utf-8")
  );

  for (const tag of tagsData) {
    const { name } = tag;
    const query = "INSERT INTO tag (name) VALUES (?)";
    const values = [name];

    db.query(query, values, (err) => {
      if (err) {
        console.error("Error seeding tag:", err);
      } else {
        console.log("Tag seeded successfully:", tag);
      }
    });
  }
};

seedTags();
