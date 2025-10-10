import "./signIn.style.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <div>
        <p>Sign In</p>
        <button onClick={logGoogleUser}>Sign In</button>
      </div>
    </>
  );
}
export default SignIn;
