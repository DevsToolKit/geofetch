import { BASE_URL } from "./config";
import { fetchJson } from "./fetch";
import { Country, State, District } from "./types";

/* ---------------------- Countries ---------------------- */

export async function getCountries(): Promise<Country[]> {
  return fetchJson<Country[]>(`${BASE_URL}/countries.json`);
}

export async function getCountryByCode(
  code: string
): Promise<Country | undefined> {
  const normalized = code.toUpperCase();
  const countries = await getCountries();
  return countries.find((c) => c.code === normalized);
}

export async function searchCountries(query: string): Promise<Country[]> {
  const q = query.toLowerCase();
  const countries = await getCountries();
  return countries.filter((c) => c.name.toLowerCase().includes(q));
}

export async function findByDialCode(dialCode: string): Promise<Country[]> {
  const normalized = dialCode.replace(/\s+/g, "");
  const countries = await getCountries();
  return countries.filter((c) => c.dialCode.replace(/\s+/g, "") === normalized);
}

/* ---------------------- States ---------------------- */

export async function getStates(countryCode: string): Promise<State[]> {
  const code = countryCode.toUpperCase();
  return fetchJson<State[]>(`${BASE_URL}/states/${code}.json`);
}

/* ----------------------- Districts --------------------- */

export async function getDistricts(
  countryCode: string,
  stateCode: string
): Promise<District[]> {
  const c = countryCode.toUpperCase();
  const s = stateCode.toUpperCase();
  return fetchJson<District[]>(`${BASE_URL}/districts/${c}/${s}.json`);
}
