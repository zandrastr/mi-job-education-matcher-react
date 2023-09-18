import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import { ButtonTest } from "../style/Buttons";
import { DigiButton } from "@digi/arbetsformedlingen-react";
import axios from "axios";

export const Home = () => {
  const getDataFromApi = async () => {
    const testInput = "developer";

    try {
      const result = await axios.post(
        `https://jobed-connect-api.jobtechdev.se/v1/occupations/match-by-text?input_text=${testInput}&input_headline=${testInput}&limit=10&offset=0&include_metadata=false`
      );
      console.log("API result:", result.data);
      console.log("All related occupations:", result.data.related_occupations);
      console.log("Show ONE occupation result:", result.data.related_occupations[0].occupation_label);
    } catch (error) {
      console.log("Error getting data from API:", error);
    }
  };

  return (
    <>
      <ButtonTest onClick={getDataFromApi}>Styled knapp</ButtonTest>

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
