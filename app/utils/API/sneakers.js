import requests from "@utils/requests";

const rootURL = "sneakers";

const SneakersApi = {
  getPagedListSneakers,
};

async function getPagedListSneakers(payload) {
  const url = `${rootURL}`;

  return requests.get(url, payload);
}

export default SneakersApi;
