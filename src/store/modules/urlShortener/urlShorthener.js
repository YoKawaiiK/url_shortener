import { UrlShortenerService } from "@/services/index";

import { idGenerator } from "@/utils/index";

import {
  GET_All_URL,
  ADD_SHORT_URL,
  DELETE_SHORT_URL,
  UPDATE_SHORT_URL,
  SHORT_URL_LIST,
  URL_TO_SHORTEN,
  URL_TO_UPDATE,
  URL_TO_DELETE,

  // URL_TO_EXPAND,
  // GET_URL_STATS
} from "./constansts";

export default {
  namespaced: true,
  state: {
    // {id, url, shortUrl}
    urlList: [],
  },
  getters: {
    [GET_All_URL](state) {
      return state.urlList;
    },
  },
  mutations: {
    // add to top
    [ADD_SHORT_URL](state, newUrl) {
      state.urlList.unshift(newUrl);
    },
    [DELETE_SHORT_URL](state, id) {
      const index = state.urlList.findIndex((url) => url.id === id);
      state.urlList.splice(index, 1);
    },
    [UPDATE_SHORT_URL](state, newUrl) {
      const oldUrl = state.urlList.find((url) => url.id === newUrl.id);
      Object.assign(oldUrl, newUrl);
    },
  },
  actions: {
    // async [SHORT_URL_LIST]({ commit }, modalData) {},
    async [URL_TO_SHORTEN]({ commit, state }, modalData) {
      try {
        const { data } = UrlShortenerService.shorten(modalData);

        console.log(data);

        let generatedId = idGenerator();

        let newUrlObject = {
          id: generatedId,
          url: modalData.url,
          shortUrl: data.shortUrl,
        };

        await commit(ADD_SHORT_URL, newUrlObject);
      } catch (error) {
        throw error.response.data;
      }
    },
    async [URL_TO_UPDATE]({ commit }, modalData) {
      try {
        const { data } = await UrlShortenerService.update(modalData);

        // TODO: correct method
        await commit(UPDATE_SHORT_URL, data);
      } catch (error) {
        throw error.response.data;
      }
    },
    async [URL_TO_DELETE]({ commit, state }, id) {
      try {
        const data = state.urlList.findIndex((url) => url.id === id);

        await UrlShortenerService.delete(data.shortUrl);

        await commit(DELETE_SHORT_URL, id);
      } catch (error) {
        throw error.response.data;
      }
    },
  },
};
