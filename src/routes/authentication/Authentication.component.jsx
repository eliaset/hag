import "./authentication.style.scss";
import SignUpForm from "../../components/sign-up-form/signupForm.component";
import SignInForm from "../../components/sign-in-form/SignInForm.component";
function Authentication() {
  return (
    <>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
}
export default Authentication;
