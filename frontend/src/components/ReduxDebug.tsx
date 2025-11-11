import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ReduxDebug = () => {
  const orders = useSelector((state: RootState) => state.orders);
  const profile = useSelector((state: RootState) => state.profileDetails);
  const addresses = useSelector((state: RootState) => state.addresses);

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h3 className="font-bold mb-2">Redux State Debug</h3>
      
      <div className="mb-4">
        <h4 className="font-semibold">Orders ({orders.list.length} items):</h4>
        <pre className="text-xs bg-white p-2 rounded overflow-auto max-h-40">
          {JSON.stringify(orders, null, 2)}
        </pre>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold">Profile:</h4>
        <pre className="text-xs bg-white p-2 rounded overflow-auto max-h-40">
          {JSON.stringify(profile, null, 2)}
        </pre>
      </div>

      <div>
        <h4 className="font-semibold">Addresses:</h4>
        <pre className="text-xs bg-white p-2 rounded overflow-auto max-h-40">
          {JSON.stringify(addresses, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ReduxDebug;