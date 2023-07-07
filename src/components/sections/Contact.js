import React from "react"
import SectionTitle from "../layout/SectionTitle"
import ContactForm from "../forms/ContactForm"

export default function Contact() {
  return (
    <section className="contact section pb-28">
      <article className="inner-container">
        <div className="title">
          <SectionTitle subtitle={"Get in touch"} title={"Contact"} />

          <p className="text-normal text-lg sm:text-xl font-medium mt-8">
            If you&apos;d like to hire me or have any questions, send me a
            message and I&apos;ll come back to you.
          </p>
        </div>

        <ContactForm />
      </article>
    </section>
  )
}
