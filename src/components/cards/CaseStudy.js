import React from "react"

const CaseStudy = ({
  category,
  title,
  client,
  industry,
  timeline,
  role,
  challenge,
  painPoints = [],
  solution,
  solutionSteps = [],
  results = [],
  additionalOutcomes = [],
  technologies = [],
}) => {
  return (
    <article className="case-study mb-16 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      {/* Case Study Header */}
      <div className="p-6 bg-gray-50 dark:bg-gray-800">
        <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mb-3">
          {category}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-darkest dark:text-lightest">
          {title}
        </h2>
        <div className="text-sm text-dark dark:text-light space-y-1">
          {client && (
            <p>
              <strong>Client:</strong> {client}
            </p>
          )}
          {industry && (
            <p>
              <strong>Industry:</strong> {industry}
            </p>
          )}
          {timeline && (
            <p>
              <strong>Timeline:</strong> {timeline}
            </p>
          )}
          {role && (
            <p>
              <strong>Role:</strong> {role}
            </p>
          )}
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* The Challenge */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-darkest dark:text-lightest">
            The Challenge
          </h3>
          <p className="text-dark dark:text-light mb-3">{challenge}</p>
          {painPoints.length > 0 && (
            <ul className="list-disc list-inside space-y-2 text-dark dark:text-light">
              {painPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>

        {/* The Solution */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-darkest dark:text-lightest">
            My Solution
          </h3>
          <p className="text-dark dark:text-light mb-3">{solution}</p>
          {solutionSteps.length > 0 && (
            <ul className="space-y-2">
              {solutionSteps.map((step, index) => (
                <li key={index} className="text-dark dark:text-light">
                  <strong>{step.title}:</strong> {step.description}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Results & Impact */}
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-darkest dark:text-lightest">
            Results & Impact
          </h3>

          {results.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    {result.metric}
                  </div>
                  <div className="text-sm text-dark dark:text-light">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {additionalOutcomes.length > 0 && (
            <ul className="list-disc list-inside space-y-2 text-dark dark:text-light">
              {additionalOutcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Tech Stack */}
        {technologies.length > 0 && (
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <strong className="text-darkest dark:text-lightest">
              Technologies:{" "}
            </strong>
            <span className="text-dark dark:text-light">
              {technologies.join(" · ")}
            </span>
          </div>
        )}
      </div>
    </article>
  )
}

export default CaseStudy
