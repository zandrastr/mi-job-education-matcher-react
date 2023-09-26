import { useState } from "react";
import "../style/TestForm.css";
import "../style/Search.css";

import { FormInputSearchVariation, FormInputType, ListType } from "@digi/arbetsformedlingen";

import { IOccupation } from "../models/RelatedOccupationsInterface";
import { ICompetency } from "../models/CompentenciesInterface";
import { handleCompetencyClick, handleSearchSubmit } from "../functions/searchHandlers";
import { CustomDigiFormInputSearch, CustomDigiList } from "../style/StyledComponents";
import { OccupationMenu } from "./OccupationMenu";

export const SearchHome = () => {
  const [titelInput, setTitelInput] = useState<string>("");
  const [relatedOccupations, setRelatedOccupations] = useState<IOccupation[]>([]);
  const [competencies, setCompetencies] = useState<ICompetency[]>([]);
  const [selectedOccupationId, setSelectedOccupationId] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (name: string, value: string) => {
    if (name === "titelInput") {
      setTitelInput(value);
      // Clearing the previous data before a new search
      setRelatedOccupations([]);
      setCompetencies([]);
      setSelectedOccupationId(null);
      handleSubmit(value);
    }
  };

  const handleSubmit = (inputValue: string) => {
    handleSearchSubmit(inputValue, setRelatedOccupations);
    setHasSearched(true);
    setTimeout(() => {

        if (relatedOccupations.length === 0) {
            setShowError(true);
        }
    }, 3000);
};


  const handleClickToGetCompetencies = (occupationId: string) => {
    handleCompetencyClick(occupationId, selectedOccupationId, setSelectedOccupationId, setCompetencies);
  };

  return (

    <div>
      <div className="searchWrapper">
        <div className="searchInput">
          <CustomDigiFormInputSearch
            afLabel="Hitta relaterade yrken"
            afVariation={FormInputSearchVariation.LARGE}
            afType={FormInputType.SEARCH}
            value={titelInput}
            afButtonText="Sök"
            onAfOnChange={(e) => handleChange("titelInput", (e.target as unknown as HTMLInputElement).value)}
          />
        </div>
      </div>

      {hasSearched && showError && relatedOccupations.length === 0 ? (
        <div className="error-message">
          <h3>Inga yrken hittades vid din sökning. Tips för att förbättra din sökning</h3>
          <CustomDigiList afListType={ListType.BULLET}>
            <li>Kontrollera din stavning</li>
            <li>Byt ut eller ta bort ett sökord</li>
          </CustomDigiList>
        </div>
      ) : (
        relatedOccupations.length > 0 && (
          <>
            <div className="searchResultWrapper">
              <h2>Relevanta yrken:</h2>
              <OccupationMenu
                occupations={relatedOccupations}
                competencies={competencies}
                selectedOccupationId={selectedOccupationId}
                onCompetencyClick={handleClickToGetCompetencies}
              />
            </div>
          </>
        )
      )}

    </div>
  );
};
