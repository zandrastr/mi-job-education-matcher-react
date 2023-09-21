import { useState } from "react";
import "../style/TestForm.css";
import { DigiButton, DigiFormInput, DigiLink } from "@digi/arbetsformedlingen-react";
import { ButtonSize, ButtonVariation, FormInputMode, FormInputType, FormInputValidation, FormInputVariation, LinkVariation } from "@digi/arbetsformedlingen";
import { IOccupation } from "../models/RelatedOccupationsInterface";
import { getRelatedOccupationsFromApi } from "../services/ApiResponseService";
import { Link } from "react-router-dom";

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
        <DigiFormInput
          afLabel="Jobbtitel"
          afVariation={FormInputVariation.MEDIUM}
          afType={FormInputType.TEXT}
          afValidation={FormInputValidation.NEUTRAL}
          afInputmode={FormInputMode.TEXT}
          value={titelInput}
          onAfOnChange={(e) =>
            handleChange("titelInput", (e.target as unknown as HTMLInputElement).value)
          }
        />

        <DigiButton
          afType="submit"
          afSize={ButtonSize.MEDIUM}
          afVariation={ButtonVariation.PRIMARY}
        >
          Sök
        </DigiButton>
      </>
      
        <>
          <h2>Relevanta yrken:</h2>
          <ul>
          {relatedOccupations.map((occupation) => (
            <li key={occupation.id}>
              <DigiLink afHref="/" afVariation={LinkVariation.LARGE}>
                <Link to={`/${occupation.occupation_label}`}>
                  {occupation.occupation_label}
                </Link>
              </DigiLink>
            </li>
          ))}
        </ul>

        </>
      
    </div>
  );
};

