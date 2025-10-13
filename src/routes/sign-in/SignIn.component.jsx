import "./signIn.style.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up/signupForm.component";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>
        <p>Sign In</p>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        <SignUpForm />
      </div>
    </>
  );
};
export default SignIn;
