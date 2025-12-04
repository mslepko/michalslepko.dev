import React from "react"
import { Link } from "gatsby"
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

export default function PersonalProjects() {
  // Schema markup for personal projects
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Michal Slepko's Personal Projects & Open Source",
    description:
      "Side projects, open-source tools, and technical experiments by Michal Slepko. Exploring new frameworks, solving developer problems, and building useful utilities.",
    numberOfItems: 9,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "Zoho CRM Filter Manager",
          description:
            "A Chrome extension that helps users manage and hide Zoho CRM advanced filters to reduce clutter.",
          applicationCategory: "BrowserApplication",
          operatingSystem: "Chrome",
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
      {
        "@type": "ListItem",
        position: 3,
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
        position: 4,
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
        position: 7,
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
        position: 8,
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
        position: 9,
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
    ],
  }

  return (
    <section
      className="personal-projects section"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <script type="application/ld+json">
        {JSON.stringify(portfolioSchema)}
      </script>

      <article className="inner-container">
        <header className="title mb-8">
          <SectionTitle
            subtitle={"What I've Built"}
            title={"Personal Projects & Open Source"}
          />
          <p className="text-dark dark:text-light mb-4">
            Side projects and developer tools I build to explore new
            technologies, solve real problems, and contribute to the developer
            community.
          </p>
          <p className="text-dark dark:text-light mb-6">
            Beyond client work, I enjoy building tools that make developers'
            lives easier. These projects let me experiment with new frameworks,
            contribute to open source, and scratch my own itches. Some have
            grown to serve hundreds of users worldwide.
          </p>
          <div className="mb-8">
            <Link
              to="/work/"
              className="inline-block px-6 py-3 bg-darkest dark:bg-lightest text-lightest dark:text-darkest rounded-lg hover:opacity-80 transition-opacity"
            >
              View Professional Work →
            </Link>
          </div>
        </header>

        <div className="content" itemProp="itemListElement">
          {/* Zoho CRM Filter Manager */}
          <Project
            image={Project9Image}
            title="Zoho CRM Filter Manager"
            description="What it does: A Chrome extension that helps Zoho CRM users hide unnecessary filters and reduce interface clutter.

Why I built it: After working with clients using Zoho CRM with dozens of custom fields, I noticed teams spent too much time scrolling through filters they never used. This extension solves that frustration.

Who uses it: Sales teams and CRM administrators who want a cleaner, more focused Zoho interface.

Built with: JavaScript · Chrome Extension API · Local Storage"
            url="https://chromewebstore.google.com/detail/aghlmkeedjklojbjilbcliinpebjeobj"
          />

          {/* Failed Actions Monitor for Action Scheduler */}
          <Project
            image={Project8Image}
            title="Failed Actions Monitor for Action Scheduler"
            description="What it does: WordPress plugin that monitors failed background jobs and sends daily email notifications.

Why I built it: While managing 70+ WordPress sites, I discovered that silent Action Scheduler failures caused missed orders and broken automation. Store owners only found out when customers complained. This plugin catches issues proactively.

Who uses it: WooCommerce store owners and WordPress site administrators who rely on scheduled tasks.

Built with: PHP · WordPress Plugin API · Action Scheduler · WP-Cron

Impact:
✓ 30+ active installations
✓ Prevents estimated $2K-5K monthly revenue loss per site
✓ Featured on WordPress.org plugin repository"
            url="https://wordpress.org/plugins/failed-actions-monitor-for-action-scheduler/"
          />

          {/* Error Logs Emailer for WooCommerce */}
          <Project
            image={Project7Image}
            title="Error Logs Emailer for WooCommerce"
            description="What it does: Automatically delivers WooCommerce fatal error logs to specified email addresses daily.

Why I built it: Manual log monitoring is tedious and errors get missed. This plugin ensures critical issues are flagged immediately without requiring server access.

Who uses it: WordPress developers and store owners who need proactive error monitoring.

Built with: PHP · WordPress · WooCommerce · Action Scheduler

Impact:
✓ 20+ active installations
✓ 5-star rating on WordPress.org
✓ Reduces time-to-resolution for critical errors"
            url="https://wordpress.org/plugins/error-logs-emailer-for-woocommerce/"
          />

          {/* PHP Playground Online */}
          <Project
            image={Project6Image}
            title="PHP Playground Online"
            description="What it does: Interactive browser-based PHP development environment for writing, testing, and executing PHP code.

Why I built it: When teaching developers or debugging code snippets, I wanted a quick way to test PHP without spinning up a local environment. Now used by developers worldwide for learning and sharing code.

Who uses it: PHP learners, educators, and developers who need to quickly test code snippets.

Built with: PHP · JavaScript · Syntax Highlighting · Real-time Execution"
            url="https://phpplayground.online/"
          />

          {/* PHP Serialize/Unserialize Tools */}
          <Project
            image={Project5Image}
            title="PHP Serialize Online"
            description="What it does: Web-based tool to convert between PHP data structures and serialized strings.

Why I built it: Working with WordPress databases means dealing with serialized data constantly. This tool eliminates the need for local PHP environments just to serialize data.

Who uses it: PHP and WordPress developers debugging database entries, working with options tables, or testing API payloads.

Built with: JavaScript · PHP · Responsive Design"
            url="https://phpserialize.com/"
          />

          <Project
            image={Project4Image}
            title="PHP Unserialize Online"
            description="What it does: Web-based tool to convert serialized PHP strings back into readable data structures.

Why I built it: Working with WordPress databases means dealing with serialized data constantly. This tool eliminates the need for local PHP environments just to unserialize data.

Who uses it: PHP and WordPress developers debugging database entries, working with options tables, or testing API payloads.

Built with: JavaScript · PHP · Responsive Design"
            url="https://phpunserialize.com/"
          />

          {/* Notion Widgets */}
          <Project
            image={Project3Image}
            title="Notion Widgets"
            description="What it does: Collection of customizable widgets (countdown timers, progress bars, weather displays) for embedding in Notion pages.

Why I built it: Notion's flexibility is powerful, but lacks certain interactive elements. These widgets let power users create more dynamic workspaces.

Who uses it: Notion power users and productivity enthusiasts seeking enhanced workspace functionality.

Built with: JavaScript · Vercel · CDN Distribution"
            url="https://notion-with-widgets.vercel.app/"
            github="https://github.com/mslepko/notion-widgets"
          />

          {/* WordPress Care Plans */}
          <Project
            image={Project2Image}
            title="WordPress Care Plans"
            description="What it does: Professional landing page template for WordPress maintenance services.

Why I built it: While building Rootscope, I needed an effective way to showcase WordPress care services. This template converts visitors into long-term maintenance clients.

Who uses it: WordPress agencies and freelancers offering maintenance packages.

Built with: HTML5 · CSS3 · jQuery · Responsive Design"
            url="https://wp-maintenance.pro/"
            github="https://github.com/rootscopeltd/wp.rootscope.dev"
          />

          {/* NotiTasks */}
          <Project
            image={Project1Image}
            title="NotiTasks"
            description="What it does: Comprehensive task management solution designed specifically for Notion users with drag-and-drop, priority tagging, and deadline tracking.

Why I built it: Notion's database views are powerful but lack the fluidity of dedicated task managers. This bridges that gap with real-time updates and an intuitive interface.

Who uses it: Notion users and development teams managing projects within Notion.

Built with: Next.js · TailwindCSS · ChakraUI · Supabase"
            url="https://notitasks.com/"
          />
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-darkest dark:text-lightest">
            Looking for Professional Work Examples?
          </h2>
          <p className="text-dark dark:text-light mb-6 max-w-2xl mx-auto">
            These personal projects showcase my technical range and
            problem-solving approach. For case studies of client work,
            performance optimizations, and enterprise solutions, check out my
            professional portfolio.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/work/"
              className="inline-block px-6 py-3 bg-darkest dark:bg-lightest text-lightest dark:text-darkest rounded-lg hover:opacity-80 transition-opacity"
            >
              View Professional Work →
            </Link>
            <Link
              to="/resume/"
              className="inline-block px-6 py-3 border-2 border-darkest dark:border-lightest text-darkest dark:text-lightest rounded-lg hover:bg-darkest hover:text-lightest dark:hover:bg-lightest dark:hover:text-darkest transition-colors"
            >
              Download Full CV
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}
