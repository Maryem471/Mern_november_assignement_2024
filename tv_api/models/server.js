import express from "express";
import bodyParser from "body-parser";
import { tvShows } from "./models/tv.model.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());


app.get("/api/tvshows", (req, res) => {
  res.json(tvShows);
});


app.get("/api/tvshows/:year", (req, res) => {
  const year = parseInt(req.params.year);
  const filteredShows = tvShows.filter(show => show.yearCreated === year);
  res.json(filteredShows.length ? filteredShows : { message: "No TV shows found for this year" });
});


app.delete("/api/tvshows/:title", (req, res) => {
  const title = req.params.title;
  const index = tvShows.findIndex(show => show.tvShow.toLowerCase() === title.toLowerCase());

  if (index !== -1) {
    tvShows.splice(index, 1);
    res.json(tvShows);
  } else {
    res.status(404).json({ message: "TV show not found" });
  }
});


app.patch("/api/tvshows/:title", (req, res) => {
  const title = req.params.title;
  const { starring } = req.body;

  const show = tvShows.find(show => show.tvShow.toLowerCase() === title.toLowerCase());

  if (show) {
    show.starring = starring;
    res.json(show);
  } else {
    res.status(404).json({ message: "TV show not found" });
  }
});


app.post("/api/tvshows", (req, res) => {
  const newShow = req.body;
  tvShows.push(newShow);
  res.status(201).json(tvShows);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
