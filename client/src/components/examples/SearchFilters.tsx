import SearchFilters from '../SearchFilters';

export default function SearchFiltersExample() {
  return (
    <div className="p-8">
      <div className="max-w-md">
        <h1 className="text-2xl font-bold mb-6">Search Filters Demo</h1>
        <SearchFilters
          onFiltersChange={(filters) => console.log('Filters changed:', filters)}
          onClearFilters={() => console.log('Filters cleared')}
        />
      </div>
    </div>
  );
}