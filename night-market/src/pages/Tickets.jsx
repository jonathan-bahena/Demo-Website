import { TICKETS } from '../App.jsx'
import TicketCard from '../components/TicketCard.jsx'
import TallyBar from '../components/TallyBar.jsx'

export default function Tickets({ cart, setQty, subtotal, go }) {
  return (
    <main>
      <div className="wrap page-head">
        <button className="back-link" onClick={() => go('home')}>← Back to show</button>
        <span className="eyebrow">Attendee admission</span>
        <h1 className="page-title">Pick your pass</h1>
        <p className="page-intro">
          All passes are good for the full day, June 27 from 9 AM to 5 PM, including the
          dealer aisles and open trade floor. Kids under 12 get in free with any pass.
        </p>
      </div>
      <div className="wrap card-grid">
        {TICKETS.map((t) => (
          <TicketCard key={t.id} item={t} qty={cart[t.id] || 0} setQty={setQty} />
        ))}
      </div>
      <TallyBar subtotal={subtotal} go={go} />
    </main>
  )
}
