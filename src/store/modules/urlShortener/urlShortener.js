import { UrlShortenerService } from "@/services/index";

import { idGenerator } from "@/utils/index";

import {
  GET_URL_LIST,
  GET_URL_STATS,
  ADD_SHORT_URL,
  DELETE_SHORT_URL,
  UPDATE_SHORT_URL,
  ADD_SHORT_URL_STATS,
  // SHORT_URL_LIST,
  URL_TO_SHORTEN,
  URL_TO_UPDATE,
  URL_TO_DELETE,
  SHORT_URL_STATS,
  DELETE_URL_LIST,
  URL_LIST_TO_DELETE,
  // URL_TO_EXPAND,
} from "./constants";

export default {
  namespaced: true,
  state: {
    // {id, url, shortUrl}
    urlList: [],
    shortUrlStats: {},
  },
  getters: {
    [GET_URL_LIST](state) {
      return state.urlList;
    },
    [GET_URL_STATS](state) {
      return state.shortUrlStats;
    },
  },
  mutations: {
    // add to top
    [ADD_SHORT_URL](state, newUrl) {
      state.urlList.unshift(newUrl);
    },
    [DELETE_SHORT_URL](state, data) {
      const index = state.urlList.findIndex((url) => url.id === data.id);
      state.urlList.splice(index, 1);
    },
    [UPDATE_SHORT_URL](state, newUrl) {
      const oldUrl = state.urlList.find((url) => url.id === newUrl.id);
      Object.assign(oldUrl, newUrl);
    },
    [ADD_SHORT_URL_STATS](state, item) {
      state.shortUrlStats = item;
    },
    [DELETE_URL_LIST](state) {
      state.urlList = [];
      state.shortUrlStats = {};
    },
  },
  actions: {
    // async [SHORT_URL_LIST]({ commit }, modalData) {},
    async [URL_TO_SHORTEN]({ commit }, urlObject) {
      try {
        const { data } = await UrlShortenerService.shorten(urlObject);

        let generatedId = idGenerator();

        let newUrlObject = {
          id: generatedId,
          ...urlObject,
          shortUrl: data.shortUrl,
        };

        await commit(ADD_SHORT_URL, newUrlObject);
      } catch (error) {
        throw error.response.data;
      }
    },
    async [URL_TO_UPDATE]({ commit }, modalData) {
      try {
        // console.log("URL_TO_UPDATE modalData ", modalData);

        const { data } = await UrlShortenerService.update(modalData);

        let newUrlObject = {
          ...modalData,
          shortUrl: data.shortUrl,
        };

        await commit(UPDATE_SHORT_URL, newUrlObject);
      } catch (error) {
        throw error.response.data;
      }
    },
    async [URL_TO_DELETE]({ commit }, item) {
      // console.log(item);
      try {
        await UrlShortenerService.delete(item);

        await commit(DELETE_SHORT_URL, item);
      } catch (error) {
        throw error.response.data;
      }
    },

    async [SHORT_URL_STATS]({ commit }, item) {
      try {
        const { data } = await UrlShortenerService.stats(item);

        console.log(data);

        await commit(ADD_SHORT_URL_STATS, data);
      } catch (error) {
        throw error.response.data;
      }
    },
    [URL_LIST_TO_DELETE]({ commit }) {
      commit(DELETE_URL_LIST);
    },
  },
};
