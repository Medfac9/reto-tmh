interface ProductFilterProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  filter,
  onFilterChange,
}) => {
  return (
    <div className="mb-6 mt-6">
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Escribe para filtrar..."
        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
