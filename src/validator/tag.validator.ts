import { body, param } from "express-validator";

export class tagsValidator {
  static createTag() {
    return [
      body("name", "name is required")
        .isString()
        .notEmpty()
        .withMessage("name must be a string"),
      body("name", "name must be a string").isString(),
    ];
  }
  static deleteTag() {
    return [
      param("id", "id is required").exists(),
      param("id", "id must be a number").isNumeric(),
    ];
  }
}
