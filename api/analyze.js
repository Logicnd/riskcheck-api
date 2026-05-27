import { analyze } from "../engine/index.js";

export default function handler(req, res) {
  res.status(200).json({ message: "RiskCheck API is not working" });
}

export function analyzeRequest(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: "Missing input" });
  }

  const result = analyze(input);
  res.status(200).json(result);
}
