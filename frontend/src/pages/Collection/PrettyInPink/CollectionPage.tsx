import { useParams } from "react-router-dom";
import DenimDusk from "./DenimDusk";
import PrettyInPink from "./PrettyInPink";
import DesertGlow from "./DesertGlow";
import CrimsonFlame from "./CrimsonFlame";

const CollectionPage = () => {
  const { collectionId } = useParams<{ collectionId: string }>();

  return (
    <div>
      {collectionId === "COL00000001" && <PrettyInPink />}
      {collectionId === "COL00000002" && <DenimDusk />}
      {collectionId === "COL00000003" && <DesertGlow />}
      {collectionId === "COL00000004" && <CrimsonFlame />}
    </div>
  );
};
export default CollectionPage;
