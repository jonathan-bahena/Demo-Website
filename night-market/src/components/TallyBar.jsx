export default function TallyBar({ subtotal, go }) {
  return (
    <div className="tally">
      <div className="wrap tally-inner">
        <p className="tally-sum">
          Subtotal&nbsp; <strong>${subtotal}</strong>
        </p>
        <button className="btn btn--gold" onClick={() => go('checkout')} disabled={subtotal === 0}>
          Continue to checkout →
        </button>
      </div>
    </div>
  )
}
