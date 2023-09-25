import { IOccupation } from "../models/RelatedOccupationsInterface";
import { DigiExpandableAccordion } from "@digi/arbetsformedlingen-react";
import { Competencies } from "./Competencies";
import { ICompetency } from "../models/CompentenciesInterface";
import { WorkDescription } from './WorkDescription';
import { Educations } from "./Educations";
import { useState } from "react";
import { EducationFunction } from "./EducationFunction";


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

   
    const toggleAccordion = (occupationId: string) => {
        
        setExpandedAccordionId(null);
        
        setTimeout(() => {
            setExpandedAccordionId(occupationId);
    
            
            setTimeout(() => {
                setExpandedAccordionId(null);
                
               
                setTimeout(() => {
                    setExpandedAccordionId(occupationId);
                }, 500);
    
            }, 50);
    
        }, 50); 
    };
    

    return (
        <div>
            {occupations.map((occupation) => (
               <DigiExpandableAccordion
                   key={occupation.id}
                   afHeading={occupation.occupation_label}
                   af-expanded={expandedAccordionId === occupation.id}
               >
                    <ul>
                        
                            <li>
                                <button onClick={() => {
                                    setActiveSsyk(occupation.occupation_group.ssyk);
                                    toggleAccordion(occupation.id);
                                }}>
                                    Yrkesbeskrivning
                                </button>
                            </li>
                            
                                {activeSsyk === occupation.occupation_group.ssyk && <WorkDescription ssyk={occupation.occupation_group.ssyk} />}
                                <li>
                                    <button onClick={() => {
                                        onCompetencyClick(occupation.id);
                                        toggleAccordion(occupation.id);
                                    }}>
                                        {`Efterfrågade kompetenser för '${occupation.occupation_label}'`}
                                    </button>
                                    <ul>{selectedOccupationId === occupation.id && competencies.length > 0 && <Competencies props={competencies} />}</ul>
                                </li>
                                <li>
                                    <button onClick={() => {
                                        handleClickToGetEducations(occupation.concept_taxonomy_id);
                                        toggleAccordion(occupation.id);
                                    }}>
                                        {`Utbildningar`}
                                    </button>
                                    {activeEducationId === occupation.concept_taxonomy_id && <Educations props={educations} />}
                                </li>
                            
                        
                    </ul>
                </DigiExpandableAccordion>
            ))}
        </div>
    );
};
