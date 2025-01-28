import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import HexLogo from "../components/svg/HexLogo";

const SignInPage: React.FC = () => {
  const [portalName, setPortalName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePortalNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPortalName(e.target.value);
    setError(null);
  };

  const handleUserEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
    setError(null);
  };

  const handleLogin = () => {
    if (!portalName) {
      setError("Portal name is required.");
      return;
    }
    setLoading(true);
    // Add logic to perform login with portalName
    // On success or error, handle the response accordingly
    setLoading(false);
  };

  const handleSendPortalInfo = () => {
    if (!userEmail) {
      setError("Email is required.");
      return;
    }
    setLoading(true);
    // Add logic to send portal info via email
    // On success or error, handle the response accordingly
    setLoading(false);
  };

  return (
    <div className="hex__sign_in_container_wrapper">
      <div className="hex__row hex__no-gutters">
        <div className="hex__sign_in_content_wrapper">
          {/* Portal Name Login Section */}
          {/* <div className="hex__sign_in_content_group">
            <h2 className="hex__sign_in_title">
              Log in to your Hexnode account
            </h2>
            <p className="hex__sign_in_common_text">
              Enter your Hexnode portal name below. Once connected, you can log
              in with the same credentials that you used while setting up your
              Hexnode account.
            </p>
            <div className="hex__sign_in_form_wrapper">
              <form className="ng-pristine ng-valid">
                <div className="hex__sign_in_form_ele_wrapper">
                  <div className={`input_wrapper ${error ? "has_error" : ""}`}>
                    <input
                      className="hex__sign_in_input"
                      type="text"
                      name="portal_name"
                      placeholder="Enter your portal name"
                      value={portalName}
                      onChange={handlePortalNameChange}
                      onFocus={() => setError(null)}
                    />
                    <div className="domain_name">
                      <span>.hexnodemdm.com</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="hex__sign_in_btn btn_ripple"
                    onClick={handleLogin}
                    disabled={loading}
                  >
                    {loading ? (
                      <i className="stop-spiner fa fa-spinner fa-spin fa-1x fa-fw" />
                    ) : (
                      "Connect"
                    )}
                  </button>
                </div>
                {error && (
                  <div className="hex__sign_in_error_wrapper">{error}</div>
                )}
              </form>
            </div>
          </div> */}

          {/* Forgot Portal Name Section */}
          {/* <div className="hex__sign_in_content_group">
            <h2 className="hex__sign_in_subtitle">
              Can’t remember your portal name?
            </h2>
            <p className="hex__sign_in_common_text">
              Enter your email address below and we’ll send you a reminder.
            </p>
            <div className="hex__sign_in_form_wrapper">
              <form className="ng-pristine ng-valid">
                <div className="hex__sign_in_form_ele_wrapper">
                  <div className={`input_wrapper ${error ? "has_error" : ""}`}>
                    <input
                      className="hex__sign_in_input"
                      type="text"
                      name="user_email"
                      placeholder="Your work email"
                      value={userEmail}
                      onChange={handleUserEmailChange}
                      onFocus={() => setError(null)}
                      autoComplete="email"
                    />
                  </div>
                  <button
                    type="button"
                    className="hex__sign_in_btn btn_ripple"
                    onClick={handleSendPortalInfo}
                    disabled={loading}
                  >
                    {loading ? (
                      <i className="stop-spiner fa fa-spinner fa-spin fa-1x fa-fw" />
                    ) : (
                      "GET PORTAL INFO"
                    )}
                  </button>
                </div>
                {error && (
                  <div className="hex__sign_in_error_wrapper">{error}</div>
                )}
              </form>
            </div>
          </div> */}
          <div className="absolute top-6 mx-10">
            <HexLogo isScrolled={true} />
          </div>

          {/* Sign Up Section */}
          <div className="w-full lg:w-2/3 p-6 flex flex-col justify-center relative">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
              <div className="text-center mb-6">
                <h2 className="hex__sign_in_title">
                  Log in to your Hexnode account
                </h2>
                <p className="hex__sign_in_common_text">
                  Enter your Hexnode portal name below. Once connected, you can
                  log in with the same credentials that you used while setting
                  up your Hexnode account.
                </p>
              </div>

              {/* React Final Form */}
              <Form
                onSubmit={() => {}}
                render={({
                  handleSubmit,
                  submitting,
                  pristine,
                  values,
                  errors,
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="mb-6 flex items-center space-x-4"
                  >
                    <div className="w-full">
                      <Field name="email">
                        {({ input, meta }) => (
                          <div className="relative w-full">
                            <input
                              {...input}
                              className={`w-full px-4 py-3 border ${
                                meta.touched && meta.error
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } rounded-md focus:outline-none focus:ring-2 focus:ring-red-500`}
                              type="email"
                              placeholder="Your work email"
                              autoComplete="email"
                            />
                            {meta.touched && meta.error && (
                              <span className="absolute text-red-500 text-sm top-full left-0 mt-1">
                                {meta.error}
                              </span>
                            )}
                          </div>
                        )}
                      </Field>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting || pristine}
                      className="px-8 py-3 bg-[#dd0735] text-white rounded-md hover:bg-red-700 whitespace-nowrap disabled:opacity-50"
                    >
                      Get Started
                    </button>
                  </form>
                )}
              />
            </div>

            {/* Contact Info (Centered in Sign-Up Section) */}
            <div className="absolute bottom-6 flex mx-10  w-full">
              <ul className="space-x-6 flex">
                <li>
                  <a href="tel:+1-833-439-6633" className="text-blue-600">
                    🇺🇸 +1-833-HEXNODE (439-6633) (Toll Free)
                  </a>
                </li>
                <li>
                  <a href="tel:+44-8003-689920" className="text-blue-600">
                    🇬🇧 +44-800-3689920 (Toll Free)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logo and Trial Information */}
        <div className="hex__sign_in_logo_wrapper">
          <div className="hex__sign_in_logo_conatainer">
            <div className="hex_sign_in_trial_req">
              <h4 className="hex__sign_in_trial_title">
                Don't have an account?
              </h4>
              <a
                className="hex__sign_in_trial_btn"
                href="/mobile-device-management/cloud/signup/"
              >
                Get Started for free
              </a>
            </div>
            <div className="sign-in-logos">
              <h2 className="hex__sign_in_logo_title">
                Enterprises of all sizes trust Hexnode UEM
              </h2>
              <div className="sign-in-logos__row">
                <div className="sign-in-logos__item">
                  <img
                    src="https://static.hexnode.com/img/login/logos/2x/marriott-intl.svg"
                    alt="Marriott"
                    className="aspect-ratio-img"
                  />
                </div>
                <div className="sign-in-logos__item">
                  <img
                    src="https://static.hexnode.com/img/login/logos/2x/merck.svg"
                    alt="Merck"
                    className="aspect-ratio-img"
                  />
                </div>
                <div className="sign-in-logos__item">
                  <img
                    src="https://static.hexnode.com/img/login/logos/2x/costco.svg"
                    alt="Costco"
                    className="aspect-ratio-img"
                  />
                </div>
                <div className="sign-in-logos__item">
                  <img
                    src="https://static.hexnode.com/img/login/logos/2x/lowes.svg"
                    alt="Lowe's"
                    className="aspect-ratio-img"
                  />
                </div>
                <div className="sign-in-logos__item">
                  <img
                    src="https://static.hexnode.com/img/login/logos/2x/hilton.svg"
                    alt="Hilton"
                    className="aspect-ratio-img"
                  />
                </div>
                <div className="sign-in-logos__item">
                  <img
                    src="https://static.hexnode.com/img/login/logos/2x/group1-automotive.png"
                    alt="Group 1 Automotive"
                    className="aspect-ratio-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
