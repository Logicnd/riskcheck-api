import { createResult } from "../utils/score.js";

export default function profanityModule(input) {
  const bad = ["fuck", "shit", "ass", "bitch"]
  let score = 0;
  let reasons = [];

  bad.forEach(word => {
    if (input.toLowerCase().includes(word)) {
      score += 10;
      reasons.push('Profanity detected: (${word})')
    }
  });

  return createResult("profanity", score, reasons);
}
