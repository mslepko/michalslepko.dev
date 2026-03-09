import React from "react"
import { navigate } from "gatsby"
import SectionTitle from "../layout/SectionTitle"
import Project from "../cards/Project"
import Project1Image from "../../images/projects/notitasks.png"
import Project2Image from "../../images/projects/wp_care_plans.png"
import Project3Image from "../../images/projects/notion_widgets.png"
import Project4Image from "../../images/projects/phpunserialize.png"
import Project5Image from "../../images/projects/phpserialize.png"
import Project6Image from "../../images/projects/phpplayground.png"
import Project7Image from "../../images/projects/errorlogsemailer.png"
import Project8Image from "../../images/projects/failedactionsmonitor.png"
import Project9Image from "../../images/projects/zohofilters.png"
import Project10Image from "../../images/projects/sitemaptollms.png"

export const WORK_TYPES = [
  { slug: "tool", label: "Tool" },
  { slug: "saas", label: "SaaS" },
  { slug: "mobile-app", label: "Mobile App" },
  { slug: "browser-extension", label: "Browser Extension" },
  { slug: "wordpress-plugin", label: "WordPress Plugin" },
]

const projects = [
  {
    image: null,
    title: "Pi Champ",
    description:
      "A simple, focused app for memorizing the digits of Pi. Start from 3.14 and keep going. Type each digit from memory, track how far you get, and try to beat your personal best. Clean, distraction-free design with no ads, no accounts, no data collection. Works completely offline. Perfect for students, maths enthusiasts, or anyone who loves a good memory challenge.",
    url: "https://apps.apple.com/gb/app/pi-champ/id6759722282",
    workType: "mobile-app",
  },
  {
    image: null,
    title: "MultiStopwatch",
    description:
      "Run multiple stopwatches at once. Start all timers with one tap, reset all instantly, give each stopwatch its own colour, and rename timers for each child or task. Perfect for parents with multiple kids, morning and bedtime routines, teachers, sports, homework, cooking, and workouts. Clean, simple, distraction-free design. No account required. Works offline.",
    url: "https://apps.apple.com/gb/app/multistopwatch/id6759875356",
    workType: "mobile-app",
  },
  {
    image: Project10Image,
    title: "SitemapToLLMs",
    description:
      "A tool that converts XML sitemaps into structured llms.txt files, helping websites become AI-readable. Paste a sitemap URL and get a formatted llms.txt with smart URL filtering, semantic section naming, automatic grouping, and priority-based ordering. Free tier supports up to 5 sites with 100 URLs each; Pro tier offers up to 50,000 URLs per site with automated daily, weekly, or monthly regeneration and email notifications. Like robots.txt for search engines, but for AI.",
    url: "https://sitemaptollms.com/",
    workType: "saas",
  },
  {
    image: Project9Image,
    title: "Zoho CRM Filter Manager",
    description:
      "A Chrome extension designed to help Zoho CRM users manage and hide advanced filters to reduce clutter and improve productivity. Perfect for teams with many custom fields, this extension allows you to selectively hide individual filters or entire filter sections you don't use. Features include quick search functionality for finding filters, settings sync across devices for consistent experience, and a simple intuitive interface. Works seamlessly across all Zoho CRM modules with no data collection - all processing happens locally in your browser. Simply install, navigate to any Zoho CRM module, click the extension icon, uncheck the filters you want to hide, and click Apply Changes to instantly clean up your workspace.",
    url: "https://chromewebstore.google.com/detail/aghlmkeedjklojbjilbcliinpebjeobj",
    workType: "browser-extension",
  },
  {
    image: Project8Image,
    title: "Failed Actions Monitor for Action Scheduler",
    description:
      "A WordPress plugin that monitors failed Action Scheduler jobs and delivers daily email notifications about them at 5:00 AM server time. Designed for WooCommerce and other WordPress sites using Action Scheduler, this monitoring tool helps administrators stay informed about background job failures with configurable notification recipients and recovery mode email delivery support. Features include detailed failure reports with action IDs, hook names, and scheduled dates. With over 30 active installations, this plugin is essential for maintaining reliable scheduled tasks and background processes on WordPress sites.",
    url: "https://wordpress.org/plugins/failed-actions-monitor-for-action-scheduler/",
    workType: "wordpress-plugin",
  },
  {
    image: Project7Image,
    title: "Error Logs Emailer for WooCommerce",
    description:
      "A WordPress plugin that automatically delivers WooCommerce fatal error logs to specified email addresses, eliminating the need for manual log monitoring. Features automated error notifications sent daily at 5 AM, flexible email configuration with support for multiple recipients, and a user-friendly settings interface. Built with PHP and integrates with Action Scheduler for reliable scheduled delivery. With over 20 active installations and a 5-star rating, this plugin helps site administrators stay informed about errors without constantly checking logs. Perfect for WooCommerce store owners and developers who need proactive error monitoring.",
    url: "https://wordpress.org/plugins/error-logs-emailer-for-woocommerce/",
    workType: "wordpress-plugin",
  },
  {
    image: Project6Image,
    title: "PHP Playground Online",
    description:
      "An interactive online PHP development environment that allows developers to write, test, and execute PHP code directly in the browser. Features include syntax highlighting, error reporting, output formatting, and the ability to save and share code snippets. Built with modern web technologies for seamless performance and real-time code execution. Ideal for learning PHP, testing code snippets, debugging, and sharing code examples with other developers without requiring local PHP installation.",
    url: "https://phpplayground.online/",
    workType: "tool",
  },
  {
    image: Project5Image,
    title: "PHP Serialize Online",
    description:
      "An intuitive online tool that converts PHP arrays and objects into serialized strings for storage and transmission. Supports complex data structures including nested arrays, objects, and mixed data types with instant conversion and copy-to-clipboard functionality. Built with vanilla JavaScript for fast processing and clean, responsive interface. Perfect for developers who need to quickly serialize PHP data structures for database storage, caching, or API communication without setting up a local development environment.",
    url: "https://phpserialize.com/",
    workType: "tool",
  },
  {
    image: Project4Image,
    title: "PHP Unserialize Online",
    description:
      "A specialized web-based tool designed for PHP developers to easily convert serialized PHP data back into readable PHP data structures. Features include support for complex serialized arrays, objects, and nested data structures with real-time conversion and syntax highlighting. Built with modern JavaScript for instant processing and responsive design for optimal mobile experience. Essential for debugging, development, and educational purposes when working with PHP serialized data in databases or configuration files.",
    url: "https://phpunserialize.com/",
    workType: "tool",
  },
  {
    image: Project3Image,
    title: "Notion Widgets",
    description:
      "A collection of customizable widgets and tools designed to enhance Notion workspace functionality. Includes productivity widgets like countdown timers, progress bars, weather displays, and interactive forms that can be seamlessly embedded into any Notion page. Built with vanilla JavaScript for lightweight performance and deployed on Vercel for global CDN distribution. Ideal for Notion power users seeking to create more dynamic and interactive workspaces.",
    url: "https://notion-with-widgets.vercel.app/",
    github: "https://github.com/mslepko/notion-widgets",
    workType: "tool",
  },
  {
    image: Project2Image,
    title: "WordPress Care Plans",
    description:
      "A professional landing page showcasing comprehensive WordPress maintenance and support services. Features include automated security monitoring, performance optimization, regular backups, and 24/7 technical support. Built with semantic HTML5, jQuery for interactive elements, and responsive CSS3 for optimal mobile experience. Designed to convert visitors into long-term WordPress care clients with clear service offerings and trust indicators.",
    url: "https://wp-maintenance.pro/",
    github: "https://github.com/rootscopeltd/wp.rootscope.dev",
    workType: "saas",
  },
  {
    image: Project1Image,
    title: "NotiTasks",
    description:
      "A comprehensive task management solution designed specifically for Notion users. This productivity tool streamlines task organization with intuitive features including drag-and-drop functionality, priority tagging, and deadline tracking. Built with modern web technologies including Next.js for optimal performance, TailwindCSS for responsive design, ChakraUI for accessible components, and Supabase for real-time database functionality. Perfect for developers and teams looking to enhance their Notion workflow with advanced task management capabilities.",
    url: "https://notitasks.com/",
    workType: "saas",
  },
]

export default function Work({ activeFilter, showFilters }) {
  const filteredProjects = activeFilter
    ? projects.filter(p => p.workType === activeFilter)
    : projects

  const handleFilterClick = slug => {
    if (slug === activeFilter) {
      navigate("/projects/")
    } else {
      navigate(`/projects/${slug}/`)
    }
  }

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Michal Slepko's Portfolio Projects",
    description:
      "A collection of software development projects showcasing web applications, productivity tools, PHP development tools, WordPress plugins, and technical solutions built with modern technologies.",
    numberOfItems: filteredProjects.length,
    itemListElement: filteredProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web Browser",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  }

  return (
    <section
      className="work section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <script type="application/ld+json">
        {JSON.stringify(portfolioSchema)}
      </script>

      <article className="inner-container">
        <header className="title">
          <SectionTitle subtitle={"What have I made?"} title={"Work"} />
          <p className="text-dark dark:text-light">
            A collection of software development hobby projects showcasing web
            applications, productivity tools, PHP development tools, WordPress
            plugins, and technical solutions built with modern technologies.
          </p>

          {showFilters && (
            <div className="flex flex-wrap gap-2 mt-4">
              <button
                onClick={() => navigate("/projects/")}
                className={`btn-sm cursor-pointer ${
                  !activeFilter ? "btn-brand" : "btn-outline"
                }`}
              >
                All
              </button>
              {WORK_TYPES.map(type => (
                <button
                  key={type.slug}
                  onClick={() => handleFilterClick(type.slug)}
                  className={`btn-sm cursor-pointer ${
                    type.slug === activeFilter ? "btn-brand" : "btn-outline"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          )}
        </header>

        <div className="content" itemProp="itemListElement">
          {filteredProjects.map(project => (
            <Project
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              url={project.url}
              github={project.github}
            />
          ))}

          {filteredProjects.length === 0 && (
            <p className="text-dark dark:text-light col-span-full text-center py-8">
              No projects found for this category.
            </p>
          )}
        </div>
      </article>
    </section>
  )
}
