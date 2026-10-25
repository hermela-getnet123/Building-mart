
const materials = {
  cement: {
    name: "Cement",
    description:
      "Find cement suppliers and compare products for foundations, walls, and other construction work.",
    products: ["Ordinary Portland Cement", "Portland Pozzolana Cement", "White Cement", "Ready-Mix Concrete"],
  },
  "iron-and-steel": {
    name: "Iron & Steel",
    description:
      "Explore reinforcement bars, structural steel, metal sheets, and other construction steel products.",
    products: ["Reinforcement Bars", "Structural Steel", "Steel Sheets", "Wire Rods"],
  },
  "sand-and-aggregate": {
    name: "Sand & Aggregate",
    description:
      "Discover sand, gravel, and aggregates for concrete, masonry, and site preparation.",
    products: ["Fine Sand", "Coarse Sand", "Gravel", "Crushed Stone"],
  },
  "blocks-and-bricks": {
    name: "Blocks & Bricks",
    description:
      "Explore masonry materials for walls, partitions, and other building structures.",
    products: ["Hollow Blocks", "Solid Blocks", "Clay Bricks", "Paving Blocks"],
  },
  electrical: {
    name: "Electrical Materials",
    description:
      "Find electrical cables, installation wires, lighting, switches, and electrical accessories.",
    products: ["Installation Wire", "LED Bulbs", "Switches & Sockets", "Circuit Breakers"],
  },
  plumbing: {
    name: "Plumbing",
    description:
      "Browse pipes, connectors, valves, and water supply materials for construction projects.",
    products: ["PVC Pipes", "PPR Pipes", "Pipe Fittings", "Valves"],
  },
  "ceramics-and-tiles": {
    name: "Ceramics & Tiles",
    description:
      "Explore tiles in different finishes, dimensions, colors, and styles.",
    products: ["Floor Tiles", "Wall Tiles", "Porcelain Tiles", "Mosaic Tiles"],
  },
  glass: {
    name: "Glass",
    description:
      "Find glass products for windows, doors, partitions, facades, and interior design.",
    products: ["Clear Glass", "Tinted Glass", "Frosted Glass", "Tempered Glass"],
  },
  gypsum: {
    name: "Gypsum",
    description:
      "Discover gypsum boards, ceiling materials, and finishing products.",
    products: ["Gypsum Boards", "Ceiling Panels", "Joint Compound", "Corner Beads"],
  },
  "paint-and-finishes": {
    name: "Paint & Finishes",
    description:
      "Explore paints, primers, coatings, dyes, and waterproofing materials.",
    products: ["Interior Paint", "Exterior Paint", "Primer", "Waterproofing"],
  },
  "doors-and-windows": {
    name: "Doors & Windows",
    description:
      "Browse doors and windows in different materials, styles, and dimensions.",
    products: ["Wooden Doors", "Steel Doors", "Aluminum Windows", "Glass Doors"],
  },
  roofing: {
    name: "Roofing",
    description:
      "Discover roofing sheets, roof tiles, gutters, and insulation products.",
    products: ["Corrugated Sheets", "Roof Tiles", "Roof Gutters", "Insulation"],
  },
  "sanitary-ware": {
    name: "Sanitary Ware",
    description:
      "Find bathroom fixtures and fittings for residential and commercial buildings.",
    products: ["Toilets", "Washbasins", "Sinks", "Faucets & Showers"],
  },
  furniture: {
    name: "Furniture",
    description:
      "Explore furniture and storage solutions for homes, offices, and buildings.",
    products: ["Kitchen Cabinets", "Wardrobes", "Office Furniture", "Shelving"],
  },
  "quartz-and-stone": {
    name: "Quartz & Stone",
    description:
      "Browse decorative stone and countertop materials in a variety of finishes.",
    products: ["Quartz Slabs", "Granite", "Marble", "Natural Stone"],
  },
  "timber-and-wood": {
    name: "Timber & Wood",
    description:
      "Discover timber, plywood, boards, and wood products for construction.",
    products: ["Timber", "Plywood", "MDF Boards", "Lumber"],
  },
  "tools-and-safety": {
    name: "Tools & Safety",
    description:
      "Find construction tools and protective equipment for your worksite.",
    products: ["Hand Tools", "Power Tools", "Safety Helmets", "Safety Boots"],
  },
  "soil-and-landscaping": {
    name: "Soil & Landscaping",
    description:
      "Explore soil, landscaping materials, paving, and garden construction supplies.",
    products: ["Topsoil", "Fill Soil", "Paving Materials", "Landscaping Stone"],
  },
};

export default async function MaterialCategoryPage({ params }) {
  const { category } = await params;
  const material = materials[category];

  if (!material) {
    return (
      <main className="category-page">
        <h1>Category not found</h1>
        <p>We couldn't find this material category.</p>
        <a className="back-link" href="/">
          ← Back to homepage
        </a>
      </main>
    );
  }

  return (
    <main className="category-page">
      <a className="back-link" href="/">
        ← Back to BuildMart
      </a>

      <section className="category-hero">
        <span className="eyebrow">BUILDMART MATERIAL DIRECTORY</span>
        <h1>{material.name}</h1>
        <p>{material.description}</p>
      </section>

      <section className="category-content">
        <div className="category-page-heading">
          <div>
            <span className="eyebrow">EXPLORE THE CATEGORY</span>
            <h2>Available product types</h2>
          </div>
          <span>{material.products.length} product types</span>
        </div>

        <div className="material-type-grid">
          {material.products.map((product, index) => (
            <article className="material-type-card" key={product}>
              <span className="material-type-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{product}</h3>
              <p>
                Explore product specifications and discover suppliers
                offering this material.
              </p>
              <span className="material-type-arrow">↗</span>
            </article>
          ))}
        </div>

        <div className="supplier-placeholder">
          <span className="eyebrow">COMING NEXT</span>
          <h2>Discover companies that supply {material.name.toLowerCase()}.</h2>
          <p>
            Our next step will be to build supplier cards and let
            customers open each supplier to explore its products.
          </p>
          <a href="/" className="supplier-back-button">
            Explore other materials
          </a>
        </div>
      </section>
    </main>
  );
}
