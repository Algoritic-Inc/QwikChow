const products = [
  {
    name: "Dreamline-Lite FX Air Rifles",
    image: "Images/Dreamline-Lite.jpg",
    price: "₱" + 9000,
    soldOut: false,
    description: "Autententic air rifle, PCP powered complete set",
  },
  {
    name: "Royale-500-Black-Pepper",
    image: "Images/11.Royale-500-Black-Pepper.png",
    price: "₱" + 6000,
    soldOut: false,
    description: "Autententic air rifle, PCP powered complete set",
  },
  {
    name: "Typhoon-Walnut FX Air Rifles",
    image: "Images/16.Typhoon-Walnut.png",
    price: "₱" + 5500,
    soldOut: false,
    description: "Autententic air rifle, PCP powered complete set",
  },
  {
    name: "Crown MKII laminat Air Rifles",
    image: "Images/Crown_MKII_laminat_2-1-888x296.png",
    price: "₱" + 6500,
    soldOut: true,
    description: "Autententic air rifle, PCP powered complete set",
  },
  {
    name: "DRS-600-Syntet-walnut",
    image: "Images/DRS-600-Syntet-walnut.png",
    price: "₱" + 6000,
    soldOut: false,
    description: "Autententic air rifle, PCP powered complete set",
  },
  {
    name: "King-500-Brown FX Air Rifles",
    image: "Images/King-500-Brown.png",
    price: "₱" + 7500,
    soldOut: false,
    description: "Autententic air rifle, PCP powered complete set",
  },
  {
    name: "Panthera-Hunter-Compact-long",
    image: "Images/Panthera-Hunter-Compact-long.png",
    price: "₱" + 8500,
    soldOut: true,
    description: "Autententic air rifle, PCP powered complete set",
  },
];

function App() {
  return (
    <div>
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Airgun React Store Co.</h1>
      <span>Our Product</span>
      <small>
        Brand New Authentic Fx Airgun Available for sale, 3 month warranty and
        free delivery.
      </small>
    </div>
  );
}

function Products() {
  return (
    <div className="products">
      {products.map((product) => (
        <Product productObj={product} />
      ))}
    </div>
  );
}

function Product({ productObj }) {
  return (
    <div className={`product ${productObj.soldOut ? "product-sold-out" : ""}`}>
      <img src={productObj.image} alt={productObj.id} />
      <div className="product-details">
        <div className="product-name">{productObj.name}</div>
        <div className="product-description">{productObj.description}</div>
        <small
          className={`product-name ${productObj.soldOut ? "sold-out" : ""}`}
        >
          {productObj.soldOut ? "Sold Out" : productObj.price}
        </small>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="btn">
      <button>Order now</button>
    </div>
  );
}

export default App;
