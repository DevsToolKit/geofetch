# Contributing to geofetch

Thank you for your interest in contributing! geofetch is a lightweight geography data utility that relies on community-driven geographic datasets. Contributions are welcome for both **code** and **data updates**.

---

## 🧩 How to Contribute

### 1. Fork the Repository

```
https://github.com/DevsToolKit/geofetch
```

Clone your fork:

```bash
git clone https://github.com/<your-username>/geofetch
cd geofetch
```

---

## 🏗 Project Structure

```
geofetch/
│
├── src/               Source code for the npm package
│   ├── api.ts
│   ├── config.ts
│   ├── fetch.ts
│   ├── index.ts
│   └── types.ts
│
└── data/              JSON database used by jsDelivr CDN
    ├── countries.json
    ├── states/
    └── districts/
```

> ⚠ The `data/` folder is **not included** in the npm package.  
> It exists only in the GitHub repository and is served through jsDelivr CDN.

---

## 🌍 Adding or Updating Country / State / District Data

### Adding a Country
Edit:

```
data/countries.json
```

Format:

```json
{
  "code": "IN",
  "name": "India",
  "dialCode": "+91",
  "currency": "INR"
}
```

### Adding States

Add or edit:

```
data/states/<COUNTRY_CODE>.json
```

### Adding Districts

Add files like:

```
data/districts/<COUNTRY_CODE>/<STATE_CODE>.json
```

JSON format:

```json
{
  "countryCode": "IN",
  "stateCode": "MH",
  "name": "Pune"
}
```

---

## 🔧 Running the Build

```bash
npm install
npm run build
```

Output appears in `/dist`.

---

## 🧪 Testing

Currently minimal, tests can be added inside `/test`.

---

## 🔀 Pull Requests

Please follow these rules:

- Use **clear commit messages**
- Keep PRs focused on **one feature/fix**
- Ensure your JSON formats are **valid**
- Ensure the folder structure stays consistent
- Include a description of what changed and why

---

## 📝 Coding Standards

- TypeScript strict mode
- No external dependencies
- Keep the API surface minimal and clear
- Follow existing naming conventions

---

## 🤝 Thank You

Your contributions help improve the global dataset and make this package more reliable and useful.  
Thank you for supporting open source!
