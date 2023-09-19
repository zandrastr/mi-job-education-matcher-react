import axios from "axios";
import { IOccupation, IRelatedOccupationsApiResult } from "../models/RelatedOccupationsInterface";

export const getRelatedOccupationsFromApi = async (userInput: string): Promise<IOccupation[] | undefined> => {

    try {
      const result: IRelatedOccupationsApiResult = await axios.post(
        `https://jobed-connect-api.jobtechdev.se/v1/occupations/match-by-text?input_text=${userInput}&input_headline=${userInput}&limit=10&offset=0&include_metadata=false`
      );
      console.log("API result:", result.data);
      console.log("All related occupations:", result.data.related_occupations);
      console.log("Show ONE occupation result:", result.data.related_occupations[0].occupation_label);
      return result.data.related_occupations;
    } catch (error) {
      console.log("Error getting data from API:", error);
    }
};