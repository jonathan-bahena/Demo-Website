export default function TicketCard({ item, qty, setQty }) {
  return (
    <article className={`tcard ${item.id === 'premium' ? 'tcard--premium' : ''}`}>
      {item.flag && <span className="tcard-flag">{item.flag}</span>}
      <div className="tcard-body">
        <p className="tcard-kind">{item.kind}</p>
        <h3>{item.name}</h3>
        <p className="tcard-desc">{item.desc}</p>
        <ul className="tcard-perks">
          {item.perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
      </div>
      <div className="tcard-stub">
        <p className="tcard-price">
          ${item.price}
          <small>{item.kind.toLowerCase().includes('table') ? 'per table' : 'per pass'}</small>
        </p>
        <div className="qty" role="group" aria-label={`${item.name} quantity`}>
          <button onClick={() => setQty(item.id, qty - 1)} disabled={qty === 0} aria-label="Decrease">
            −
          </button>
          <span className="qty-n" aria-live="polite">{qty}</span>
          <button onClick={() => setQty(item.id, qty + 1)} aria-label="Increase">
            +
          </button>
        </div>
      </div>
    </article>
  )
}
