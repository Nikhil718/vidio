const API_KEY = process.env.REACT_APP_API_KEY;

export const YOUTUBE_VIDEO_URL =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCHED_VIDEO_API =
  "https://corsanywhere.herokuapp.com/https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&regionCode=IN&type=video&key=" +
  API_KEY +
  "&q=";
export const VIDEO_BY_ID =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY +
  "&id=";
export const LIVE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=50&q=gaming&type=video&key=" +
  API_KEY +
  "&regionCode=IN";
export const RELATED_VIDEOD_API =
  " https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&regionCode=IN&type=video&key=" +
  API_KEY +
  "&relatedToVideoId=";
export const textLimit = 12;
