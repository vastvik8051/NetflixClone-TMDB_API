Netflix Clone (TMDB API Project)**

A front-end Netflix clone built using HTML, CSS, and JavaScript, powered by the TMDB (The Movie Database) API. This project replicates the core UI and browsing experience of Netflix, including a dynamic banner, movie categories, and trailer previews.

Live Demo - https://netflix-clone-tmdb-api.vercel.app/
Hosted using GitHub Pages. (If movies do not load, see the API note below.)

————-Features————————-
Dynamic movie data from TMDB API
Trending banner section with movie overview
Multiple movie categories by genre
Horizontal scrolling movie rows
Hover to preview movie trailers (YouTube API)
Responsive navigation bar
Netflix-style UI design

Tech Stack
HTML5
CSS3 (Flexbox layout)
Vanilla JavaScript (ES6)
TMDB API
YouTube Search API

——————Project Structure———————-
Netflix-Clone/
│
├── index.html # Main HTML file
├── NetflixStyle.css # All styles
├── Netflix.js # API calls and UI rendering
└── assets/ # Images (logo etc.)

—————-How It Works———————-
App loads trending movies.
Fetches movie genres from TMDB.
Builds rows of movies per genre.
Displays a random trending movie in the banner.
On hover, searches YouTube and plays a trailer preview.

API Note (Important)
TMDB API requests may be blocked on some networks or regions. If the site loads with no movie data, try using a VPN. This is a network restriction issue, not a code issue.

—————What I Learned—————-
Working with real APIs and asynchronous JavaScript
Dynamic DOM rendering
Handling JSON data and API responses
UI structuring similar to production streaming platforms
Managing layout and hover interactions

Future Improvements
Better mobile responsiveness
Loading skeletons while fetching data
Debounced search feature
Movie detail modal
Performance optimization

Author
Vastvik Sharma
Frontend Developer | Learning Full Stack Development

This project is for educational and portfolio purposes only. All movie data belongs to TMDB.
