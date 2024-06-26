const client_id = "83d1a2c7797647918503f36c8ed209f0";
// const client_secret = "69ba1e024cdd4890a1111486ec2f7120";

export const autEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri =
  "https://music-player-git-main-ryzen322s-projects.vercel.app/";

// const redirectUri = "http://localhost:5173/";

const scopes = [
  "streaming",
  // Users
  "user-read-email",
  "user-read-private",
  // Library
  "user-library-modify",
  "user-library-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-playback-position",
  "user-read-recently-played",
  "user-top-read",
  "user-follow-modify",
  "user-follow-read",
];

export const loginURL = `${autEndpoint}?client_id=${client_id}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
