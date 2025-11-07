import React from "react"
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

export default function Work() {
  // Schema markup for the portfolio
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Michal Slepko's Portfolio Projects",
    description:
      "A collection of software development projects showcasing web applications, productivity tools, PHP development tools, WordPress plugins, and technical solutions built with modern technologies.",
    numberOfItems: 8,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "NotiTasks",
          description:
            "A comprehensive task management solution designed specifically for Notion users.",
          applicationCategory: "ProductivityApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "WebSite",
          name: "WordPress Care Plans",
          description:
            "A professional landing page showcasing comprehensive WordPress maintenance and support services.",
          applicationCategory: "BrowserApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "SoftwareApplication",
          name: "Notion Widgets",
          description:
            "A collection of customizable widgets and tools designed to enhance Notion workspace functionality.",
          applicationCategory: "ProductivityApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "WebApplication",
          name: "PHP Unserialize Online",
          description:
            "An online tool for converting serialized PHP data back into readable PHP data structures.",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "WebApplication",
          name: "PHP Serialize Online",
          description:
            "A web-based tool for converting PHP arrays and objects into serialized strings.",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "WebApplication",
          name: "PHP Playground Online",
          description:
            "An interactive online environment for testing and experimenting with PHP code.",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 7,
        item: {
          "@type": "SoftwareApplication",
          name: "Error Logs Emailer for WooCommerce",
          description:
            "A WordPress plugin that automatically delivers WooCommerce fatal error logs to specified email addresses.",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "WordPress",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 8,
        item: {
          "@type": "SoftwareApplication",
          name: "Failed Actions Monitor for Action Scheduler",
          description:
            "A WordPress plugin that monitors failed Action Scheduler jobs and delivers daily email notifications.",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "WordPress",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      },
    ],
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
            applications, productivity tools, PHP development tools, WordPress plugins, and
            technical solutions built with modern technologies.
          </p>
        </header>

        <div className="content" itemProp="itemListElement">
          {/* Project 1 */}
          <Project
            image={Project1Image}
            title="NotiTasks"
            description="A comprehensive task management solution designed specifically for Notion users. This productivity tool streamlines task organization with intuitive features including drag-and-drop functionality, priority tagging, and deadline tracking. Built with modern web technologies including Next.js for optimal performance, TailwindCSS for responsive design, ChakraUI for accessible components, and Supabase for real-time database functionality. Perfect for developers and teams looking to enhance their Notion workflow with advanced task management capabilities."
            url="https://notitasks.com/"
          />

          {/* Project 2 */}
          <Project
            image={Project2Image}
            title="WordPress Care Plans"
            description="A professional landing page showcasing comprehensive WordPress maintenance and support services. Features include automated security monitoring, performance optimization, regular backups, and 24/7 technical support. Built with semantic HTML5, jQuery for interactive elements, and responsive CSS3 for optimal mobile experience. Designed to convert visitors into long-term WordPress care clients with clear service offerings and trust indicators."
            url="https://wp-maintenance.pro/"
            github="https://github.com/rootscopeltd/wp.rootscope.dev"
          />

          {/* Project 3 */}
          <Project
            image={Project3Image}
            title="Notion Widgets"
            description="A collection of customizable widgets and tools designed to enhance Notion workspace functionality. Includes productivity widgets like countdown timers, progress bars, weather displays, and interactive forms that can be seamlessly embedded into any Notion page. Built with vanilla JavaScript for lightweight performance and deployed on Vercel for global CDN distribution. Ideal for Notion power users seeking to create more dynamic and interactive workspaces."
            url="https://notion-with-widgets.vercel.app/"
            github="https://github.com/mslepko/notion-widgets"
          />

          {/* Project 4 */}
          <Project
            image={Project4Image}
            title="PHP Unserialize Online"
            description="A specialized web-based tool designed for PHP developers to easily convert serialized PHP data back into readable PHP data structures. Features include support for complex serialized arrays, objects, and nested data structures with real-time conversion and syntax highlighting. Built with modern JavaScript for instant processing and responsive design for optimal mobile experience. Essential for debugging, development, and educational purposes when working with PHP serialized data in databases or configuration files."
            url="https://phpunserialize.com/"
          />

          {/* Project 5 */}
          <Project
            image={Project5Image}
            title="PHP Serialize Online"
            description="An intuitive online tool that converts PHP arrays and objects into serialized strings for storage and transmission. Supports complex data structures including nested arrays, objects, and mixed data types with instant conversion and copy-to-clipboard functionality. Built with vanilla JavaScript for fast processing and clean, responsive interface. Perfect for developers who need to quickly serialize PHP data structures for database storage, caching, or API communication without setting up a local development environment."
            url="https://phpserialize.com/"
          />

          {/* Project 6 */}
          <Project
            image={Project6Image}
            title="PHP Playground Online"
            description="An interactive online PHP development environment that allows developers to write, test, and execute PHP code directly in the browser. Features include syntax highlighting, error reporting, output formatting, and the ability to save and share code snippets. Built with modern web technologies for seamless performance and real-time code execution. Ideal for learning PHP, testing code snippets, debugging, and sharing code examples with other developers without requiring local PHP installation."
            url="https://phpplayground.online/"
          />

          {/* Project 7 */}
          <Project
            image={Project7Image}
            title="Error Logs Emailer for WooCommerce"
            description="A WordPress plugin that automatically delivers WooCommerce fatal error logs to specified email addresses, eliminating the need for manual log monitoring. Features automated error notifications sent daily at 5 AM, flexible email configuration with support for multiple recipients, and a user-friendly settings interface. Built with PHP and integrates with Action Scheduler for reliable scheduled delivery. With over 20 active installations and a 5-star rating, this plugin helps site administrators stay informed about errors without constantly checking logs. Perfect for WooCommerce store owners and developers who need proactive error monitoring."
            url="https://wordpress.org/plugins/error-logs-emailer-for-woocommerce/"
          />

          {/* Project 8 */}
          <Project
            image={Project8Image}
            title="Failed Actions Monitor for Action Scheduler"
            description="A WordPress plugin that monitors failed Action Scheduler jobs and delivers daily email notifications about them at 5:00 AM server time. Designed for WooCommerce and other WordPress sites using Action Scheduler, this monitoring tool helps administrators stay informed about background job failures with configurable notification recipients and recovery mode email delivery support. Features include detailed failure reports with action IDs, hook names, and scheduled dates. With over 30 active installations, this plugin is essential for maintaining reliable scheduled tasks and background processes on WordPress sites."
            url="https://wordpress.org/plugins/failed-actions-monitor-for-action-scheduler/"
          />
        </div>
      </article>
    </section>
  )
}
