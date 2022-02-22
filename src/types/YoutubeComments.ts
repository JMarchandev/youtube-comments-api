type CommentThreadItemSnippets = {
  videoId: string;
  topLevelComment: {
    kind: "youtube#comment";
    etag: string;
    id: string;
    snippet: {
      videoId: string;
      textDisplay: string;
      textOriginal: string;
      authorDisplayName: string;
      authorProfileImageUrl: string;
      authorChannelUrl: string;
      authorChannelId: {
        value: string;
      };
      canRate: boolean;
      viewerRating: string;
      likeCount: number;
      publishedAt: string;
      updatedAt: string;
    };
  };
  canReply: boolean;
  totalReplyCount: number;
  isPublic: boolean;
};

type CommentThreadItem = {
  kind: "youtube#commentThread";
  etag: string;
  id: string;
  snippet: CommentThreadItemSnippets;
};

export type CommentsThread = {
  kind: "youtube#commentThreadListResponse";
  etag: string;
  nextPageToken: string;
  pageInfo: { totalResults: number; resultsPerPage: number };
  items: CommentThreadItem[];
};

type MappedCommentThreadItemMinimal = {
  id: string;
  textDisplay: string;
  authorDisplayName: string;
  publishedAt: string;
  updatedAt: string;
};

type MappedCommentThreadItemExpert = {
  videoId: string;
  id: string;
  kind: "youtube#commentThread";
  etag: string;
  textDisplay: string;
  textOriginal: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: {
    value: string;
  };
  likeCount: number;
  publishedAt: string;
  updatedAt: string;
  totalReplyCount: number;
};

export type MappedCommentThreadMinimal = {
  videoId: string,
  url: string
  items: MappedCommentThreadItemMinimal[];
};

export type MappedCommentThreadExpert = {
  videoId: string,
  url: string
  kind: "youtube#commentThreadListResponse";
  etag: string;
  nextPageToken: string;
  totalResults: number;
  resultPerPage: number;
  items: MappedCommentThreadItemExpert[];
};

export type CommentsThreadResultsExpert = {
  url: string;
  videoId: string;
  kind: "youtube#commentThreadListResponse";
  etag: string;
  nextPageToken: string;
  totalResults: number;
  resultPerPage: number;
  items: MappedCommentThreadItemExpert[] | MappedCommentThreadItemMinimal[];
};

export type CommentsThreadResultsMinimal = {
  url: string;
  videoId: string;
  items: MappedCommentThreadItemExpert[] | MappedCommentThreadItemMinimal[];
};
