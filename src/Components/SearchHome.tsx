import { useState } from "react";
import "../style/TestForm.css";
import { DigiButton, DigiFormInput, DigiTag } from "@digi/arbetsformedlingen-react";
import { ButtonSize, ButtonVariation, FormInputMode, FormInputType, FormInputValidation, FormInputVariation, TagSize } from "@digi/arbetsformedlingen";

export const SearchHome = () => {
  const [titelInput, setTitelInput] = useState("");
  const [searchWordInput, setSearchWordInput] = useState("");
  const [textArray, setTextArray] = useState<string[]>([]);

  const handleChange = (name: string, value: string) => {
    if (name === "titelInput") {
      setTitelInput(value);
    } else if (name === "searchWordInput") {
      setSearchWordInput(value);
    }
  };

  const handleAddText = () => {
    if (searchWordInput.trim() !== "") {
      setTextArray([...textArray, searchWordInput]);
      setSearchWordInput("");
    }
  };

  const handleSubmit = () => {
   
    if (titelInput.trim() !== "") {
      console.log("Titel Input Value:", titelInput);
    }
    console.log("Submitted Text Array:", textArray);
  };

  const handleRemoveText = (indexToRemove: number) => {
    const updatedTextArray = textArray.filter((_, index) => index !== indexToRemove);
    setTextArray(updatedTextArray);
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
        onAfOnChange={(e) => handleChange('titelInput', (e.target as unknown as HTMLInputElement).value)}
        ></DigiFormInput>

       </>

            
      <>
        <DigiFormInput
        afLabel="Sökord"
        afVariation={FormInputVariation.MEDIUM}
        afType={FormInputType.TEXT}
        afValidation={FormInputValidation.NEUTRAL}
        afInputmode={FormInputMode.TEXT}
        value={searchWordInput}
        onAfOnChange={(e) => handleChange('searchWordInput', (e.target as unknown as HTMLInputElement).value)}
        ></DigiFormInput>
        
        <DigiButton afSize={ButtonSize.MEDIUM} afVariation={ButtonVariation.SECONDARY} afFullWidth={false} onClick={handleAddText}> Lägg till sökord</DigiButton>
      </>
      <div style={{ marginTop: "10px", display: "flex", flexDirection: "row" }}>
        {textArray.map((text, index) => (
          <div key={index} style={{ marginRight: "10px" }}>
            <DigiTag afText={text} afSize={TagSize.SMALL} afNoIcon={false} afAriaLabel="ta bort" onClick={() => handleRemoveText(index)}></DigiTag>
          </div>
        ))}
        
      </div>
     
      <>
        <DigiButton afSize={ButtonSize.MEDIUM} afVariation={ButtonVariation.PRIMARY} afFullWidth={false} onClick={handleSubmit}>Sök </DigiButton>
      </>
    </div>
  );
};
