import { $axios } from "@/plugins/index";

export default class UrlShortenerService {
  // TODO: get from cookies
  // get from cookies
  static shortList() {}

  // body params
  static shorten(params) {
    console.log(params);

    return $axios.post("/api/v1/link/shorten", params);
  }

  // body params
  static expand(params) {
    return $axios.post("/api/v1/link/expand", params);
  }

  // query params
  static stats(params) {
    return $axios.get("/api/v1/link/stats", { params: params });
  }

  // body params
  static update(params) {
    return $axios.put("/api/v1/link", params);
  }

  // body params
  static delete(params) {
    return $axios.delete("/api/v1/link", { data: params });
  }
}
