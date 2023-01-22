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

exports.animesInfo = async (req, res) => {
  const { name } = req.query;
  try {
    const response = await axios.get(`${base_url}/anime/${name}`);
    const $ = cheerio.load(response.data);

    const episodes = $(".episodelist ")
      .eq(1)
      .find("ul li span a")
      .map((i, el) => {
        return {
          uri: $(el).attr("href"),
          eps: $(el).text(),
          slug: $(el).attr("href").split("/")[4],
        };
      })
      .get();
    const info = $(".infozin .infozingle p span")
      .map((i, el) => $(el).text())
      .get();
    res.json({
      statusCode: 200,
      status: "OK",
      data: {
        imgUrl: $("#venkonten .venser .fotoanime img").attr("src"),
        title: $("#venkonten .venser .jdlrx h1").text().trim(),
        slug: name,
        description: $("#venkonten .venser .sinopc p").first().text(),
        rating: $(".rating strong").text().split(" ")[1],
        first_episode: {
          episode: episodes[episodes.length - 1].eps,
          slug: episodes[episodes.length - 1].slug,
        },
        last_episode: {
          episode: episodes[0].eps,
          slug: episodes[0].slug,
        },
        info,
        episodes,
      },
    });
  } catch (error) {
    res.json({
      status: error.status,
      code: error.code,
      message: error.message,
    });
  }
};

exports.animeWatch = async (req, res) => {
  const { slug } = req.query;
  try {
    const response = await axios.get(`${base_url}/episode/${slug}`);
    const $ = cheerio.load(response.data);

    const episodes = $(".keyingpost li a")
      .map((i, el) => {
        return {
          uri: $(el).attr("href"),
          eps: $(el).text(),
          slug: $(el).attr("href").split("/")[4],
        };
      })
      .get();

    res.json({
      statusCode: 200,
      status: "OK",
      data: {
        title: $("#venkonten .venser .venutama h1").text(),
        video_uri: $(".player-embed").find("iframe").attr("src"),
        thumbnail: $(".cukder img").attr("src"),
        first_episode: {
          episode: episodes[episodes.length - 1].eps,
          slug: episodes[episodes.length - 1].slug,
        },
        last_episode: {
          episode: episodes[0].eps,
          slug: episodes[0].slug,
        },
        episodes,
      },
    });
  } catch (error) {
    res.json({
      status: error.status,
      code: error.code,
      message: error.message,
    });
  }
};
