import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen"
import { ButtonTest } from "../style/Buttons"
import { DigiButton } from "@digi/arbetsformedlingen-react"


export const Home = () => {
    return (<>

    <ButtonTest>Styled knapp</ButtonTest>


    <DigiButton
	afSize={ButtonSize.MEDIUM}
	afVariation={ButtonVariation.SECONDARY}
	afFullWidth={false}>
	Af knapp
    </DigiButton>
    </>)
}