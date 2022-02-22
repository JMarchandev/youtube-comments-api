import {
  CommentsThread,
  MappedCommentThreadExpert,
  MappedCommentThreadMinimal,
} from "../types/YoutubeComments";

export const mapYoutubeCommentsData = (
  comments: CommentsThread,
  url: string,
  videoId: string,
  content: "minimal" | "expert"
): MappedCommentThreadExpert | MappedCommentThreadMinimal => {
  const { kind, etag, nextPageToken, pageInfo, items } = comments;

  const mappedItems = items.map(
    ({
      id,
      kind,
      etag,
      snippet: {
        totalReplyCount,
        topLevelComment: {
          snippet: {
            textDisplay,
            videoId,
            textOriginal,
            authorDisplayName,
            authorProfileImageUrl,
            authorChannelUrl,
            authorChannelId,
            likeCount,
            publishedAt,
            updatedAt,
          },
        },
      },
    }) => {
      if (content === "minimal") {
        return {
          id,
          textDisplay,
          authorDisplayName,
          publishedAt,
          updatedAt,
        };
      }
      return {
        videoId,
        id,
        kind,
        etag,
        textDisplay,
        textOriginal,
        authorDisplayName,
        authorProfileImageUrl,
        authorChannelUrl,
        authorChannelId,
        likeCount,
        publishedAt,
        updatedAt,
        totalReplyCount,
      };
    }
  );
  
  if (content === 'minimal') {
    return {
      videoId,
      url,
      items: mappedItems,
    }
  }
  return {
    videoId,
    url,
    kind,
    etag,
    nextPageToken,
    totalResults: pageInfo.totalResults,
    resultPerPage: pageInfo.resultsPerPage,
    items: mappedItems,
  };
};

module.exports = {
  mapYoutubeCommentsData,
};
