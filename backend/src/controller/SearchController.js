const Dev = require("../models/Dev");

const Functions = require("../utils/functions");

const index = async (request, response) => {
  const { latitude, longitude, techs } = request.query;

  const techsArray = Functions.parseStringAsArray(techs);

  const devs = await Dev.find({
    techs: {
      $in: techsArray
    },
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude]
        },
        $maxDistance: 10000
      }
    }
  });

  return response.json({ devs });
};

module.exports = { index };
