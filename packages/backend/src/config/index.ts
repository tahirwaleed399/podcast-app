import dotenv from 'dotenv';
dotenv.config();



console.log("PORT:", process.env.PORT);
console.log("PODCAST_API_URL:", process.env.PODCAST_API_URL);


export default {
  port: process.env.PORT || 3000,
  podcastApiUrl: process.env.PODCAST_API_URL || 'https://601f1754b5a0e9001706a292.mockapi.io',
};