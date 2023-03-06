import React from "react";

export default function About() {
  return (
    <section className="about section flex w-full py-16">
      <article className="inner-container">
        <div className="title">
          <p className="section-subtitle">About me</p>
          <h2 className="section-title">
            I design and build <em>quality, accessible</em> web apps.
          </h2>
        </div>
        <div className="content">
          <p className="text-base md:text-xl font-bold text-darkest dark:text-lightest">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            animi a nisi labore sint iste veniam at accusamus, ipsum suscipit
            sit. Aspernatur quas recusandae laborum dolore?
          </p>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia porro
            rerum maxime nulla corporis culpa doloribus blanditiis, fugit sequi
            reiciendis laudantium at velit delectus voluptas aliquam
            consequuntur unde eligendi natus. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. A praesentium laboriosam aliquid sint
            temporibus. Architecto ab ipsam laboriosam temporibus beatae.
          </p>
        </div>
      </article>
    </section>
  );
}
