import styled from 'styled-components';

<<<<<<< HEAD
import { SpinnerContainer } from '../spinner/spinner.styles';

=======
>>>>>>> 6d935f97ce22422aa0aa5a51ebc05ea05351c844
export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
<<<<<<< HEAD
  align-items: center;
=======
>>>>>>> 6d935f97ce22422aa0aa5a51ebc05ea05351c844

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
<<<<<<< HEAD

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`
=======
>>>>>>> 6d935f97ce22422aa0aa5a51ebc05ea05351c844