import { DigiTypography } from "@digi/arbetsformedlingen-react";
import { TypographyVariation } from "@digi/arbetsformedlingen";
import "../style/Educations.css";
import { IEducation } from "../models/EducationsInterface";
//import { useState } from "react";

interface educationsProps {
  props: IEducation[];
}

export const Educations = ({ props }: educationsProps) => {
  const educations = props;
  /*
  const [readMoreOpen, setReadMoreOpen] = useState(false);
  const [chosenEducation, setChosenEducation] = useState<string | null>(null);

  const toggleReadMore = (id: string) => {
    if (chosenEducation === id) {
      setChosenEducation(null);
      setReadMoreOpen(!readMoreOpen);
    }
    setReadMoreOpen(!readMoreOpen);
    setChosenEducation(id);
  };
*/
  return (
    <>
      <div className="educations">
        <DigiTypography afVariation={TypographyVariation.LARGE}>
          <h1>Utbildningar</h1>
        </DigiTypography>

        <DigiTypography afVariation={TypographyVariation.SMALL}>
          {educations.map((oneEducation) => (
            <div
              className="educationWrapper"
              key={oneEducation.id}
            >
              <h3>{oneEducation.education_title}</h3>
              <p>
                {oneEducation.education_provider_name}
                <span> | </span>
                {oneEducation.education_form.charAt(0).toUpperCase() + oneEducation.education_form.slice(1)}
                <span> | </span>
                {oneEducation.education_type.charAt(0).toUpperCase() + oneEducation.education_type.slice(1)}
              </p>
              <p>
                {`Studietakt: ${oneEducation.eventSummary.paceOfStudyPercentage}%`}
                <span> | </span>
                {oneEducation.eventSummary.distance ? "Distans" : "Platsbunden"}
              </p>

             {/* <DigiButton afSize={ButtonSize.SMALL} afVariation={ButtonVariation.SECONDARY} onClick={() => toggleReadMore(oneEducation.id)}> {readMoreOpen && chosenEducation === oneEducation.id ? "Minimera" : "Läs mer"}</DigiButton>
              {readMoreOpen && chosenEducation === oneEducation.id && <p className="readMore">{oneEducation.education_description}</p>}*/}
              <p className="readMore">{oneEducation.education_description}</p>
            </div>
          ))}
        </DigiTypography>
      </div>
    </>
  );
};
