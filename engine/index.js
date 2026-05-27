import phising from "./modules/phising.js";
import url from "./modules/url.js";
import profanity from "./modules/profanity.js"
import patterns from "./modules/patterns.js"

const modules = [phising, url, profanity, patterns]

export function analyze(input) {
  let total = 0;
  let triggered = [];

  modules.forEach(mod => {
    const result = mod(input);
    if (result.score > 0) {
      total += result.score;
      triggered.push(result);
    }
  });

  let category = "safe";
  if (total > 70) category = "high-rish";
  else if (total > 40) category = "medium-risk";

  return {
    score: total,
    category,
    triggered,
  }
}
