import axios from "axios";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const COMMENTS_THREAD_URL =
  "https://www.googleapis.com/youtube/v3/commentThreads";

const headers = {
  Accept: "application/json",
};

export const getCommentsFromVideo = async (videoId: string, limit?: number) => {
  const maxResults = limit ? limit : 50;
  try {
    const results = await axios.get(
      `${COMMENTS_THREAD_URL}?key=${YOUTUBE_API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=${maxResults}`,
      {
        headers,
      }
    );
    return results.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { getCommentsFromVideo };
