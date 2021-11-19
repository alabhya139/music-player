import MAAD_CITY from "../assets/images/maad_city.png";
import SECTION_80 from "../assets/images/Section_80.jpg";
import KOD from "../assets/images/kod.jpeg";
import BORN_SINNER from "../assets/images/born_sinner.jpg";

const MAAD_CITY_MP3 = require("../assets/tracks/money_trees.mp3");
const SECTION_80_MP3 = require("../assets/tracks/hiiipower.mp3");
const KOD_MP3 = require("../assets/tracks/brackets.mp3");
const BORN_SINNER_MP3 = require("../assets/tracks/land_of_snakes.mp3");

export const tracks = [
    {
      title: "Money Trees",
      artist: "Kendrick Lamar",
      album: "good kid, m.A.A.d city",
      audioSrc: MAAD_CITY_MP3,
      image: MAAD_CITY,
    },
    {
      title: "HiiiPoWeR",
      artist: "Kendrick Lamar",
      album: "Section.80",
      audioSrc: SECTION_80_MP3,
      image: SECTION_80,
    },
    {
      title: "BRACKETS",
      artist: "J. Cole",
      album: "KOD",
      audioSrc: KOD_MP3,
      image: KOD,
    },
    {
        title: "LAnd of the Snakes",
        artist: "J. Cole",
        album: "Born Sinner (Deluxe Version)",
        audioSrc: BORN_SINNER_MP3,
        image: BORN_SINNER,
      }
  ];