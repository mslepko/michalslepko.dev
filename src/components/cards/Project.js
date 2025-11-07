import React from "react"

const Project = ({ image, title, description, url, github }) => {
  return (
    <article
      className="box p-0"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      {image && (
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          className="relative self-start aspect-video w-full flex overflow-hidden"
          role="img"
          aria-label={`Screenshot of ${title}`}
        ></div>
      )}

      <div className="p-6 flex flex-col gap-y-1.5">
        <h3
          className="font-bold text-darkest dark:text-lightest"
          itemProp="name"
        >
          {title}
        </h3>
        <p className="text-dark dark:text-light" itemProp="description">
          {description}
        </p>

        <div className="button-container items-center mt-3">
          {github && (
            <a
              href={github}
              className="github-icon"
              aria-label={`View ${title} source code on GitHub`}
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          )}

          {url && (
            <a
              href={url}
              className="external-icon"
              aria-label={`Visit ${title} live website`}
              rel="noopener"
              itemProp="url"
            >
              <svg
                className="w-6 h-6 text-current"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default Project
