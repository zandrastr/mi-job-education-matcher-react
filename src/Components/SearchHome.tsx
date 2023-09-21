import { useState } from "react";
import "../style/TestForm.css";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";
import { IOccupation } from "../models/RelatedOccupationsInterface";
import { getRelatedOccupationsFromApi } from "../services/ApiResponseService";

const generateSubstrings = (input: string): string[] => {
  const substrings: string[] = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
      substrings.push(input.slice(i, j));
    }
  }
  return substrings;
};

export const SearchHome = () => {
  const [titelInput, setTitelInput] = useState<string>("");
  const [relatedOccupations, setRelatedOccupations] = useState<IOccupation[]>([]);

  const handleChange = (name: string, value: string) => {
    if (name === "titelInput") {
      setTitelInput(value);
      handleSubmit(value);
    }
  };

  const handleSubmit = async (inputValue: string) => {
  
    const substrings: string[] = generateSubstrings(inputValue);
    const withEr = substrings.map((substring) => substring + "er");
    const combinedArray = substrings.concat(withEr);
    const modifiedInput = combinedArray.join(" ");
    
    console.log(modifiedInput);
    const data = await getRelatedOccupationsFromApi(modifiedInput);
    if (data) {
      setRelatedOccupations(data);
    }
  };

  return (
    <div>
      <>
        
        <DigiFormInputSearch
          afLabel="Hitta relaterade yrken"
          afVariation={FormInputSearchVariation.LARGE}
          afType={FormInputType.SEARCH}	
          value={titelInput}
          afButtonText="Sök"
          onAfOnChange={(e) =>
            handleChange("titelInput", (e.target as unknown as HTMLInputElement).value)
          }
          >
          </DigiFormInputSearch>
          
      </>
      
        <>
          <h2>Relevanta yrken:</h2>
          <ul>
            {relatedOccupations.map((occupation) => (
              <li key={occupation.id}>{occupation.occupation_label}</li>
            ))}
          </ul>
        </>
      
    </div>
  );
};

