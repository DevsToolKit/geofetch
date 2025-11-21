# geofetch

A lightweight, zero-dependency utility to fetch **countries**, **states**, and **districts** via a CDN-based JSON data source.

This package fetches global geographic data directly from GitHub (via jsDelivr CDN), providing an easy-to-use, dynamic, version-safe, and lightweight solution for frontend and backend developers.

---

## 🚀 Features

- 🌍 Fetch **countries**, **states**, and **districts**
- ⚡ CDN-delivered JSON data (jsDelivr)
- 🧩 Zero dependencies
- 🔄 Automatic in-memory caching
- 🎯 Works in both **Node.js** and **Browser**
- 🔧 Customizable data source using `setBaseUrl()`

---

## 📦 Installation

```bash
npm install geofetch
# or
yarn add geofetch
# or
pnpm add geofetch
```

---

## 🧠 Default Data Source

By default, geofetch retrieves data from:

```
https://cdn.jsdelivr.net/gh/DevsToolKit/geofetch@main/data
```

You may customize this using:

```ts
import { setBaseUrl } from "geofetch";

setBaseUrl("https://your-cdn-or-endpoint/data");
```

---

## 🛠 Usage

### Fetch all countries

```ts
import { getCountries } from "geofetch";

const countries = await getCountries();
console.log(countries);
```

### Fetch country by code

```ts
import { getCountryByCode } from "geofetch";

const india = await getCountryByCode("IN");
```

### Search countries

```ts
import { searchCountries } from "geofetch";

const results = await searchCountries("uni");
```

### Find by dial code

```ts
import { findByDialCode } from "geofetch";

const country = await findByDialCode("+91");
```

### Fetch states

```ts
import { getStates } from "geofetch";

const states = await getStates("IN");
```

### Fetch districts

```ts
import { getDistricts } from "geofetch";

const districts = await getDistricts("IN", "MH");
```

---

## 📁 Project Structure

```
geofetch/
│
├── src/
│   ├── api.ts
│   ├── config.ts
│   ├── fetch.ts
│   ├── index.ts
│   └── types.ts
│
└── data/          <-- Not included in npm package
    ├── countries.json
    ├── states/
    └── districts/
```

---

## 🏗 Customizing Base URL

Useful if you want to host your own geo database:

```ts
setBaseUrl("https://custom-host.com/geo-data");
```

This allows enterprises or private systems to self-host.

---

## 📄 License

MIT License © Piyush

---

## 🧵 Keywords (for npm & SEO)

```
geofetch
geo
geodata
country data
state data
district data
world data
location data
geography api
country api
state api
district api
jsdelivr geo
geographic dataset
```

---

## 🤝 Contributing

See the **CONTRIBUTING.md** file for details.
