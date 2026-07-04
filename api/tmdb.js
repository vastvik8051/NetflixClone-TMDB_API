export default async function handler(req, res) {
  const { path } = req.query;
  const TMDB_API_KEY = process.env.TMDB_API_KEY;

  try {
    const url = `https://api.themoviedb.org/3/${path}${path.includes('?') ? '&' : '?'}api_key=${TMDB_API_KEY}`;
    console.log("Fetching:", url);
    
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error("TMDB error response:", data);
      return res.status(response.status).json(data);
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: error.message });
  }
}