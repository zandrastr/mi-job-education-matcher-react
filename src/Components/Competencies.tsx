import { DigiList, DigiTypography } from "@digi/arbetsformedlingen-react";
import { ICompetency } from "../models/CompentenciesInterface";
import { ListType, TypographyVariation } from "@digi/arbetsformedlingen";
import "../style/Competencies.css";

interface competenciesProps {
  props: ICompetency[];
}

export const Competencies = ({ props }: competenciesProps) => {
  const competencies = props;
  const firstTenCompetencies = competencies.slice(0, 10);

  return (
    <>
      <div className="competencies">
        <DigiTypography afVariation={TypographyVariation.LARGE}>
          <h1>Efterfrågade kompetenser</h1>
        </DigiTypography>

        <DigiTypography afVariation={TypographyVariation.SMALL}>
          <DigiList afListType={ListType.BULLET}>
            {firstTenCompetencies.map((oneCompetency) => (
              <li key={oneCompetency.term}>
                <span>{oneCompetency.term.charAt(0).toUpperCase() + oneCompetency.term.slice(1)}</span>
              </li>
            ))}
          </DigiList>
        </DigiTypography>
      </div>
    </>
  );
};
