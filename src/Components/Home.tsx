/*import { getCompetenciesFromApi, getEducationsFromApi, getRelatedOccupationsFromApi } from "../services/ApiResponseService";
import { useState } from "react";
import { IOccupation } from "../models/RelatedOccupationsInterface";
import { RelatedOccupations } from "./RelatedOccupations";

import { ICompetency } from "../models/CompentenciesInterface";
import { Competencies } from "./Competencies";
import { Educations } from "./Educations";
import { IEducation } from "../models/EducationsInterface";
 import { EducationForm } from "./EducationForm";
*/
import { SearchHome } from "./SearchHome";

//const testInput: string = "developer"; //Input är hårdkodad här för att testa API-anropet.
//const occupationId: string = "fg7B_yov_smw"; //Hårdkodad för att testa API-anropet.

export const Home = () => {
/*  const [relatedOccupations, setRelatedOccupations] = useState<IOccupation[]>([]);
  const [competencies, setCompetencies] = useState<ICompetency[]>([]);
  const [educations, setEducations] = useState<IEducation[]>([]);

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

  const handleClickToGetEducations = async () => {
    const data = await getEducationsFromApi(occupationId);
    if (data) {
      setEducations(data);
    }
  };
*/
  return (
    <>
      <SearchHome />
      {/* La in on Click-funktion med API-anropet här för att testa. 
      <button onClick={handleClick}>Send mocked user input</button>*/}

      {/* Testknapp för att få fram efterfrågade kompetenser för yrkes-id som just nu är hårdkodat 
      <button onClick={handleClickToGetCompetencies}>Get compentencies for mocked occupation</button>*/}

      {/* Testknapp för att få fram utbildningar baserat på yrkes-id (hårdkodat) 
      <button onClick={handleClickToGetEducations}>Get educations for mocked occupation</button>

      {relatedOccupations.length > 0 && <RelatedOccupations props={relatedOccupations} />}
      {competencies.length > 0 && <Competencies props={competencies} />}

      {educations.length > 0 && <Educations props={educations} />}*/}


     {/* <EducationForm />*/}

    </>
  );
};
