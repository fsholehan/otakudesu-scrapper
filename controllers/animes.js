const axios = require("axios");
const cheerio = require("cheerio");

const base_url = process.env.BASE_URL;

exports.ongoingAnimes = async (req, res) => {
  try {
    const response = await axios.get(`${base_url}`);
    const $ = cheerio.load(response.data);

    const animes = $(".rseries .rapi .venz ul li")
      .map((i, el) => {
        return {
          url: $(el).find(".detpost .thumb a").attr("href"),
          slug: $(el).find(".detpost .thumb a").attr("href").split("/")[4],
          thumbnail: $(el)
            .find(".detpost .thumb a .thumbz img")
            .eq(0)
            .attr("src"),
          title: $(el).find(".detpost .thumb a .thumbz h2").text(),
          episode: $(el).find(".detpost .epz").text().trim(),
          schedules: $(el).find(".detpost .epztipe").text().trim(),
        };
      })
      .get();

    res.status(200).json({
      statusCode: 200,
      status: "OK",
      data: animes.slice(0, 10),
    });
  } catch (error) {
    res.json({
      status: error.status,
      code: error.code,
      message: error.message,
    });
  }
};

exports.completedAnimes = async (req, res) => {
  try {
    const response = await axios.get(`${base_url}`);
    const $ = cheerio.load(response.data);

    const animes = $(".rseries .rseries .rapi .venz ul li")
      .map((i, el) => {
        return {
          url: $(el).find(".detpost .thumb a").attr("href"),
          slug: $(el).find(".detpost .thumb a").attr("href").split("/")[4],
          thumbnail: $(el)
            .find(".detpost .thumb a .thumbz img")
            .eq(0)
            .attr("src"),
          title: $(el).find(".detpost .thumb a .thumbz h2").text(),
          episode: $(el).find(".detpost .epz").text().trim(),
          rating: $(el).find(".detpost .epztipe").text().trim(),
        };
      })
      .get();

    res.status(200).json({
      statusCode: 200,
      status: "OK",
      data: animes,
    });
  } catch (error) {
    res.json({
      status: error.status,
      code: error.code,
      message: error.message,
    });
  }
};
