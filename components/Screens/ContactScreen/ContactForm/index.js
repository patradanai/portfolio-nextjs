import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const InitialValues = { name: "", email: "", message: "" };

const ContactForm = () => {
  const [resMessage, setResMessage] = useState(null);
  const valid = () => {
    return "bg-transparent ring-1 ring-black px-3 py-2 rounded w-full h-full";
  };

  const invalid = () => {
    return "bg-transparent ring-2  px-3 py-2 rounded w-full h-full ring-red-500";
  };

  return (
    <Formik
      initialValues={InitialValues}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Your Name can not blank."),
        email: Yup.string().email().required("Your Email can not blank."),
        message: Yup.string(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          const res = await fetch("/api/email", {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-Type": "application/json" },
          });
          if (res.status == 200) {
            setResMessage(
              "Thank you for your interesting, I will shortly response."
            );
          }
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleChange,
      }) => (
        <form onSubmit={handleSubmit} className="flex flex-col items-center ">
          <div className="w-full mb-3">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={values.name}
              onChange={handleChange}
              className={errors.name ? invalid() : valid()}
            />
            <p className="text-sm text-red-400 pl-1 pt-1">{errors.name}</p>
          </div>
          <div className="w-full mb-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              value={values.email}
              onChange={handleChange}
              className={errors.email ? invalid() : valid()}
            />
            <p className="text-sm text-red-400 pl-1 pt-1">{errors.email}</p>
          </div>
          <div className="w-full h-40 mb-10">
            <textarea
              type="text"
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Leave Mesaage"
              className={errors.message ? invalid() : valid()}
            />
            <p className="text-sm text-red-400 pl-1 pt-1">{errors.message}</p>
          </div>
          {resMessage ? (
            <div className="flex items-center justify-center bg-blue-300 w-full h-24 rounded-lg">
              {resMessage}
            </div>
          ) : null}
          <button
            type="submit"
            className="mt-5 bg-gradient-to-r from-blue-400 to-red-400 rounded-full w-64 p-2 text-white shadow-lg focus:outline-none"
            disabled={isSubmitting}
          >
            SEND MESSAGE
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
