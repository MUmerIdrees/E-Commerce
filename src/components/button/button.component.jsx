import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
<<<<<<< HEAD
  ButtonSpinner
=======
>>>>>>> 6d935f97ce22422aa0aa5a51ebc05ea05351c844
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

<<<<<<< HEAD
const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton disabled={isLoading} {...otherProps}>{isLoading ? <ButtonSpinner /> : children}</CustomButton>;
=======
const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
>>>>>>> 6d935f97ce22422aa0aa5a51ebc05ea05351c844
};

export default Button;
