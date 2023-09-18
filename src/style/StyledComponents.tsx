// CustomDigiButton.tsx
import styled from 'styled-components';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import '@digi/arbetsformedlingen/dist/digi-arbetsformedlingen/digi-arbetsformedlingen.css'


export const CustomDigiButton = styled(DigiButton)`
 
 // Primary
  --digi--button--color--background--primary--default: darkorange;
  --digi--button--color--border--primary--default: darkorange;
  --digi--button--color--background--primary--hover: orange;
  --digi--button--color--border--primary--hover: orange;
  --digi--button--color--text--primary--default: white;
  
 // secondary

 --digi--button--color--background--secondary--default: white;
 --digi--button--color--background--secondary--hover: #ebe0cc;
 --digi--button--color--border--secondary--default: darkorange;
 --digi--button--color--border--secondary--hover: darkorange;
 --digi--color--text--secondary: darkorange;
`;



