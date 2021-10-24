const Jimp = require("jimp");

const imageResize = async (path, sizeX, sizeY) => {
  try {
    const image = await Jimp.read(path);
    await image.resize(sizeX, sizeY);
    await image.writeAsync(path);
  } catch (error) {
    console.log(error);
  }
};

module.exports = imageResize;
