import { createResult } from "../utils/score.js";

export default function urlModule(input) {
  let score = 0;
  let reasons = [];

  const shorteners = ["bit.ly", "tinyurl", "t.co", "goo.gl"]
  shorteners.forEach(url => {
    if (input.includes(url)) {
      score += 25;
      reasons.push("Shortened URL detected");
    }
  });

  return createResult("url", score, reasons);
}
