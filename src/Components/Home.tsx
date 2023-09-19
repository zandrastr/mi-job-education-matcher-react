import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import { ButtonTest } from "../style/Buttons";
import { DigiButton } from "@digi/arbetsformedlingen-react";
import { getRelatedOccupationsFromApi } from "../services/ApiResponseService";
import { useState } from "react";
import { IOccupation } from "../models/RelatedOccupationsInterface";
import { RelatedOccupations } from "./RelatedOccupations";

const testInput: string = "developer"; //Input är hårdkodad här för att testa API-anropet.

export const Home = () => {
  const [relatedOccupations, setRelatedOccupations] = useState<IOccupation[]>([]);

  const handleClick = async () => {
    const data = await getRelatedOccupationsFromApi(testInput);
    if (data) {
      setRelatedOccupations(data);
    }
  };

  return (
    <>
      {/* La in on Click-funktion med API-anropet här för att testa. */}
      <button onClick={handleClick}>Send mocked user input</button>
      {relatedOccupations.length > 0 && <RelatedOccupations props={relatedOccupations} />}

      <ButtonTest>Styled knapp</ButtonTest>

      <DigiButton
        afSize={ButtonSize.MEDIUM}
        afVariation={ButtonVariation.SECONDARY}
        afFullWidth={false}
      >
        Af knapp
      </DigiButton>
    </>
  );
};
