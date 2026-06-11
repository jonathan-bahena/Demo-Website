export default function Nav({ page, go, cartCount }) {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <button className="nav-mark" onClick={() => go('home')} aria-label="Capital City Card Show home">
          <span className="nav-lantern" aria-hidden="true" />
          <span className="nav-name">Capital City Card Show</span>
        </button>
        <nav className="nav-links" aria-label="Main">
          <button
            className={`nav-link nav-link--hide-sm ${page === 'tickets' ? 'is-active' : ''}`}
            onClick={() => go('tickets')}
          >
            Tickets
          </button>
          <button
            className={`nav-link nav-link--hide-sm ${page === 'tables' ? 'is-active' : ''}`}
            onClick={() => go('tables')}
          >
            Dealer tables
          </button>
          <button
            className={`nav-link nav-cart ${page === 'checkout' ? 'is-active' : ''}`}
            onClick={() => go('checkout')}
          >
            Checkout
            {cartCount > 0 && <span className="nav-cart-count">{cartCount}</span>}
          </button>
        </nav>
      </div>
    </header>
  )
}
