import Dropdown from "../Dropdown/Dropdown";

const Filter: React.FC = () => {
  return (
    <>
      <div className="flex flex-row gap-8 justify-start pl-8 py-8 border-b-1 border-gray-300">
        <Dropdown title="Category" />
        <Dropdown title="Category" />
        <Dropdown title="Category" />
      </div>
      {/* <Dropdown title="Category" /> */}
    </>
  );
};

export default Filter;
