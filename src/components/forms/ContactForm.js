import React, { useState } from "react"

const ContactForm = () => {
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
    <div className="flex flex-col w-full lg:w-1/2">
      {formSubmitted && (
        <div
          className="p-4 mb-4 text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          <span className="font-medium">
            Thank you for submitting the form! I'll be back with you shortly.
          </span>
          .
        </div>
      )}

      <form
        method="post"
        id="form"
        onSubmit={formSubmit}
        className="flex flex-col w-full"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required="required"
          />
        </div>

        <div className="flex flex-col mt-6">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@yourname.com"
            required="required"
          />
        </div>

        <div className="flex flex-col mt-6">
          <label htmlFor="message" className="font-bold">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Please write your message here..."
            className="h-24"
            required="required"
          />
        </div>

        <button type="submit" className="btn-md btn-brand mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;