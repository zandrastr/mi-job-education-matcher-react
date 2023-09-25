import axios from "axios";
import { IOccupation, IRelatedOccupationsApiResult } from "../models/RelatedOccupationsInterface";
import { ICompetenciesApiResult, ICompetency } from "../models/CompentenciesInterface";
import { IEducation, IEducationsApiResult } from "../models/EducationsInterface";

export const getRelatedOccupationsFromApi = async (userInput: string): Promise<IOccupation[] | undefined> => {

    try {
      const result: IRelatedOccupationsApiResult = await axios.post(
        `https://jobed-connect-api.jobtechdev.se/v1/occupations/match-by-text?input_text=${userInput}&input_headline=${userInput}&limit=50&offset=0&include_metadata=false`
      );
      return result.data.related_occupations;
    } catch (error) {
      console.log("Error getting data from API:", error);
    }
};


export const getCompetenciesFromApi = async (occupationId: string): Promise<ICompetency[] | undefined> => {

  try {
    const result: ICompetenciesApiResult = await axios.get(
      `https://jobed-connect-api.jobtechdev.se/v1/enriched_occupations?occupation_id=${occupationId}&include_metadata=true`
    );
    const { competencies } = result.data.metadata.enriched_candidates_term_frequency;
    return competencies;
  } catch (error) {
    console.log("Error getting competencies data from API:", error);
  }
};

export const getEducationsFromApi = async (occupationId: string): Promise<IEducation[] | undefined> => {

  try {
    const result: IEducationsApiResult = await axios.post(
      `https://jobed-connect-api.jobtechdev.se/v1/educations/match-by-occupation?occupation_id=${occupationId}&distance=false&limit=10&offset=0&include_metadata=false`
    );
    return result.data.hits;
  } catch (error) {
    console.log("Error getting data from API:", error);
  }
};
