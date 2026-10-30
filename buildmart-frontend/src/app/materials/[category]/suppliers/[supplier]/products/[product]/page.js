
"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const products = {
  "ordinary-portland-cement": {
    name: "Ordinary Portland Cement",
    supplier: "Dangote Cement",
    description:
      "A general-purpose cement product for suitable construction applications.",
    price: 850,
    unit: "50 kg bag",
    specifications: [
      "Product type: Ordinary Portland Cement",
      "Packaging: 50 kg bag",
      "Supplier: Dangote Cement",
      "Availability: Sample listing",
    ],
  },
  "portland-pozzolana-cement": {
    name: "Portland Pozzolana Cement",
    supplier: "Dangote Cement",
    description:
      "A blended cement product for suitable building and construction applications.",
    price: 800,
    unit: "50 kg bag",
    specifications: [
      "Product type: Portland Pozzolana Cement",
      "Packaging: 50 kg bag",
      "Supplier: Dangote Cement",
      "Availability: Sample listing",
    ],
  },
  "bulk-cement": {
    name: "Bulk Cement",
    supplier: "Dangote Cement",
    description:
      "Bulk cement listing for larger construction requirements.",
    price: 15000,
    unit: "tonne",
    specifications: [
      "Product type: Bulk Cement",
      "Packaging: Bulk",
      "Supplier: Dangote Cement",
      "Availability: Sample listing",
    ],
  },
};

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const { category, supplier, product } = params;
  const item = products[product];

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!item) {
    return (
      <main className="product-details-page">
        <h1>Product not found</h1>
        <Link href={`/materials/${category}/suppliers/${supplier}`}>
          Back to supplier
        </Link>
      </main>
    );
  }

  const total = item.price * quantity;

  function addToCart() {
    const existingCart = JSON.parse(
      localStorage.getItem("buildmart-cart") || "[]"
    );

    const cartItem = {
      id: `${supplier}-${product}`,
      name: item.name,
      supplier: item.supplier,
      category,
      price: item.price,
      unit: item.unit,
      quantity,
    };

    const existingIndex = existingCart.findIndex(
      (entry) => entry.id === cartItem.id
    );

    if (existingIndex >= 0) {
      existingCart[existingIndex].quantity += quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem("buildmart-cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event("cartUpdated"));
    setAdded(true);
  }

  return (
    <main className="product-details-page">
      <div className="product-details-container">
        <nav className="product-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href={`/materials/${category}`}>
            {category.replaceAll("-", " ")}
          </Link>
          <span>/</span>
          <Link href={`/materials/${category}/suppliers`}>
            Suppliers
          </Link>
          <span>/</span>
          <Link href={`/materials/${category}/suppliers/${supplier}`}>
            {item.supplier}
          </Link>
          <span>/</span>
          <span>{item.name}</span>
        </nav>

        <section className="product-details-layout">
          <div className="product-details-image">
            <span>▦</span>
            <p>Product image</p>
          </div>

          <div className="product-details-info">
            <p className="product-eyebrow">BUILD MART PRODUCT</p>
            <h1>{item.name}</h1>
            <p className="product-supplier">
              Sold by: <strong>{item.supplier}</strong>
            </p>

            <p className="product-description">{item.description}</p>

            <div className="product-detail-price">
              <strong>{item.price.toLocaleString()} ETB</strong>
              <span>per {item.unit}</span>
              <small>Demonstration price — not a verified market price.</small>
            </div>

            <div className="quantity-control">
              <label htmlFor="quantity">Quantity ({item.unit})</label>

              <div className="quantity-buttons">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  −
                </button>

                <span>{quantity}</span>

                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="product-total">
              <span>Total</span>
              <strong>{total.toLocaleString()} ETB</strong>
            </div>

            <button
              type="button"
              className="add-cart-button"
              onClick={addToCart}
            >
              Add to Cart
            </button>

            {added && (
              <div className="cart-success">
                Added to your cart successfully!
                <button type="button" onClick={() => router.push("/cart")}>
                  View Cart →
                </button>
              </div>
            )}

            <Link
              href={`/materials/${category}/suppliers/${supplier}`}
              className="product-back-link"
            >
              ← Back to {item.supplier}
            </Link>
          </div>
        </section>

        <section className="product-specifications">
          <h2>Product Specifications</h2>
          <ul>
            {item.specifications.map((specification) => (
              <li key={specification}>{specification}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
