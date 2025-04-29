interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-4">
            <h2 className="text-xl font-semibold text-black">{product.name}</h2>
            <p className="text-gray-500 mb-4">Precio: {product.price}€</p>
          </div>
        </div>
      ))}
    </div>
  );
};
