import axios from "axios";

const TOKEN = "ch7pu4pr01qt83gcegsgch7pu4pr01qt83gcegt0";

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN,
  },
});
