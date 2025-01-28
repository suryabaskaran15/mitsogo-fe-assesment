import React from "react";
import { Field, Form } from "react-final-form";
import HexLogo from "../components/svg/HexLogo";

const SignUpPage: React.FC = () => {
  const validate = (values: { email?: string }) => {
    const errors: { email?: string } = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    return errors;
  };

  const onSubmit = (values: { email: string }) => {
    console.log("Form submitted with:", values);
    // Implement the submission logic (e.g., API call)
  };

  return (
    <div className="relative flex flex-wrap min-h-screen">
      {/* HexLogo in Top Left */}
      <div className="absolute top-6 mx-10">
        <HexLogo isScrolled={true} />
      </div>

      {/* Sign Up Section */}
      <div className="w-full lg:w-2/3 p-6 flex flex-col justify-center relative">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">Try Hexnode free for 14 days</h2>
          </div>

          {/* React Final Form */}
          <Form
            onSubmit={onSubmit}
            validate={validate}
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

      {/* Testimonial Section */}
      <div className="hidden xl:flex w-full lg:w-1/3 p-6 bg-blue-100 justify-center items-center">
        <div className="p-4 rounded-lg text-center max-w-sm">
          <p className="text-xl">
            It seemed to be in-line with everything we were looking at so
            wasn't a bargain, I was the most impressed with what Hexnode had
            offered compared to the others.
          </p>
          <img
            className="mx-auto mt-4 rounded-full"
            src="/src/assets/signup/chris-robinson.png"
            alt="Chris Robinson"
            width="120"
            height="132"
          />
          <p className="text-lg font-semibold mt-4">Chris Robinson</p>
          <p className="text-gray-500">Executive Account Manager, NCS</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
