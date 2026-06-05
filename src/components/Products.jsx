export default function Products() {
  return (
    <section className="products">
      <h2>Best Sellers</h2>

      <div className="product-grid">

        <div className="product-card">
          <img
            src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Luxury Lipstick"
          />
          <h3>Luxury Lipstick</h3>
          <p>Smooth matte finish with rich color.</p>
        </div>

        <div className="product-card">
          <img
            src="https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Foundation"
          />
          <h3>Foundation</h3>
          <p>Natural coverage for every skin tone.</p>
        </div>

        <div className="product-card">
          <img
            src="https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Blush"
          />
          <h3>Blush</h3>
          <p>Soft glow and long-lasting freshness.</p>
        </div>

        <div className="product-card">
          <img
            src="https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Highlighter"
          />
          <h3>Highlighter</h3>
          <p>Radiant shine that lasts all day.</p>
        </div>

      </div>
    </section>
  );
}