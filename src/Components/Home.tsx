import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import { ButtonTest } from "../style/Buttons";
import { DigiButton } from "@digi/arbetsformedlingen-react";
import { getRelatedOccupationsFromApi } from "../services/ApiResponseService";

export const Home = () => {
  return (
    <>
      {/* La in onClick-funktion med API-anropet här för att testa. */}
      <ButtonTest onClick={getRelatedOccupationsFromApi}>Styled knapp</ButtonTest>
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
