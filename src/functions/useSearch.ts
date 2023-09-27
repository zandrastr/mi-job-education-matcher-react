// useSearch.ts
import { useState } from 'react';
import { IOccupation } from '../models/RelatedOccupationsInterface';
import { getRelatedOccupationsFromApi } from '../services/ApiResponseService';
import { generateSubstrings } from '../functions/generateSubstrings';

export const useSearch = () => {
  const [relatedOccupations, setRelatedOccupations] = useState<IOccupation[]>([]);

  const search = async (inputValue: string) => {
    const substrings: string[] = generateSubstrings(inputValue);
    const withEr = substrings.map((substring) => substring + "re");
    const combinedArray = substrings.concat(withEr);
    const modifiedInput = combinedArray.join(" ");

    const data = await getRelatedOccupationsFromApi(modifiedInput);
    console.log(modifiedInput);
    if (data) {
      setRelatedOccupations(data);
    }
  };

  return {
    relatedOccupations,
    search
  };
};
