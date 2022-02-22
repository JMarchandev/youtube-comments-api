import { CommentsThread } from "../types/YoutubeComments";
import { getCommentsFromVideo } from "../api/youtubeApi";
import { mapYoutubeCommentsData } from "./../services/youtube-comments";
  
export const getCommentFromVideo = async (
  url: string,
  limit: any | string,
  content: any | "minimal" | "expert"
) => {
  const id = url.split("/watch?v=")[1];

  try {
    const comments: CommentsThread = await getCommentsFromVideo(id, limit);
    const result = mapYoutubeCommentsData(comments, url, id, content);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCommentFromVideo,
};
