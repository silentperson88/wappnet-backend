import express from "express";
import contactsRouter from "./contact.route";
import tagsRouter from "./tags.route";

const app = express();

app.use("/contacts", contactsRouter);
app.use("/tags", tagsRouter);

export default app;
