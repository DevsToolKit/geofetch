// Default : Points to THIS repo's data folder on GitHub

export let BASE_URL =
  "https://raw.githubusercontent.com/DevsToolKit/geofetch/main/data";

export function setBaseUrl(url: string) {
  BASE_URL = url.replace(/\/$/, "");
}
