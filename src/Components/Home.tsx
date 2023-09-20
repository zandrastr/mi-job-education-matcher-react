import { getCompetenciesFromApi, getRelatedOccupationsFromApi } from "../services/ApiResponseService";
import { useState } from "react";
import { IOccupation } from "../models/RelatedOccupationsInterface";
import { RelatedOccupations } from "./RelatedOccupations";
import { SearchHome } from "./SearchHome";
import { ICompetency } from "../models/CompentenciesInterface";
import { Competencies } from "./Competencies";

const testInput: string = "developer"; //Input är hårdkodad här för att testa API-anropet.
const occupationId: string = "fg7B_yov_smw"; //Hårdkodad för att testa API-anropet.

export const Home = () => {
  const [relatedOccupations, setRelatedOccupations] = useState<IOccupation[]>([]);
  const [competencies, setCompetencies] = useState<ICompetency[]>([]);

  const handleClick = async () => {
    const data = await getRelatedOccupationsFromApi(testInput);
    if (data) {
      setRelatedOccupations(data);
    }
  };

  const handleClickToGetCompetencies = async () => {
    const data = await getCompetenciesFromApi(occupationId);
    if (data) {
      setCompetencies(data);
    }
  };

  return (
    <>
      <SearchHome />
      {/* La in on Click-funktion med API-anropet här för att testa. */}
      <button onClick={handleClick}>Send mocked user input</button>

      {/* Testknapp för att få fram efterfrågade kompetenser för yrkes-id som just nu är hårdkodat */}
      <button onClick={handleClickToGetCompetencies}>Get compentencies for mocked occupation</button>

      {relatedOccupations.length > 0 && <RelatedOccupations props={relatedOccupations} />}
      {competencies.length > 0 && <Competencies props={competencies} />}
    </>
  );
};
