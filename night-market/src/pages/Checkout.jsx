import { useState } from 'react'

export default function Checkout({ items, subtotal, clearCart, go }) {
  const [placed, setPlaced] = useState(false)
  const fees = items.length ? Math.round(subtotal * 0.05) : 0
  const total = subtotal + fees

  if (placed) {
    return (
      <main className="wrap confirm">
        <div className="confirm-lantern" aria-hidden="true" />
        <span className="eyebrow">Order placed (demo)</span>
        <h1 className="page-title">See you on the floor</h1>
        <p className="page-intro" style={{ margin: '0 auto 28px' }}>
          This is a demo, so nothing was actually charged — but in the real thing,
          your passes would be on their way to your inbox right now.
        </p>
        <button
          className="btn btn--gold"
          onClick={() => {
            clearCart()
            setPlaced(false)
            go('home')
          }}
        >
          Back to the event
        </button>
      </main>
    )
  }

  return (
    <main>
      <div className="wrap page-head">
        <button className="back-link" onClick={() => go('home')}>← Back to show</button>
        <span className="eyebrow">Checkout</span>
        <h1 className="page-title">Almost there</h1>
      </div>

      {items.length === 0 ? (
        <div className="wrap">
          <div className="empty-cart">
            <h2 className="page-title" style={{ fontSize: '1.4rem' }}>Your cart is empty</h2>
            <p>Add a pass or a vendor table and it will show up here.</p>
            <button className="btn btn--gold" onClick={() => go('tickets')} style={{ marginRight: 10 }}>
              Browse tickets
            </button>
            <button className="btn btn--ghost" onClick={() => go('tables')}>
              Browse tables
            </button>
          </div>
        </div>
      ) : (
        <div className="wrap checkout-grid">
          <section className="co-panel" aria-label="Contact and payment">
            <h2>Your details</h2>
            <div className="field-row">
              <div className="field">
                <label htmlFor="co-first">First name</label>
                <input id="co-first" placeholder="Jordan" />
              </div>
              <div className="field">
                <label htmlFor="co-last">Last name</label>
                <input id="co-last" placeholder="Rivera" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="co-email">Email</label>
              <input id="co-email" type="email" placeholder="jordan@example.com" />
            </div>
            <h2 style={{ marginTop: 26 }}>Payment</h2>
            <div className="field">
              <label htmlFor="co-card">Card number</label>
              <input id="co-card" inputMode="numeric" placeholder="4242 4242 4242 4242" />
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="co-exp">Expiry</label>
                <input id="co-exp" placeholder="MM / YY" />
              </div>
              <div className="field">
                <label htmlFor="co-cvc">CVC</label>
                <input id="co-cvc" inputMode="numeric" placeholder="123" />
              </div>
            </div>
            <p className="demo-note">
              Demo checkout — nothing is validated, stored, or charged.
            </p>
          </section>

          <aside className="co-panel" aria-label="Order summary">
            <h2>Order summary</h2>
            {items.map((i) => (
              <div className="order-line" key={i.id}>
                <span>
                  {i.name} <span className="muted">× {i.qty}</span>
                </span>
                <span>${i.price * i.qty}</span>
              </div>
            ))}
            <div className="order-line">
              <span className="muted">Service fee (5%)</span>
              <span>${fees}</span>
            </div>
            <div className="order-line order-line--total">
              <span>Total</span>
              <strong>${total}</strong>
            </div>
            <button
              className="btn btn--gold"
              style={{ width: '100%', marginTop: 18 }}
              onClick={() => setPlaced(true)}
            >
              Place order — ${total}
            </button>
          </aside>
        </div>
      )}
    </main>
  )
}
