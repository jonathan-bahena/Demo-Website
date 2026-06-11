import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Tickets from './pages/Tickets.jsx'
import Tables from './pages/Tables.jsx'
import Checkout from './pages/Checkout.jsx'

/* ------------------------------------------------------------------
   Demo catalog — all hard-coded placeholder data.
   Swap these out for real products / API data later.
------------------------------------------------------------------- */
export const TICKETS = [
  {
    id: 'ga',
    kind: 'General admission',
    name: 'Floor Pass',
    price: 15,
    desc: 'Full-day access to the show floor, dealer aisles, and open trade tables.',
    perks: ['Doors 9 AM to 5 PM', 'All 120+ dealer tables', 'Open trade floor access'],
  },
  {
    id: 'duo',
    kind: 'Bring a friend',
    name: 'Duo Pass',
    price: 25,
    desc: 'Two floor passes bundled — bring a trading partner and split the hunt.',
    perks: ['2 × floor admission', 'Side-by-side entry', 'Save $5 vs. two singles'],
    flag: 'Most popular',
  },
  {
    id: 'vip',
    kind: 'Early entry',
    name: 'Early Access Pass',
    price: 45,
    desc: 'Get on the floor two hours before doors for first pick of fresh inventory.',
    perks: ['Entry at 7 AM, before general', 'First crack at new tables', 'Show-exclusive promo card', 'Re-entry all day'],
  },
]

export const TABLES = [
  {
    id: 'regular',
    kind: 'Dealer table',
    name: 'Regular Table',
    price: 200,
    desc: 'A solid 8 ft spot in the main aisles. Great for first-time sellers.',
    perks: ['8 ft table + 2 chairs', 'Main aisle placement', '2 dealer badges', 'Listing in the show directory'],
  },
  {
    id: 'premium',
    kind: 'Dealer table',
    name: 'Premium Table',
    price: 375,
    desc: 'An endcap spot near the entrance with power and top billing.',
    perks: [
      'Endcap spot, double frontage',
      'Power hookup',
      '4 dealer badges',
      'Featured in show marketing',
      'Early load-in window',
    ],
    flag: 'Best visibility',
  },
]

export default function App() {
  const [page, setPage] = useState('home')
  const [cart, setCart] = useState({}) // { itemId: qty }

  const catalog = [...TICKETS, ...TABLES]
  const cartItems = Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => ({ ...catalog.find((i) => i.id === id), qty }))
  const cartCount = cartItems.reduce((n, i) => n + i.qty, 0)
  const subtotal = cartItems.reduce((n, i) => n + i.qty * i.price, 0)

  const setQty = (id, qty) => setCart((c) => ({ ...c, [id]: Math.max(0, qty) }))
  const clearCart = () => setCart({})

  const go = (p) => {
    setPage(p)
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <Nav page={page} go={go} cartCount={cartCount} />
      {page === 'home' && <Home go={go} />}
      {page === 'tickets' && (
        <Tickets cart={cart} setQty={setQty} subtotal={subtotal} go={go} />
      )}
      {page === 'tables' && (
        <Tables cart={cart} setQty={setQty} subtotal={subtotal} go={go} />
      )}
      {page === 'checkout' && (
        <Checkout items={cartItems} subtotal={subtotal} clearCart={clearCart} go={go} />
      )}
      <Footer />
    </>
  )
}
