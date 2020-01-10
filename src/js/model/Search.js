require("@babel/polyfill");
import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async doSearch() {
    try {
      let result = await axios(
        "https://forkify-api.herokuapp.com/api/search?q=" + this.query
      );

      this.result = result.data.recipes;

      return this.result;
    } catch (error) {
      console.log("Асуудал гарлаа : " + error);
    }
  }
}
