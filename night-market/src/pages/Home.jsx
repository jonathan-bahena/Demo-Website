export default function Home({ go }) {
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <div className="hero-eyebrow-row">
            <span className="eyebrow">Sat · June 27, 2026</span>
            <span className="eyebrow">9 AM — 5 PM</span>
            <span className="eyebrow">Metro Expo Center</span>
          </div>
          <h1>
            One floor.<br />
            A hundred dealers.<br />
            <em>Buy, sell, trade.</em>
          </h1>
          <p className="hero-sub">
            Capital City Card Show fills the Metro Expo Center for a full day of dealer
            tables, an open trade floor, live breaks, and on-site grading intake — sports,
            Pokémon, Magic, and everything in between.
          </p>

          <div className="cta-row">
            <button className="stub stub--gold" onClick={() => go('tickets')}>
              <span className="stub-admit">Admit one</span>
              <span className="stub-kicker">For attendees</span>
              <span className="stub-title">Buy tickets</span>
              <span className="stub-meta">Floor passes from $15 · kids under 12 free</span>
            </button>
            <button className="stub stub--coral" onClick={() => go('tables')}>
              <span className="stub-admit">Dealer</span>
              <span className="stub-kicker">For dealers & sellers</span>
              <span className="stub-title">Book a table</span>
              <span className="stub-meta">Regular & premium tables from $200</span>
            </button>
          </div>
        </div>
      </section>

      <section className="facts" aria-label="Event details">
        <div className="wrap facts-grid">
          <div className="fact">
            <p className="fact-label">Dealers</p>
            <p className="fact-value">120+ tables</p>
          </div>
          <div className="fact">
            <p className="fact-label">Singles</p>
            <p className="fact-value">2M+ cards</p>
          </div>
          <div className="fact">
            <p className="fact-label">Breaks</p>
            <p className="fact-value">Live all day</p>
          </div>
          <div className="fact">
            <p className="fact-label">Grading</p>
            <p className="fact-value">On-site intake</p>
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="wrap">
          <span className="eyebrow">What's on the floor</span>
          <h2 className="page-title">Everything you came to hunt for</h2>
          <div className="highlights-grid">
            <article className="hl-card">
              <span className="hl-emoji" aria-hidden="true">🃏</span>
              <h3>The Trade Floor</h3>
              <p>
                Open trade tables in the center of the hall — bring your binders and make
                deals all day, no dealer table required.
              </p>
            </article>
            <article className="hl-card">
              <span className="hl-emoji" aria-hidden="true">🛒</span>
              <h3>Dealer Aisles</h3>
              <p>
                120+ tables of singles, sealed product, slabs, and vintage. Sports, Pokémon,
                Magic, and more under one roof.
              </p>
            </article>
            <article className="hl-card">
              <span className="hl-emoji" aria-hidden="true">📦</span>
              <h3>Live Breaks</h3>
              <p>
                Box and case breaks running all day at the break stage. Grab a slot and watch
                it ripped live.
              </p>
            </article>
            <article className="hl-card">
              <span className="hl-emoji" aria-hidden="true">🏆</span>
              <h3>Grading Intake</h3>
              <p>
                Drop off cards for grading on-site with our partner graders and skip the
                mail-in wait.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
