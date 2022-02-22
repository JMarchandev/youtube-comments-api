import express, { Request, Response } from "express";

import { CommentsThreadResultsExpert, CommentsThreadResultsMinimal } from "../types/YoutubeComments";
import { getCommentFromVideo } from "./../controllers/YoutuneController";

const router = express.Router();

router.get("/comments", async (req: Request, res: Response) => {
  const limit = req.query.limit || '50';
  const content = req.query.content || "minimal";

  try {
    if (typeof req.query.results === "string") {
      const response: CommentsThreadResultsMinimal | CommentsThreadResultsExpert = await getCommentFromVideo(
        req.query.results,
        limit,
        content
      );
      res.json(response);
    } else {
      throw { message: "no query in url check doc or change job" };
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
