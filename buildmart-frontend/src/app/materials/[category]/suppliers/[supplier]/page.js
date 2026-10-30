
import Link from "next/link";

const supplierData = {
  dangote: {
    name: "Dangote Cement",
    location: "Sample location",
    description:
      "Explore cement options for residential, commercial, and other construction projects.",
    initials: "DC",
    products: [
      {
        id: 1,
        name: "Ordinary Portland Cement",
        specification: "General construction use",
        price: "Price on request",
        unit: "Per bag",
      },
      {
        id: 2,
        name: "Portland Pozzolana Cement",
        specification: "For suitable general building applications",
        price: "Price on request",
        unit: "Per bag",
      },
      {
        id: 3,
        name: "Bulk Cement",
        specification: "For larger construction requirements",
        price: "Price on request",
        unit: "Per tonne",
      },
    ],
  },

  "national-cement": {
    name: "National Cement",
    location: "Sample location",
    description:
      "Browse cement options for different building and construction needs.",
    initials: "NC",
    products: [
      {
        id: 1,
        name: "General Purpose Cement",
        specification: "For common building applications",
        price: "Price on request",
        unit: "Per bag",
      },
      {
        id: 2,
        name: "Masonry Cement",
        specification: "For suitable masonry work",
        price: "Price on request",
        unit: "Per bag",
      },
    ],
  },

  "habesha-cement": {
    name: "Habesha Cement",
    location: "Sample location",
    description:
      "Explore cement products for building and infrastructure projects.",
    initials: "HC",
    products: [
      {
        id: 1,
        name: "Portland Cement",
        specification: "For suitable construction applications",
        price: "Price on request",
        unit: "Per bag",
      },
      {
        id: 2,
        name: "Blended Cement",
        specification: "Check product specifications with the supplier",
        price: "Price on request",
        unit: "Per bag",
      },
    ],
  },
};

export default async function SupplierPage({ params }) {
  const { category, supplier } = await params;

  const company = supplierData[supplier];

  const categoryName = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (!company) {
    return (
      <main className="supplier-store">
        <div className="store-container">
          <h1>Supplier not found</h1>
          <p>This supplier page is not available yet.</p>
          <Link
            href={`/materials/${category}/suppliers`}
            className="store-back-link"
          >
            ← Back to {categoryName} suppliers
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="supplier-store">
      <div className="store-container">
        <nav className="store-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href={`/materials/${category}`}>{categoryName}</Link>
          <span>/</span>
          <Link href={`/materials/${category}/suppliers`}>Suppliers</Link>
          <span>/</span>
          <span>{company.name}</span>
        </nav>

        <section className="store-profile">
          <div className="store-logo">{company.initials}</div>

          <div className="store-profile-info">
            <p className="store-eyebrow">BUILD MART SUPPLIER</p>
            <h1>{company.name}</h1>
            <p>{company.description}</p>
            <span className="store-location">
              📍 {company.location}
            </span>
          </div>
        </section>

        <div className="store-heading">
          <div>
            <p className="store-eyebrow">SUPPLIER CATALOG</p>
            <h2>{categoryName} Products</h2>
          </div>
          <span className="product-count">
            {company.products.length} products
          </span>
        </div>

        <section className="store-product-grid">
          {company.products.map((product) => (
            <article className="store-product-card" key={product.id}>
              <div className="store-product-visual">
                <span>▦</span>
                <small>{categoryName}</small>
              </div>

              <div className="store-product-content">
                <h3>{product.name}</h3>
                <p>{product.specification}</p>

                <div className="store-price">
                  <strong>{product.price}</strong>
                  <span>{product.unit}</span>
                </div>

                <Link
                  href="#contact"
                  className="store-product-button"
                >
                  Ask about this product
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="store-contact" id="contact">
          <div>
            <p className="store-eyebrow">HAVE A QUESTION?</p>
            <h2>Interested in ordering?</h2>
            <p>
              Contact details and quote requests will be connected when
              supplier accounts are implemented.
            </p>
          </div>

          <Link
            href={`/materials/${category}/suppliers`}
            className="store-secondary-button"
          >
            Browse other suppliers
          </Link>
        </section>

        <Link
          href={`/materials/${category}/suppliers`}
          className="store-back-link"
        >
          ← Back to all {categoryName} suppliers
        </Link>
      </div>
    </main>
  );
}
