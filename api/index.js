const axios = require("axios");

const stockApi = {
  getSpark: async (symbol) => {
    try {
      const config = {
        method: "get",
        url: `http://localhost:3000/spark?symbol=${symbol}`,
        headers: {}
      };

      axios(config)
        .then(function (response) {
          console.log(response.data.data);
          return response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = stockApi;
