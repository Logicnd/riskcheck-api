import { createResult } from "../utils/score.js";

export default function patternsModule(input) {
  let score = 0;
  let reasons = [];

  if (/(!!!|\?\?\?)/.test(input)) {
    score += 10;
    reasons.push("Excessive punctuation");
  }

  if (/[^a-zA-Z0-9\s.,!?]/.test(input)) {
    score += 10;
    reasons.push("Unusual characters");
  }

  return createResult("patterns", score, reasons);
}
