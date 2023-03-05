//import * as React from "react"
import React, { useState } from "react"

import Layout from "../components/layout/Layout"
import Seo from "../components/seo"

const LinksPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  function hideAlert() {
    const delayDebounceFn = setTimeout(() => {
      setFormSubmitted(false)
    }, 8000)
    // Cleanup fn
    return () => clearTimeout(delayDebounceFn)
  }

  function formSubmit(event) {
    event.preventDefault()

    const formData = new FormData()
    formData.append("name", event.currentTarget.elements.name.value)
    formData.append("email", event.currentTarget.elements.email.value)
    formData.append("message", event.currentTarget.elements.message.value)

    fetch("https://getform.io/f/9a844e94-14f9-48d6-9179-feffcdd11cb2", {
      method: "POST",
      body: formData,
    })
      .then(response => {
        event.target.reset()
        setFormSubmitted(true)
        hideAlert()
      })
      .catch(error => {
        alert(
          "There was an error when submitting the form. Please try again later."
        )
        console.log(error)
      })
  }

  return (
    <Layout>
      <div className="container mx-auto p-8 h-screen" data-form={formSubmitted}>
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-mint tracking-tight dark:text-slate-200 pt-10 pb-16">
          Contact me
        </h1>

        {formSubmitted && (
          <div
            className="p-4 mb-4 text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert"
          >
            <span class="font-medium">
              Thank you for submitting the form! I'll be back with you shortly.
            </span>
            .
          </div>
        )}

        <form
          method="post"
          id="form"
          onSubmit={formSubmit}
          className="block p-6 max-w-full bg-header border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              className="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              name="message"
              className="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your message
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-dark-blue focus:ring-4 hover:ring-4 focus:outline-none hover:ring-mint font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default LinksPage

export const Head = () => <Seo title="Contact Me" pathname="/contact" />
