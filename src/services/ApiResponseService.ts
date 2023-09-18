import axios from "axios";
import { IRelatedOccupationsApiResult } from "../models/RelatedOccupationsInterface";

export const getRelatedOccupationsFromApi = async () => {
    const testInput = "developer"; //Input är hårdkodad här för att testa API-anropet. 

    try {
      const result: IRelatedOccupationsApiResult = await axios.post(
        `https://jobed-connect-api.jobtechdev.se/v1/occupations/match-by-text?input_text=${testInput}&input_headline=${testInput}&limit=10&offset=0&include_metadata=false`
      );
      console.log("API result:", result.data);
      console.log("All related occupations:", result.data.related_occupations);
      console.log("Show ONE occupation result:", result.data.related_occupations[0].occupation_label);
    } catch (error) {
      console.log("Error getting data from API:", error);
    }
};
