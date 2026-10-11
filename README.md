<div align="center">

# 🛒 বাজার দর — Bazar Dor

**Daily essential-commodity prices in Bangladesh, at a glance.**

Rice, lentils, oil, vegetables, fish, meat, eggs and spices — with market-wise prices, averages, min/max ranges and day-to-day price changes, all in Bangla.

[![Live Demo](https://img.shields.io/badge/Live-bazardorbd.vercel.app-16a34a?style=for-the-badge&logo=vercel&logoColor=white)](https://bazardorbd.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![daisyUI](https://img.shields.io/badge/daisyUI-5-5A0EF8?logo=daisyui&logoColor=white)

</div>

---

## 📖 About

**Bazar Dor (বাজার দর)** is a Bangla-first price tracker for everyday grocery items. Instead of asking around at the local market, you can open one page and see what today's price is, whether it went up or down compared to yesterday, and how prices differ between markets.

The app is built with the Next.js App Router and React Server Components. Data is fetched on the server and cached, so pages stay fast and light.

## ✨ Features

| | Feature | Description |
|---|---|---|
| 📊 | **Today's price at a glance** | Every product card shows the current price, the unit (kg / litre / dozen / piece) and the price change. |
| 🔺🔻 | **Price up / down sections** | The home page separates items whose price **increased** today from items whose price **decreased**, so changes are easy to spot. |
| 🎞️ | **Live price ticker** | A scrolling marquee under the header shows the latest prices with up/down arrows and percentage change. |
| 🗂️ | **Category browsing** | Category links (with icons) in the header open a dedicated page for each category. |
| ↕️ | **Sort by price** | Inside a category, sort products from low → high or high → low. |
| 🏪 | **Market-wise price table** | The product page lists min, max and average price for each market and division. |
| 📈 | **Market statistics** | Lowest price, highest price and average price are summarised on each product page. |
| 🇧🇩 | **Bangla-first UI** | Bangla numerals (`toLocaleString("bn-BD")`), Bangla unit names, a Bangla date and the Hind Siliguri font. |
| ⚡ | **Fast by design** | Server Components, the `"use cache"` directive, `cacheComponents` and partial prefetching keep navigation quick. |
| 🎨 | **Clean, responsive UI** | A soft green theme built with Tailwind CSS v4 and daisyUI components. |

## 🛠️ Tech Stack

| Area | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Server Components, Cache Components) |
| UI library | [React 19](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + [daisyUI 5](https://daisyui.com) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Ticker | [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee) |
| Fonts | `next/font` — Hind Siliguri (Bangla), Geist Mono |
| Linting | ESLint 9 with `eslint-config-next` |
| Deployment | [Vercel](https://vercel.com) |

## 📁 Project Structure

```
bazar-dor/
├── public/                    # Static assets (logo, icons)
└── src/
    ├── app/
    │   ├── (auth)/            # sign-in, sign-up, profile pages
    │   ├── categorys/[categoryid]/   # Category page (product list + sorting)
    │   ├── products/[slug]/   # Product details (stats + market table)
    │   ├── layout.tsx         # Header, marquee, footer, fonts
    │   ├── loading.tsx        # Global loading UI
    │   └── page.tsx           # Home (price up / down / all products)
    ├── components/
    │   ├── header/            # NavBar, CategoryLink, Marquee
    │   ├── CategoryPage.tsx   # Client component with sort control
    │   ├── ProductCard.tsx
    │   ├── HeroBanner.tsx
    │   └── Footer.tsx
    ├── types/types.tsx        # ICategoryType, IProductType
    └── commonFeatures.ts      # Bangla date, number and unit helpers
```

## 🚀 Getting Started

**Prerequisites:** Node.js 20+ and npm.

```bash
# 1. Clone the repository
git clone https://github.com/nafismahamudshahin/bazar-dor.git
cd bazar-dor

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the code with ESLint |

## 🔌 Data Source

Product and category data is read from a JSON API:

| Endpoint | Returns |
|---|---|
| `GET /api/bazardor/categories` | List of categories (`slug`, `nameBn`, `icon`) |
| `GET /api/bazardor/products` | All products with today / yesterday / last week / last month prices, change and per-market prices |
| `GET /api/bazardor/products?category=<slug>` | Products in one category |

## 🗺️ Roadmap

Ideas for making the project even better:

- [ ] 🔍 Search products by Bangla name
- [ ] 📉 Price history charts (yesterday, last week, last month)
- [ ] 🔔 Price-drop alerts and a favourites list
- [ ] 🌙 Dark mode
- [ ] 📱 Installable PWA with offline support
- [ ] 🧮 Basket calculator to estimate monthly grocery cost
- [ ] 🌐 English / Bangla language toggle

## 👨‍💻 Author

**Nafis Mahamud Shahin**

- GitHub: [@nafismahamudshahin](https://github.com/nafismahamudshahin)
- Portfolio: [nafismahamudshahin.github.io](https://nafismahamudshahin.github.io)

---

<div align="center">

⭐ If you like this project, give it a star!

</div>