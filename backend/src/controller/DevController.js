const api = require("axios");
const Dev = require("../models/Dev");

const { parseStringAsArray } = require("../utils/Functions");

const index = async (request, response) => {
  const devs = await Dev.find();
  return response.json(devs);
};

const store = async (request, response) => {
  const { github_usename, techs, latitude, longitude } = request.body;

  let dev = await Dev.findOne({ github_usename });

  if (!dev) {
    // Tratando dados da api do github
    const git = await api.get(`https://api.github.com/users/${github_usename}`);
    const { name = login, bio, avatar_url } = git.data;

    // Tratando techs
    const techsArray = parseStringAsArray(techs);

    // Tratando a localização
    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    dev = await Dev.create({
      name,
      bio,
      location,
      avatar_url,
      github_usename,
      techs: techsArray
    });
  }

  return response.send(dev);
};

module.exports = { index, store };
