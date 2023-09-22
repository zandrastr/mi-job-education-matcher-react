import React from 'react';
import { IOccupation } from "../models/RelatedOccupationsInterface";
import { DigiNavigationVerticalMenu, DigiNavigationVerticalMenuItem } from "@digi/arbetsformedlingen-react";
import { NavigationVerticalMenuVariation } from "@digi/arbetsformedlingen";
import { Competencies } from "./Competencies";
import { ICompetency } from "../models/CompentenciesInterface";

interface Props {
    occupations: IOccupation[];
    competencies: ICompetency[];
    selectedOccupationId: string | null;
    onCompetencyClick: (occupationId: string) => void;
  }

export const OccupationMenu: React.FC<Props> = ({ occupations, competencies, selectedOccupationId, onCompetencyClick }) => {
    return (
        <>
            {occupations.map((occupation) => (
                <DigiNavigationVerticalMenu
                    key={occupation.id}
                    afVariation={NavigationVerticalMenuVariation.PRIMARY}
                >
                    <ul>
                        <li>
                            <DigiNavigationVerticalMenuItem
                                afText={occupation.occupation_label}
                                afActiveSubnav={false}
                            />
                            <ul>
                                <DigiNavigationVerticalMenuItem 
                                    onClick={() => onCompetencyClick(occupation.id)}
                                    afText={`Visa efterfrågade kompetenser för '${occupation.occupation_label}'`}
                                    afActiveSubnav={false}
                                >
                                    {selectedOccupationId === occupation.id && competencies.length > 0 && <Competencies props={competencies} />}
                                </DigiNavigationVerticalMenuItem>
                            </ul>           
                        </li>
                    </ul>
                </DigiNavigationVerticalMenu>
            ))}
        </>
    );
};


