import fs from "fs";
import { connectDatabase, getDatabase } from "../../database/db";

const seedContacts = async () => {
  await connectDatabase();
  const db = getDatabase();
  const contactsData = JSON.parse(
    fs.readFileSync("./data/contacts.data.json", "utf-8")
  );

  for (const contact of contactsData) {
    const { firstName, lastName, profile, phone } = contact;
    const query =
      "INSERT INTO contact (firstName, lastName, profile, phone) VALUES (?, ?, ?, ?)";
    const values = [firstName, lastName, profile, phone];

    db.query(query, values, (err) => {
      if (err) {
        console.error("Error seeding contact:", err);
      } else {
        console.log("Contact seeded successfully:", contact);
      }
    });
  }
};

seedContacts();
