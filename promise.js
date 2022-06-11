const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (effect) => {
  try {
    const ixxAudiance = await promiseTheaterIXX();
    const vcgAudiance = await promiseTheaterVGC();
    const theaterEff = await ixxAudiance.concat(vcgAudiance)
    return theaterEff.filter(x => x.hasil == effect).length;
  } catch (error) {
    return error;
  }
};

module.exports = {
  promiseOutput,
};
