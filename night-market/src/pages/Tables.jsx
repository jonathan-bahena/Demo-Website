import { TABLES } from '../App.jsx'
import TicketCard from '../components/TicketCard.jsx'
import TallyBar from '../components/TallyBar.jsx'

export default function Tables({ cart, setQty, subtotal, go }) {
  return (
    <main>
      <div className="wrap page-head">
        <button className="back-link" onClick={() => go('home')}>← Back to show</button>
        <span className="eyebrow">For dealers & sellers</span>
        <h1 className="page-title">Book your table</h1>
        <p className="page-intro">
          Every table includes setup help, overnight security during load-in, and a spot in
          front of 5,000+ collectors. Load-in opens at 7 AM on show day.
        </p>
      </div>
      <div className="wrap card-grid">
        {TABLES.map((t) => (
          <TicketCard key={t.id} item={t} qty={cart[t.id] || 0} setQty={setQty} />
        ))}
      </div>
      <TallyBar subtotal={subtotal} go={go} />
    </main>
  )
}
