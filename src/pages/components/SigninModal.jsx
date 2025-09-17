import { useState } from "react";
import "./SigninModal.css";

function SigninModal() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Sign In Button */}
      <button
        className="btn btn-danger mx-2"
        onClick={() => setShow(true)}
      >
        Sign in
      </button>

      {/* Modal */}
      {show && (
        <div className="modal-backdrop">
          <div className="signin-modal">
            <button className="close-btn" onClick={() => setShow(false)}>
              ×
            </button>

            <h4 className="modal-title">Sign In to BookMyShow</h4>

            {/* Email/Password Login */}
            <form className="signin-form">
              <input
                type="email"
                placeholder="Email"
                className="form-control mb-3"
              />
              <input
                type="password"
                placeholder="Password"
                className="form-control mb-3"
              />
              <button type="submit" className="btn btn-danger w-100">
                Continue
              </button>
            </form>

            <div className="divider">or</div>

            {/* Social Logins */}
            <button className="btn btn-outline-dark w-100 mb-2">
              Continue with Google
            </button>
            <button className="btn btn-outline-dark w-100 mb-2">
              Continue with Facebook
            </button>
            <button className="btn btn-outline-dark w-100">
              Continue with Phone Number
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SigninModal;
