# Youtube Comments API

Get comment from any Youtube Video

**There is two mode:**
- Minimal
- Expert

# How to run

Clone projet on you device

Copy/paste `.env.example` and add your google api key with Youtube API v3 turned on

`npm -i && npm run dev`

# How to use

Not done but coming Api Doc by `swagger`

Minimal: 
- `http://localhost:3000/youtube/comments?results=[youtube-video-url]`

Expert: 
- `http://localhost:3000/youtube/comments?results=[youtube-video-url]&content=expert`

Possible queries:
- `&limit=[your-limit]`

# Models

Minimal: 

    {
	    "videoId": "rKA-fX0HMnM",
	    "url": 
	    "items": [
		    {
			    "id": ...string,
			    "textDisplay": ...string,
			    "authorDisplayName": ...string,
			    "publishedAt": ...date,
			    "updatedAt": ...date
		    }
	    ]
    }

Expert: 

    {
	    "videoId": ...string,
	    "url": ...string[url],
	    "kind": ...string["youtube#commentThreadListResponse"],
	    "etag": ...string,
	    "totalResults": ...number,
	    "resultPerPage": ...number,
	    "items" : [
		    {
			    "videoId": ...string,
			    "id": ...string,
			    "kind": ...string["youtube#commentThread"],
			    "etag": ...string,
			    "textDisplay": ...string,
			    "textOriginal": ...string,
			    "authorDisplayName": ...string,
			    "authorProfileImageUrl": ...string[url],
			    "authorChannelUrl": ...string[url],
			    "authorChannelId": {
				    "value": ...string
			    },
			    "likeCount": ...number,
			    "publishedAt": ...date,
			    "updatedAt": ...date,
			    "totalReplyCount": ...number
		    }
	    ]
    }
