import React from "react"
import { Link } from "gatsby"
import SectionTitle from "../layout/SectionTitle"
import CaseStudy from "../cards/CaseStudy"

export default function ProfessionalWork() {
  // Schema markup for professional work
  const professionalSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michal Slepko",
    jobTitle: "Senior Full-Stack Developer",
    url: "https://michalslepko.dev/work/",
    sameAs: [
      "https://github.com/mslepko",
      "https://www.linkedin.com/in/michalslepko",
      "https://instagram.com/michal.codes",
    ],
    knowsAbout: [
      "WordPress Development",
      "Laravel Development",
      "E-Commerce Optimization",
      "Performance Optimization",
      "Server Administration",
    ],
  }

  return (
    <section className="professional-work section">
      <script type="application/ld+json">
        {JSON.stringify(professionalSchema)}
      </script>

      <article className="inner-container">
        {/* Hero Section */}
        <header className="title mb-12 text-center">
          <SectionTitle
            subtitle={"Professional Portfolio"}
            title={"Professional Work & Case Studies"}
          />
          <p className="text-lg text-dark dark:text-light mb-4 max-w-3xl mx-auto">
            14+ years building high-performance WordPress, Laravel, and
            e-commerce solutions for agencies, startups, and enterprise clients.
          </p>
          <p className="text-dark dark:text-light mb-6 max-w-3xl mx-auto">
            I specialize in solving complex technical challenges that directly
            impact business revenue: performance optimization, scaling
            infrastructure, custom integrations, and rescue operations for
            struggling platforms. Below are selected examples of how I've helped
            clients grow and succeed.
          </p>
          <div className="flex gap-8 justify-center text-sm font-semibold text-dark dark:text-light">
            <div>70+ Sites Managed</div>
            <div>14+ Years Experience</div>
            <div>300K+ Orders Processed Daily</div>
          </div>
        </header>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-darkest dark:text-lightest">
            Featured Client Work
          </h2>

          {/* Case Study 1: E-Commerce Performance Rescue */}
          <CaseStudy
            category="Performance Optimization"
            title="Rescuing a High-Traffic WooCommerce Platform from Performance Crisis"
            client="ProDog Raw (UK-based raw pet food retailer)"
            industry="E-Commerce / Pet Products"
            timeline="August 2023 - Present"
            role="Senior Web Developer"
            challenge="A growing e-commerce business was losing sales due to a slow, unstable WordPress/WooCommerce platform. The site handled 300+ orders daily but struggled under load, with customers abandoning carts during slow checkouts and the site frequently crashing during promotional campaigns."
            painPoints={[
              "Page load times averaging 4+ seconds, far above industry standards",
              "Database queries timing out during peak hours causing white screens",
              "Site infrastructure unable to scale with growing order volume",
              "Previous attempts at optimization yielded minimal improvements",
              "Business Impact: Estimated £15,000+ monthly revenue loss to cart abandonment",
            ]}
            solution="I conducted a comprehensive performance audit and implemented systematic optimizations across the full stack:"
            solutionSteps={[
              {
                title: "Database Optimization",
                description:
                  "Identified and resolved N+1 query problems in custom WooCommerce code, reducing queries per page from 180 to 35",
              },
              {
                title: "Caching Strategy",
                description:
                  "Implemented Redis object caching, eliminating 60% of database load",
              },
              {
                title: "Query Tuning",
                description:
                  "Optimized slow MySQL queries through proper indexing and query restructuring",
              },
              {
                title: "Server Configuration",
                description:
                  "Reconfigured PHP-FPM and Nginx for better concurrency handling",
              },
              {
                title: "Monitoring",
                description:
                  "Set up New Relic monitoring to catch performance regressions early",
              },
            ]}
            results={[
              { metric: "74%", label: "Load time reduction (4.2s → 1.1s)" },
              { metric: "80%", label: "Database queries reduced (180 → 35)" },
              {
                metric: "28%",
                label: "Checkout improvement (45% → 32% abandonment)",
              },
              {
                metric: "99.9%",
                label: "Uptime during Black Friday (previously crashed)",
              },
            ]}
            additionalOutcomes={[
              "Performance improvements paid for themselves within 2 weeks through reduced cart abandonment",
              "Site now comfortably handles 500+ concurrent users during promotions",
              "Client able to launch aggressive marketing campaigns without infrastructure concerns",
              "Ongoing maintenance contract secured based on results",
            ]}
            technologies={[
              "PHP",
              "WordPress",
              "WooCommerce",
              "Redis",
              "MySQL",
              "Nginx",
              "PHP-FPM",
              "New Relic",
              "Linux Server Administration",
            ]}
          />

          {/* Case Study 2: Complex Nonprofit Integration */}
          <CaseStudy
            category="Custom Integration"
            title="Building Custom Salesforce Integration for Nonprofit Donation Platform"
            client="Lyric Stage (Boston-area nonprofit theater)"
            industry="Nonprofit / Arts & Culture"
            timeline="2020 - 2022"
            role="Full-Stack Developer"
            challenge="A nonprofit theater organization needed a seamless way to process online donations while maintaining accurate donor records in Salesforce CRM. Their existing donation form was disconnected from their CRM, requiring manual data entry that was error-prone, time-consuming, and delayed donor acknowledgment."
            painPoints={[
              "Manual data entry into Salesforce took 2-3 hours daily for development staff",
              "Donor data inconsistencies between payment processor and CRM",
              "Delayed donation receipts frustrated donors during fundraising campaigns",
              "No ability to track donation campaigns or donor retention effectively",
              "Risk of data loss during manual transfer process",
            ]}
            solution="Built a custom WordPress donation form with real-time Salesforce integration:"
            solutionSteps={[
              {
                title: "Custom Form Builder",
                description:
                  "Developed flexible donation form with multiple giving levels, recurring donations, and tribute options",
              },
              {
                title: "Salesforce API Integration",
                description:
                  "Real-time bidirectional sync between WordPress and Salesforce using REST API",
              },
              {
                title: "Payment Processing",
                description:
                  "Integrated Stripe payment gateway with PCI compliance",
              },
              {
                title: "Data Mapping",
                description:
                  "Custom field mapping to match organization's Salesforce structure and reporting needs",
              },
              {
                title: "Error Handling",
                description:
                  "Robust logging and retry mechanisms to prevent data loss",
              },
            ]}
            results={[
              {
                metric: "100%",
                label: "Automation of donation data entry (2-3 hrs saved daily)",
              },
              { metric: "Instant", label: "Donor acknowledgment via automation" },
              { metric: "Zero", label: "Data discrepancies between systems" },
              { metric: "25%+", label: "Increase in online donations" },
            ]}
            additionalOutcomes={[
              "Development team freed to focus on donor relationships instead of data entry",
              "Campaign tracking now accurate and real-time, enabling better fundraising strategies",
              "Donor satisfaction improved through immediate receipts and proper acknowledgment",
              "Platform now scalable for future fundraising growth",
            ]}
            technologies={[
              "PHP",
              "WordPress",
              "Salesforce REST API",
              "Stripe API",
              "JavaScript",
              "MySQL",
              "OAuth 2.0",
            ]}
          />

          {/* Case Study 3: WordPress Multisite at Scale */}
          <CaseStudy
            category="Enterprise WordPress"
            title="Managing 70+ WordPress Sites with Centralized Infrastructure"
            client="Multiple agency clients and direct businesses"
            industry="Various (E-Commerce, Publishing, Services, Nonprofit)"
            timeline="December 2015 - Present"
            role="Founder & Senior Developer, Rootscope Limited"
            challenge="As Rootscope grew, managing dozens of WordPress sites across multiple servers became increasingly complex. Each site had unique requirements, but common issues emerged: security vulnerabilities, plugin conflicts, performance degradation, and the need for rapid emergency response when sites went down."
            painPoints={[
              "Manual updates across 70+ sites consumed excessive time",
              "Security vulnerabilities exposed multiple clients simultaneously",
              "No centralized monitoring meant issues discovered only when clients reported them",
              "Server resources inefficiently allocated across shared hosting",
              "Emergency support requests required rapid context-switching between different codebases",
            ]}
            solution="Developed a comprehensive management system and standardized infrastructure:"
            solutionSteps={[
              {
                title: "Centralized Monitoring",
                description:
                  "Implemented uptime monitoring, performance tracking, and automated security scanning across all sites",
              },
              {
                title: "Update Management",
                description:
                  "Created systematic update workflow with staging environment testing before production deployment",
              },
              {
                title: "Server Optimization",
                description:
                  "Migrated sites to optimized VPS infrastructure with proper resource allocation",
              },
              {
                title: "Security Hardening",
                description:
                  "Implemented firewall rules, malware scanning, and hardened WordPress configurations",
              },
              {
                title: "Documentation System",
                description:
                  "Built internal knowledge base with site-specific configurations and common issue resolutions",
              },
            ]}
            results={[
              {
                metric: "75%",
                label: "Reduction in emergency tickets via monitoring",
              },
              { metric: "99.8%", label: "Average uptime across all sites" },
              {
                metric: "90%",
                label: "Reduction in update time via systematization",
              },
              {
                metric: "Zero",
                label: "Security breaches across managed sites in 8+ years",
              },
            ]}
            additionalOutcomes={[
              "Scaled from 20 sites to 70+ without proportional staff increase",
              "Client retention rate above 95% due to reliable service",
              "Emergency response time reduced from hours to minutes",
              "Business model evolved from reactive support to proactive management with predictable revenue",
            ]}
            technologies={[
              "PHP",
              "WordPress",
              "Linux",
              "Bash",
              "Nginx",
              "MySQL",
              "Redis",
              "Git",
              "Custom Monitoring Tools",
              "Automated Backup Systems",
            ]}
          />

          {/* Case Study 4: Legacy Platform Modernization */}
          <CaseStudy
            category="Legacy Code Rescue"
            title="Maintaining and Modernizing High-Traffic E-Commerce Platform"
            client="Estée Lauder Companies / ELC corporate projects"
            industry="E-Commerce / Beauty & Cosmetics"
            timeline="2016 - 2018"
            role="Contract Full-Stack Developer"
            challenge="A legacy e-commerce platform built with older PHP5 and custom Perl systems was mission-critical but increasingly difficult to maintain. The platform handled significant daily transaction volume, but the aging codebase made adding features risky and security patches challenging. The business needed someone who could work confidently with legacy code while gradually modernizing the platform."
            painPoints={[
              "Outdated PHP5 codebase with deprecated functions and security vulnerabilities",
              "Mixed technology stack (PHP, Perl, JavaScript) with limited documentation",
              "Fear of breaking production systems made developers avoid necessary updates",
              "Performance degradation as traffic grew beyond original design specifications",
              "Difficulty finding developers willing to work with legacy systems",
            ]}
            solution="Took a methodical approach to maintaining reliability while modernizing incrementally:"
            solutionSteps={[
              {
                title: "Stability First",
                description:
                  "Implemented comprehensive error logging and monitoring before making changes",
              },
              {
                title: "Strategic Refactoring",
                description:
                  "Identified high-risk code sections and refactored incrementally with extensive testing",
              },
              {
                title: "Performance Optimization",
                description:
                  "Profiled and optimized database queries and resource-intensive operations",
              },
              {
                title: "Security Hardening",
                description:
                  "Applied security patches and gradually upgraded PHP version with compatibility testing",
              },
              {
                title: "Documentation",
                description:
                  "Created technical documentation for future developers working with the system",
              },
            ]}
            results={[
              {
                metric: "99.9%+",
                label: "Uptime despite fragile legacy codebase",
              },
              {
                metric: "40%",
                label: "Performance improvement via targeted optimization",
              },
              {
                metric: "Zero",
                label: "Production incidents caused by code changes",
              },
              {
                metric: "Success",
                label: "Upgraded critical components without downtime",
              },
            ]}
            additionalOutcomes={[
              "Business continuity maintained during transition planning for platform replacement",
              "Executive confidence in technical team restored through reliable delivery",
              "Platform lifespan extended 2+ years beyond expected retirement, saving migration costs",
              "Established reputation as developer who can handle challenging legacy systems",
            ]}
            technologies={[
              "PHP (PHP5 → PHP7)",
              "Perl",
              "JavaScript",
              "MySQL",
              "Linux",
              "Legacy System Maintenance",
              "Incremental Refactoring",
            ]}
          />
        </div>

        {/* Technical Capabilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-darkest dark:text-lightest">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-darkest dark:text-lightest">
                E-Commerce Development
              </h3>
              <ul className="space-y-2 text-dark dark:text-light">
                <li>WooCommerce custom development</li>
                <li>Payment gateway integrations</li>
                <li>Custom shipping calculators</li>
                <li>Order management systems</li>
                <li>Shopify theme development</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-darkest dark:text-lightest">
                Performance Optimization
              </h3>
              <ul className="space-y-2 text-dark dark:text-light">
                <li>Database query optimization</li>
                <li>Redis/Memcached implementation</li>
                <li>PHP-FPM tuning</li>
                <li>CDN configuration</li>
                <li>Load testing & profiling</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-darkest dark:text-lightest">
                WordPress Expertise
              </h3>
              <ul className="space-y-2 text-dark dark:text-light">
                <li>Custom theme development</li>
                <li>Plugin development</li>
                <li>Multisite management</li>
                <li>Security hardening</li>
                <li>Maintenance at scale (70+ sites)</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-darkest dark:text-lightest">
                Laravel Development
              </h3>
              <ul className="space-y-2 text-dark dark:text-light">
                <li>Custom application development</li>
                <li>API development & integration</li>
                <li>Database design & optimization</li>
                <li>Queue & job management</li>
                <li>SaaS product development</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-darkest dark:text-lightest">
                Server & DevOps
              </h3>
              <ul className="space-y-2 text-dark dark:text-light">
                <li>Linux server administration</li>
                <li>Nginx/Apache configuration</li>
                <li>Database administration (MySQL/MariaDB)</li>
                <li>Backup & disaster recovery</li>
                <li>Security & monitoring</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-darkest dark:text-lightest">
                Third-Party Integrations
              </h3>
              <ul className="space-y-2 text-dark dark:text-light">
                <li>Salesforce API</li>
                <li>Stripe payment processing</li>
                <li>Email marketing platforms</li>
                <li>CRM systems (Zoho, HubSpot)</li>
                <li>RESTful API development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-darkest dark:text-lightest">
            Let's Discuss Your Project
          </h2>
          <p className="text-dark dark:text-light mb-8 max-w-2xl mx-auto">
            I work with agencies, e-commerce businesses, and startups who need
            reliable technical expertise for complex WordPress, Laravel, and
            e-commerce challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-darkest dark:text-lightest">
                For Agencies
              </h3>
              <p className="text-dark dark:text-light mb-4">
                White-label development, overflow work, and technical rescue
                projects
              </p>
              <a
                href="https://rootscope.dev/"
                className="inline-block px-4 py-2 bg-darkest dark:bg-lightest text-lightest dark:text-darkest rounded hover:opacity-80 transition-opacity"
                rel="noopener noreferrer"
              >
                Visit Rootscope →
              </a>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-darkest dark:text-lightest">
                For Direct Clients
              </h3>
              <p className="text-dark dark:text-light mb-4">
                Custom development, maintenance contracts, and technical
                consulting
              </p>
              <a
                href="mailto:michal@michalslepko.dev"
                className="inline-block px-4 py-2 bg-darkest dark:bg-lightest text-lightest dark:text-darkest rounded hover:opacity-80 transition-opacity"
              >
                Get in Touch →
              </a>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-darkest dark:text-lightest">
                For Hiring Managers
              </h3>
              <p className="text-dark dark:text-light mb-4">
                Contract or full-time opportunities for senior development roles
              </p>
              <Link
                to="/resume/"
                className="inline-block px-4 py-2 border-2 border-darkest dark:border-lightest text-darkest dark:text-lightest rounded hover:bg-darkest hover:text-lightest dark:hover:bg-lightest dark:hover:text-darkest transition-colors"
              >
                View Resume →
              </Link>
            </div>
          </div>

          <div className="text-dark dark:text-light">
            <p>
              Want to see what else I'm working on?{" "}
              <Link
                to="/projects/"
                className="underline hover:text-darkest dark:hover:text-lightest"
              >
                Check out my personal projects →
              </Link>
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}
