import logo from './logo.svg';
import './App.css';
import './ProductGrid.css';
import './ProductCard.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HELLO WORLD!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      <ProductGrid />*/}
      <h1>FRESH Farm Products</h1>
      <ProductGrid/>
    </div>
  );
}

function ProductCard({ image, name, price, quantity }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price}</p>
      <p className="product-quantity">Quantity: {quantity}</p>
    </div>
  );
}

function ProductGrid() {
  const products = [
    { image: 'https://media.istockphoto.com/id/1159979911/photo/spinach-bunch-and-cutting-board-on-dark-grey-blackboard.jpg?s=1024x1024&w=is&k=20&c=a6qymU7Ef6urPFaJEFTnYoqtiyRWZQN7LrYdZ7GmMV8=', name: 'Spinach', price: 2.99, quantity: '500g' },
    { image: 'carrot.jpg', name: 'Carrot', price: 1.99, quantity: '1kg' },
    { image: 'potato.jpg', name: 'Potato', price: 3.49, quantity: '2kg' },
    { image: 'mango.jpg', name: 'Mango', price: 4.99, quantity: '1kg' },
    // Add more products here
  ];

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
}

export default App;

