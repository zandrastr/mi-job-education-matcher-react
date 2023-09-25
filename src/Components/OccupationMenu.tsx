import { IOccupation } from "../models/RelatedOccupationsInterface";
import { DigiNavigationVerticalMenu, DigiNavigationVerticalMenuItem } from "@digi/arbetsformedlingen-react";
import { NavigationVerticalMenuVariation } from "@digi/arbetsformedlingen";
import { Competencies } from "./Competencies";
import { ICompetency } from "../models/CompentenciesInterface";
import { WorkDescription } from './WorkDescription';

interface Props {
    occupations: IOccupation[];
    competencies: ICompetency[];
    selectedOccupationId: string | null;
    onCompetencyClick: (occupationId: string) => void;
}

export const OccupationMenu = ({ occupations, competencies, selectedOccupationId, onCompetencyClick }: Props) => {
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
                                <li>
                                    <WorkDescription ssyk={occupation.occupation_group.ssyk} />
                                </li>
                                <DigiNavigationVerticalMenuItem 
                                    onClick={() => onCompetencyClick(occupation.id)}
                                    afText={`Visa efterfrågade kompetenser för '${occupation.occupation_label} - ${occupation.occupation_group.ssyk}'`}
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
