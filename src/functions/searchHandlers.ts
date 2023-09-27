/*import { ICompetency } from "../models/CompentenciesInterface";
import { IOccupation } from "../models/RelatedOccupationsInterface";
import { getCompetenciesFromApi, getRelatedOccupationsFromApi } from "../services/ApiResponseService";
import { generateSubstrings } from './generateSubstrings'; 

export const handleSearchSubmit = async (
  inputValue: string, 
  setRelatedOccupationsFunction: React.Dispatch<React.SetStateAction<IOccupation[]>>
) => {
  
  const substrings: string[] = generateSubstrings(inputValue);
  const withEr = substrings.map((substring) => substring + "er");
  const combinedArray = substrings.concat(withEr);
  const modifiedInput = combinedArray.join(" ");
  
  console.log(modifiedInput);
  const data = await getRelatedOccupationsFromApi(modifiedInput);
  if (data) {
    setRelatedOccupationsFunction(data);
  }
};

export const handleCompetencyClick = async (
  occupationId: string,
  selectedOccupationId: string | null,
  setSelectedOccupationFunction: React.Dispatch<React.SetStateAction<string | null>>,
  setCompetenciesFunction: React.Dispatch<React.SetStateAction<ICompetency[]>>
) => {
  if (selectedOccupationId === occupationId) {
    setSelectedOccupationFunction(null);
    setCompetenciesFunction([]);
    return;
  }

  console.log(`ID: ${occupationId}`);
  const data = await getCompetenciesFromApi(occupationId);
  if (data) {
    setCompetenciesFunction(data);
    setSelectedOccupationFunction(occupationId);
    console.log(data, occupationId);
  }
};
*/