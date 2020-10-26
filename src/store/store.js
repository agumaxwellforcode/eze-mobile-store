import { makeObservable, observable, action, computed } from "mobx";
import axios from "axios";

import { buildUrl } from "../utils/cleaner";

export default class PhonesStore {
  phones = [];
  initial_data_retrieved = false;
  price = {
    min: "",
    max: "",
  };

  constructor() {
    makeObservable(this, {
      price: observable,
      phones: observable,
      initial_data_retrieved: observable,
      set_data: action,
      spread_data: action,
      startcall: action,
      retrievePhones: computed,
      dataRetrieved: computed,
      retrievePriceRange: computed,
      searchPhones: action,
      setPrice: action
    });
  }

  set_data = (data) => {
    this.phones = data;
  };
  spread_data = (data) => {
    this.phones = [...this.phones, ...data];
  };
  startcall = (url) => {
    axios
      .get(url)
      .then((res) => {
        this.set_data(res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    this.initial_data_retrieved = true;
  };
  searchPhones = (search_param) => {
    let url = buildUrl(search_param, this.price);
    axios
      .get(url)
      .then((res) => {
        this.set_data(res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  setPrice = (price_object) => {
    this.price = price_object;
  };
  get retrievePriceRange() {
    return this.price;
  }
  get retrievePhones() {
    return this.phones;
  }
  get dataRetrieved() {
    return this.initial_data_retrieved;
  }
}
