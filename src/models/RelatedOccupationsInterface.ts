export interface IRelatedOccupationsApiResult {
    data: {
        related_occupations: IOccupation[];
    }
  }

export interface IOccupation {
    id: string;
    occupation_label: string;
}