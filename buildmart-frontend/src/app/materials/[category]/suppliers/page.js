
import Link from "next/link";

const suppliersByCategory = {
  cement: [
    {
      slug: "dangote",
      name: "Dangote Cement",
      description: "Cement products for residential and commercial construction.",
      location: "Sample location",
      products: "3 product types",
    },
    {
      slug: "national-cement",
      name: "National Cement",
      description: "Cement options for a variety of building projects.",
      location: "Sample location",
      products: "4 product types",
    },
    {
      slug: "habesha-cement",
      name: "Habesha Cement",
      description: "Cement supplies for building and infrastructure projects.",
      location: "Sample location",
      products: "2 product types",
    },
  ],
};

export default async function SuppliersPage({ params }) {
  const { category } = await params;

  const suppliers = suppliersByCategory[category] || [];

  const categoryName = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="suppliers-page">
      <div className="suppliers-container">
        <Link href={`/materials/${category}`} className="back-link">
          ← Back to {categoryName}
        </Link>

        <div className="suppliers-heading">
          <p className="eyebrow">BUILD MART MARKETPLACE</p>
          <h1>{categoryName} Suppliers</h1>
          <p>
            Compare suppliers, explore their products, and find materials
            for your construction project.
          </p>
        </div>

        {suppliers.length > 0 ? (
          <div className="supplier-grid">
            {suppliers.map((supplier) => (
              <article className="supplier-card" key={supplier.slug}>
                <div className="supplier-icon">🏢</div>

                <h2>{supplier.name}</h2>
                <p className="supplier-description">
                  {supplier.description}
                </p>

                <div className="supplier-details">
                  <span>📍 {supplier.location}</span>
                  <span>📦 {supplier.products}</span>
                </div>

                <Link
                  href={`/materials/${category}/suppliers/${supplier.slug}`}
                  className="supplier-button"
                >
                  View products →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-suppliers">
            <h2>Suppliers coming soon</h2>
            <p>
              We haven't added suppliers for this category yet.
              Check back as the marketplace grows.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
