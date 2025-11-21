// Default : Points to THIS repo's data folder on GitHub

export let BASE_URL =
  "https://cdn.jsdelivr.net/gh/DevsToolKit/geofetch@main/data";

export function setBaseUrl(url: string) {
  BASE_URL = url.replace(/\/$/, "");
}
