import React, { useState } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";

const ErrorMsg = ({ name }) => {
  const { errors } = useFormikContext();
  return <span style={{ color: "red" }}>{errors[name]}</span>;
};

function SubscriptionForm() {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (values, resetForm) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        const result = await response.json();
        setSuccessMessage("Form submitted successfully!");
        resetForm();
        console.log("Form submitted successfully:", result);
      } else {
        setSuccessMessage("Error submitting form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage("Error submitting form.");
    }
  };

  const initialValues = {
    email: "",
    interest: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required").email("Invalid email"),
    interest: Yup.string().required("Interest is required"),
  });

  return (
    <div className="flex flex-col content-center px-96">
      <div className="flex flex-col text-center font-semibold text-3xl my-8">
        Subscribe
      </div>
      <div className="flex flex-col text-center text-lg my-2">
        Subscribe to our newsletter and be among the first to hear about new
        arrivals, events and special offers.
      </div>
      <Formik
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ resetForm }) => (
          <Form>
            <label className="flex flex-col px-40">
              Email:
              <Field
                type="text"
                name="email"
                placeholder="Enter your email"
                className="bg-transparent border-2 border-black rounded-3xl p-3 placeholder-black hover:bg-green-400"
              />
              <ErrorMsg name={"email"} />
            </label>

            <br />

            <label className="flex flex-row mx-56 justify-between">
              <div className="flex flex-col">
                Interest:
                <Field
                  as="select"
                  name="interest"
                  className="bg-transparent border-2 border-black rounded-3xl p-3 placeholder-black hover:bg-green-400"
                >
                  <option value="">Select</option>
                  <option value="laptop">Laptop</option>
                  <option value="tablet">Tablet</option>
                </Field>{" "}
                <ErrorMsg name={"interest"} />
              </div>

              <button
                type="submit"
                className="bg-black text-white ms-8 my-8 px-6 py-2 rounded-xl border-4 border-black hover:bg-gray-700"
              >
                Submit
              </button>
            </label>

            <br />
          </Form>
        )}
      </Formik>

      {successMessage && (
        <div className="text-center text-red-800 font-bold text-2xl">
          {successMessage}
        </div>
      )}
    </div>
  );
}

export default SubscriptionForm;
