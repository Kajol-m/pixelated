import Dropdown from "../Dropdown/Dropdown";
interface FilterProps {
  filters: string[];
}
const Filter: React.FC<FilterProps> = ({ filters = [] }) => {
  return (
    <div className="hidden lg:flex flex-row gap-8 justify-start pl-8 py-8 border-b border-gray-300 cursor-pointer">
      {filters.map((filter) => (
        <Dropdown key={filter} title={filter} />
      ))}
    </div>
  );
};


export default Filter;
