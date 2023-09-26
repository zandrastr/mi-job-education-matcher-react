import { IOccupation } from "../models/RelatedOccupationsInterface";
import { DigiButton, DigiExpandableAccordion } from "@digi/arbetsformedlingen-react";
import { Competencies } from "./Competencies";
import { ICompetency } from "../models/CompentenciesInterface";
import { WorkDescription } from './WorkDescription';
import { Educations } from "./Educations";
import { useState } from "react";
import { EducationFunction } from "./EducationFunction";
import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";

interface Props {
    occupations: IOccupation[];
    competencies: ICompetency[];
    selectedOccupationId: string | null;
    onCompetencyClick: (occupationId: string) => void;
}

export const OccupationMenu = ({ occupations, competencies, selectedOccupationId, onCompetencyClick }: Props) => {
    const { educations, activeEducationId, handleClickToGetEducations } = EducationFunction();
    const [activeSsyk, setActiveSsyk] = useState<string | null>(null);
    const [expandedAccordionId, setExpandedAccordionId] = useState<string | null>(null);

    const handleAccordionClick = (occupationId: string, ssyk: string) => {
        setActiveSsyk(ssyk);
        onCompetencyClick(occupationId);
        toggleAccordion(occupationId);
    };

   
    const toggleAccordion = (occupationId: string) => {
        
        setExpandedAccordionId(null);
        
        setTimeout(() => {
            setExpandedAccordionId(occupationId);
    
            
            setTimeout(() => {
                setExpandedAccordionId(null);
                
               
                setTimeout(() => {
                    setExpandedAccordionId(occupationId);
                }, 50);
    
            }, 50);
    
        }, 500);
    };
    

    return (
        <div>
            {occupations.map((occupation) => (
                <DigiExpandableAccordion
                    key={occupation.id}
                    afHeading={occupation.occupation_label}
                    af-expanded={expandedAccordionId === occupation.id}
                    onAfOnClick={() => handleAccordionClick(occupation.id, occupation.occupation_group.ssyk)}
                >
                    <ul>
                        {activeSsyk === occupation.occupation_group.ssyk && (
                            <li>
                                <WorkDescription ssyk={occupation.occupation_group.ssyk} />
                            </li>
                        )}
                    
                           
                                {selectedOccupationId === occupation.id && competencies.length > 0 && <div><Competencies props={competencies} /></div>}
                            
                        
                        <li>
                            <DigiButton  afSize={ButtonSize.MEDIUM} afVariation={ButtonVariation.SECONDARY} onClick={() => {
                                handleClickToGetEducations(occupation.concept_taxonomy_id);
                                toggleAccordion(occupation.id);
                            }}>
                                {`Utbildningar`}
                            </DigiButton>
                            {activeEducationId === occupation.concept_taxonomy_id && <Educations props={educations} />}
                        </li>
                    </ul>
                </DigiExpandableAccordion>
            ))}
        </div>
    );
};
