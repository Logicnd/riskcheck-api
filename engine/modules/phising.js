import { createResult } from "../utils/score.js";

export default function phisingModule(input) {
  const text = input.toLowerCase();
  let score = 0;
  let reasons = [];

  const patterns = ["free", "claim", "winner", "verify", "prize"];
  patterns.forEach(word => {
    if (text.includes(word)) {
      score += 15;
      reasons.push(`Suspicious keyword: "${word}"`);
    }
  });

  return createResult("phising", score, reasons);
}
