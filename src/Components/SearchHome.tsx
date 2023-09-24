import { useState } from "react";
import "../style/TestForm.css";

import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";

import { IOccupation } from "../models/RelatedOccupationsInterface";
import { ICompetency } from "../models/CompentenciesInterface";
import { handleCompetencyClick, handleSearchSubmit } from "../functions/searchHandlers";
import { OccupationMenu } from "./OccupationMenu";



export const SearchHome = () => {
  const [titelInput, setTitelInput] = useState<string>("");
  const [relatedOccupations, setRelatedOccupations] = useState<IOccupation[]>([]);
  const [competencies, setCompetencies] = useState<ICompetency[]>([]);
  const [selectedOccupationId, setSelectedOccupationId] = useState<string | null>(null);


  const handleChange = (name: string, value: string) => {
    if (name === "titelInput") {
      setTitelInput(value);
      handleSubmit(value);
    }
  };

  const handleSubmit = (inputValue: string) => {
    handleSearchSubmit(inputValue, setRelatedOccupations);
 };

 
const handleClickToGetCompetencies = (occupationId: string) => {
  handleCompetencyClick(occupationId, selectedOccupationId, setSelectedOccupationId, setCompetencies);
};

return (
  <div>
      <DigiFormInputSearch
          afLabel="Hitta relaterade yrken"
          afVariation={FormInputSearchVariation.LARGE}
          afType={FormInputType.SEARCH}	
          value={titelInput}
          afButtonText="Sök"
          onAfOnChange={(e) =>
              handleChange("titelInput", (e.target as unknown as HTMLInputElement).value)
          }
      />
        
      <h2>Relevanta yrken:</h2>
      <OccupationMenu 
                occupations={relatedOccupations} 
                competencies={competencies} 
                selectedOccupationId={selectedOccupationId} 
                onCompetencyClick={handleClickToGetCompetencies}
            />
  </div>
);

};
