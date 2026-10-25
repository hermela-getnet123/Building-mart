
const categories = [
  {
    name: "Cement",
    slug: "cement",
    icon: "▥",
    count: "Building essentials",
  },
  {
    name: "Iron & Steel",
    slug: "iron-and-steel",
    icon: "⚒",
    count: "Strong foundations",
  },
  {
    name: "Sand & Aggregate",
    slug: "sand-and-aggregate",
    icon: "◈",
    count: "Quality materials",
  },
  {
    name: "Blocks & Bricks",
    slug: "blocks-and-bricks",
    icon: "▦",
    count: "Build with confidence",
  },
  {
    name: "Electrical",
    slug: "electrical",
    icon: "ϟ",
    count: "Wires, bulbs & more",
  },
  {
    name: "Plumbing",
    slug: "plumbing",
    icon: "♧",
    count: "Pipes and fittings",
  },
  {
    name: "Ceramics & Tiles",
    slug: "ceramics-and-tiles",
    icon: "▧",
    count: "Beautiful finishes",
  },
  {
    name: "Glass",
    slug: "glass",
    icon: "▤",
    count: "Clear possibilities",
  },
  {
    name: "Gypsum",
    slug: "gypsum",
    icon: "▱",
    count: "Ceilings and walls",
  },
  {
    name: "Paint & Finishes",
    slug: "paint-and-finishes",
    icon: "◉",
    count: "Add your colors",
  },
  {
    name: "Doors & Windows",
    slug: "doors-and-windows",
    icon: "▣",
    count: "Style and security",
  },
  {
    name: "Roofing",
    slug: "roofing",
    icon: "⌂",
    count: "Protection for every home",
  },
  {
    name: "Sanitary Ware",
    slug: "sanitary-ware",
    icon: "♧",
    count: "Sinks and toilets",
  },
  {
    name: "Furniture",
    slug: "furniture",
    icon: "▤",
    count: "Complete your spaces",
  },
  {
    name: "Quartz & Stone",
    slug: "quartz-and-stone",
    icon: "◆",
    count: "Premium surfaces",
  },
  {
    name: "Timber & Wood",
    slug: "timber-and-wood",
    icon: "▥",
    count: "Wood for every project",
  },
  {
    name: "Tools & Safety",
    slug: "tools-and-safety",
    icon: "⚙",
    count: "Work safely",
  },
  {
    name: "Soil & Landscaping",
    slug: "soil-and-landscaping",
    icon: "♣",
    count: "Prepare your site",
  },
];

const products = [
  {
    name: "Quality Cement",
    category: "Cement & Concrete",
    price: "Request a quote",
    image:
      "https://images.unsplash.com/photo-1513467655676-561b7d489a88?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Steel Reinforcement",
    category: "Iron & Steel",
    price: "Request a quote",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Modern Floor Tiles",
    category: "Ceramics & Tiles",
    price: "Request a quote",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Construction Materials",
    category: "Building Essentials",
    price: "Explore suppliers",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80",
  },
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#">
          <span className="brand-icon">B</span>
          BuildMart<span className="brand-dot">.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#categories">Materials</a>
          <a href="#featured">Featured</a>
          <a href="#suppliers">Suppliers</a>
        </nav>

        <a className="nav-button" href="#categories">
          Explore Materials <span>↗</span>
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">
            YOUR CONSTRUCTION MARKETPLACE
          </span>

          <h1>
            Build your vision.
            <br />
            <span>We source the rest.</span>
          </h1>

          <p>
            Discover construction materials, compare suppliers,
            and find everything your next project needs in one place.
          </p>

          <form className="search-box" action="#categories">
            <span className="search-icon">⌕</span>
            <input
              type="search"
              name="search"
              placeholder="What materials are you looking for?"
              aria-label="Search construction materials"
            />
            <button type="submit">Search Materials</button>
          </form>

          <div className="hero-notes">
            <span>✓ Multiple suppliers</span>
            <span>✓ Wide material selection</span>
            <span>✓ Delivery-focused</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image" role="img" aria-label="Modern construction project" />
          <div className="floating-card">
            <span className="floating-icon">↗</span>
            <div>
              <strong>Build smarter</strong>
              <p>Materials for every stage</p>
            </div>
          </div>
          <div className="image-caption">
            <span>01 / BUILD SOMETHING GREAT</span>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div>
          <strong>One destination.</strong>
          <span>All your construction needs.</span>
        </div>
        <div>
          <strong>Explore</strong>
          <span>Materials across categories</span>
        </div>
        <div>
          <strong>Discover</strong>
          <span>Companies and suppliers</span>
        </div>
        <div>
          <strong>Plan</strong>
          <span>Your next building project</span>
        </div>
      </section>

      <section className="section categories-section" id="categories">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE OUR CATALOG</span>
            <h2>Everything you need to build.</h2>
            <p>
              From the foundation to the finishing touches,
              find the materials that bring your project to life.
            </p>
          </div>
          <span className="category-total">
            {categories.length} categories
          </span>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <a
              className="category-card"
              href={`/materials/${category.slug}`}
              key={category.name}
            >
              <div className="category-top">
                <span className="category-icon">{category.icon}</span>
                <span className="category-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{category.name}</h3>
              <p>{category.count}</p>
              <span className="card-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="featured-section" id="featured">
        <div className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">HANDPICKED FOR YOUR PROJECT</span>
              <h2>Explore popular materials.</h2>
              <p>
                Start discovering the materials that help bring
                construction projects together.
              </p>
            </div>
            <a className="text-link" href="#categories">
              Browse categories ↗
            </a>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.image} alt={product.name} />
                  <span className="product-tag">Explore</span>
                </div>
                <div className="product-info">
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                  <div className="product-bottom">
                    <span>{product.price}</span>
                    <a
                      href="#categories"
                      aria-label={`Explore ${product.name}`}
                    >
                      ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="supplier-banner" id="suppliers">
        <div>
          <span className="eyebrow">FOR CONSTRUCTION BUSINESSES</span>
          <h2>Are you a material supplier?</h2>
          <p>
            Connect your business with customers searching for
            construction materials.
          </p>
        </div>
        <a href="mailto:info@buildmart.example">
          Become a supplier <span>↗</span>
        </a>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-icon">B</span>
          BuildMart<span className="brand-dot">.</span>
        </a>
        <p>Building better connections, one material at a time.</p>
        <span>© {new Date().getFullYear()} BuildMart. Project prototype.</span>
      </footer>
    </main>
  );
}
