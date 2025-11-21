const cache = new Map<string, unknown>();

export async function fetchJson<T>(url: string): Promise<T> {
  if (cache.has(url)) {
    return cache.get(url) as T;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }

  const json = (await res.json()) as T;
  cache.set(url, json);
  return json;
}
