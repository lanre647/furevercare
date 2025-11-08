export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden p-4 text-center hover:scale-105 transition-transform">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{product.description}</p>
      <p className="font-bold text-blue-600 mb-3">{product.price}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg">
        Buy Now
      </button>
    </div>
  );
}
