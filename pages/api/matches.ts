import { NextApiRequest, NextApiResponse } from "next";
import stringSimilarity from "string-similarity";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { word } = req.query;
  const answer = "hello world this is a test";
  const similarity = stringSimilarity.compareTwoStrings(
    answer?.toString() || "",
    word?.toString() || ""
  );
  const threshhold = 0.6;

  return res.status(200).json({
    word,
    answer,
    similarity,
    isCorrect: similarity > threshhold,
  });
}
