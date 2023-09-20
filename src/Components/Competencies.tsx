import { ICompetency } from "../models/CompentenciesInterface";

interface competenciesProps {
  props: ICompetency[];
}

export const Competencies = ({ props }: competenciesProps) => {
  const competencies = props;
  const firstTenCompetencies = competencies.slice(0, 10);

  return (
    <>
      <div>
        <h1>Efterfrågade kompetenser för yrket</h1>
        {/* Testutskrift av resultat - Lista med 10 kompetenser */}
        {firstTenCompetencies.map((oneCompetency) => (
          <li key={oneCompetency.term}>{oneCompetency.term}</li>
        ))}
      </div>
    </>
  );
};
