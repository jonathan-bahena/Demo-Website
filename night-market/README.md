# Capital City Card Show — demo event site

A Vite + React demo for a trading card show where dealers book tables and attendees
come to buy, sell, and trade. All copy, prices, and the checkout flow are hard-coded
placeholders.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Pages

- **Home** — promotes the show, with two ticket-stub CTAs: *Buy tickets* (attendees) and *Book a table* (dealers)
- **Tickets** — three floor-pass options with quantity steppers
- **Dealer tables** — Regular ($200) and Premium ($375) table options
- **Checkout** — order summary + fake payment form; "Place order" just shows a confirmation (nothing is charged or stored)

## Where to edit things

- Prices, names, and perks: `TICKETS` and `TABLES` arrays at the top of `src/App.jsx`
- Colors and fonts: CSS variables at the top of `src/index.css`
- Navigation is simple state-based routing in `App.jsx` — easy to swap for `react-router-dom` later
