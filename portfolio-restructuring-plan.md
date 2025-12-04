# Complete Project Page Restructuring Plan

## Overview
This plan creates a two-tier portfolio structure:
1. **Step 1:** Restructure current `/projects/` page for hobby/personal projects
2. **Step 2:** Create new `/work/` page showcasing professional client projects

---

## STEP 1: Restructure /projects/ Page (Personal/Hobby Projects)

### Objective
Transform the projects page into a clearly labeled "Personal Projects & Experiments" showcase that demonstrates technical curiosity without overshadowing commercial work.

### File Location
`/projects/` (or `projects.html`, `projects/index.html` - whatever your current structure is)

### Page Structure

```
/projects/
├── Hero Section
├── Introduction/Context
├── Projects Grid/List
└── CTA Section
```

### Detailed Content Requirements

#### **1. Page Title & Meta**
```html
<title>Personal Projects & Experiments | Michal Slepko</title>
<meta name="description" content="Side projects, open-source tools, and technical experiments by Michal Slepko. Exploring new frameworks, solving developer problems, and building useful utilities.">
```

#### **2. Hero Section**
**Heading:** 
```
Personal Projects & Open Source
```

**Subheading:**
```
Side projects and developer tools I build to explore new technologies, 
solve real problems, and contribute to the developer community.
```

**Optional context paragraph:**
```
Beyond client work, I enjoy building tools that make developers' lives 
easier. These projects let me experiment with new frameworks, contribute 
to open source, and scratch my own itches. Some have grown to serve 
hundreds of users worldwide.
```

**Call-to-Action Button:**
```
[View Professional Work →] (links to /work/)
```

#### **3. Projects Section**

**Section Heading:**
```
What I've Built
```

**Project Card Template:**
Each project should follow this structure:

```html
<article class="project-card">
  <!-- Project Header -->
  <div class="project-header">
    <h3>[Project Name]</h3>
    <div class="project-meta">
      <span class="badge">[Category: WordPress Plugin | Chrome Extension | Web Tool]</span>
      <span class="badge">[Status: Active | Maintained | Experiment]</span>
    </div>
  </div>

  <!-- Project Description -->
  <div class="project-description">
    <p><strong>What it does:</strong> [1-2 sentence description]</p>
    <p><strong>Why I built it:</strong> [The problem/motivation]</p>
    <p><strong>Who uses it:</strong> [Target audience + any metrics]</p>
  </div>

  <!-- Tech Stack -->
  <div class="tech-stack">
    <strong>Built with:</strong> [Tech1] · [Tech2] · [Tech3]
  </div>

  <!-- Impact/Stats (if available) -->
  <div class="project-stats">
    <span>✓ [30+ active installations]</span>
    <span>✓ [5-star rating]</span>
    <span>✓ [Featured on WordPress.org]</span>
  </div>

  <!-- Links -->
  <div class="project-links">
    <a href="[live-url]">View Live →</a>
    <a href="[github-url]">Source Code</a>
    <a href="[demo-url]">Try Demo</a>
  </div>
</article>
```

#### **4. Rewrite All Existing Projects**

**Apply this formula to each project:**

---

**ZOHO CRM FILTER MANAGER**

**What it does:** A Chrome extension that helps Zoho CRM users hide unnecessary filters and reduce interface clutter.

**Why I built it:** After working with clients using Zoho CRM with dozens of custom fields, I noticed teams spent too much time scrolling through filters they never used. This extension solves that frustration.

**Who uses it:** Sales teams and CRM administrators who want a cleaner, more focused Zoho interface.

**Built with:** JavaScript · Chrome Extension API · Local Storage

**Links:** [Chrome Web Store] [Source Code]

---

**FAILED ACTIONS MONITOR FOR ACTION SCHEDULER**

**What it does:** WordPress plugin that monitors failed background jobs and sends daily email notifications.

**Why I built it:** While managing 70+ WordPress sites, I discovered that silent Action Scheduler failures caused missed orders and broken automation. Store owners only found out when customers complained. This plugin catches issues proactively.

**Who uses it:** WooCommerce store owners and WordPress site administrators who rely on scheduled tasks.

**Built with:** PHP · WordPress Plugin API · Action Scheduler · WP-Cron

**Impact:** 
✓ 30+ active installations  
✓ Prevents estimated $2K-5K monthly revenue loss per site  
✓ Featured on WordPress.org plugin repository

**Links:** [WordPress.org] [Documentation] [Source Code]

---

**ERROR LOGS EMAILER FOR WOOCOMMERCE**

**What it does:** Automatically delivers WooCommerce fatal error logs to specified email addresses daily.

**Why I built it:** Manual log monitoring is tedious and errors get missed. This plugin ensures critical issues are flagged immediately without requiring server access.

**Who uses it:** WordPress developers and store owners who need proactive error monitoring.

**Built with:** PHP · WordPress · WooCommerce · Action Scheduler

**Impact:**
✓ 20+ active installations  
✓ 5-star rating on WordPress.org  
✓ Reduces time-to-resolution for critical errors

**Links:** [WordPress.org] [Documentation] [Source Code]

---

**PHP PLAYGROUND ONLINE**

**What it does:** Interactive browser-based PHP development environment for writing, testing, and executing PHP code.

**Why I built it:** When teaching developers or debugging code snippets, I wanted a quick way to test PHP without spinning up a local environment. Now used by developers worldwide for learning and sharing code.

**Who uses it:** PHP learners, educators, and developers who need to quickly test code snippets.

**Built with:** PHP · JavaScript · Syntax Highlighting · Real-time Execution

**Links:** [Try It Live] [Source Code]

---

**PHP SERIALIZE/UNSERIALIZE TOOLS**

**What it does:** Web-based tools to convert between PHP data structures and serialized strings.

**Why I built it:** Working with WordPress databases means dealing with serialized data constantly. These tools eliminate the need for local PHP environments just to serialize/unserialize data.

**Who uses it:** PHP and WordPress developers debugging database entries, working with options tables, or testing API payloads.

**Built with:** JavaScript · PHP · Responsive Design

**Links:** [Serialize Tool] [Unserialize Tool] [Source Code]

---

**NOTION WIDGETS**

**What it does:** Collection of customizable widgets (countdown timers, progress bars, weather displays) for embedding in Notion pages.

**Why I built it:** Notion's flexibility is powerful, but lacks certain interactive elements. These widgets let power users create more dynamic workspaces.

**Who uses it:** Notion power users and productivity enthusiasts seeking enhanced workspace functionality.

**Built with:** JavaScript · Vercel · CDN Distribution

**Links:** [Widget Gallery] [Documentation] [Source Code]

---

**WORDPRESS CARE PLANS**

**What it does:** Professional landing page template for WordPress maintenance services.

**Why I built it:** While building Rootscope, I needed an effective way to showcase WordPress care services. This template converts visitors into long-term maintenance clients.

**Who uses it:** WordPress agencies and freelancers offering maintenance packages.

**Built with:** HTML5 · CSS3 · jQuery · Responsive Design

**Links:** [View Demo] [Source Code]

---

**NOTITASKS**

**What it does:** Comprehensive task management solution designed specifically for Notion users with drag-and-drop, priority tagging, and deadline tracking.

**Why I built it:** Notion's database views are powerful but lack the fluidity of dedicated task managers. This bridges that gap with real-time updates and an intuitive interface.

**Who uses it:** Notion users and development teams managing projects within Notion.

**Built with:** Next.js · TailwindCSS · ChakraUI · Supabase

**Links:** [Try It Live] [Documentation] [Source Code]

---

#### **5. Bottom CTA Section**

```
Looking for Professional Work Examples?

These personal projects showcase my technical range and problem-solving 
approach. For case studies of client work, performance optimizations, 
and enterprise solutions, check out my professional portfolio.

[View Professional Work →] (/work/)
[Download Full CV] (/resume/)
```

#### **6. Design/Layout Specifications**

**Project Card Styling:**
- Clean, card-based layout
- Subtle borders or shadows for separation
- Each card should be scannable in 10 seconds
- Use badges/tags for categorization
- Prominent CTA buttons
- Hover states for interactivity

**Responsive Behavior:**
- Desktop: 2-column grid
- Tablet: 2-column grid
- Mobile: Single column stacked

**Color Coding (optional):**
- WordPress Plugins: Blue badge
- Web Tools: Green badge
- Chrome Extensions: Purple badge
- Experiments: Orange badge

---

## STEP 2: Create New /work/ Page (Professional Portfolio)

### Objective
Create a high-impact professional portfolio page showcasing client work, business results, and technical expertise that positions you for premium opportunities.

### File Location
`/work/` (new page to be created)

### Page Structure

```
/work/
├── Hero Section
├── Featured Case Studies (3-4 major projects)
├── Additional Projects Grid
├── Testimonials Section
├── Technical Capabilities Overview
└── CTA Section
```

### Detailed Content Requirements

#### **1. Page Title & Meta**

```html
<title>Professional Work & Case Studies | Michal Slepko - Senior Full-Stack Developer</title>
<meta name="description" content="Portfolio of professional WordPress, Laravel, and e-commerce development work. 14+ years building high-performance solutions for agencies and businesses.">
```

#### **2. Hero Section**

**Heading:**
```
Professional Work & Case Studies
```

**Subheading:**
```
14+ years building high-performance WordPress, Laravel, and e-commerce 
solutions for agencies, startups, and enterprise clients.
```

**Supporting paragraph:**
```
I specialize in solving complex technical challenges that directly impact 
business revenue: performance optimization, scaling infrastructure, custom 
integrations, and rescue operations for struggling platforms. Below are 
selected examples of how I've helped clients grow and succeed.
```

**Key Stats Bar (optional visual element):**
```
70+ Sites Managed  |  14+ Years Experience  |  300K+ Orders Processed Daily
```

#### **3. Featured Case Studies Section**

**Section Heading:**
```
Featured Client Work
```

**Case Study Template:**

```html
<article class="case-study featured">
  <!-- Case Study Header -->
  <div class="case-study-header">
    <span class="category-badge">[E-Commerce | Performance | Integration | Custom Development]</span>
    <h2>[Descriptive Project Title]</h2>
    <p class="client-info">
      <strong>Client:</strong> [Company Name or "UK-based e-commerce retailer"]
      <br>
      <strong>Industry:</strong> [Pet Food / Beauty / Finance / Nonprofit]
      <br>
      <strong>Timeline:</strong> [Month Year - Present/Month Year]
    </p>
  </div>

  <!-- The Situation -->
  <div class="case-study-section">
    <h3>The Challenge</h3>
    <p>[3-4 sentences describing the problem, including business impact and stakes. Make it relatable and compelling.]</p>
    
    <ul class="pain-points">
      <li>[Specific pain point with metric]</li>
      <li>[Another pain point]</li>
      <li>[Business risk or opportunity cost]</li>
    </ul>
  </div>

  <!-- The Solution -->
  <div class="case-study-section">
    <h3>My Solution</h3>
    <p>[Brief overview of your approach - 2-3 sentences]</p>
    
    <ul class="solution-steps">
      <li><strong>[Action 1]:</strong> [Description]</li>
      <li><strong>[Action 2]:</strong> [Description]</li>
      <li><strong>[Action 3]:</strong> [Description]</li>
      <li><strong>[Action 4]:</strong> [Description]</li>
    </ul>
  </div>

  <!-- The Results -->
  <div class="case-study-section results-highlight">
    <h3>Results & Impact</h3>
    
    <div class="results-grid">
      <div class="result-card">
        <span class="metric">[74%]</span>
        <span class="metric-label">[Load time reduction]</span>
      </div>
      <div class="result-card">
        <span class="metric">[28%]</span>
        <span class="metric-label">[Conversion increase]</span>
      </div>
      <div class="result-card">
        <span class="metric">[60%]</span>
        <span class="metric-label">[Database load reduced]</span>
      </div>
      <div class="result-card">
        <span class="metric">[99.9%]</span>
        <span class="metric-label">[Uptime achieved]</span>
      </div>
    </div>

    <ul class="additional-outcomes">
      <li>[Additional qualitative outcome]</li>
      <li>[Business impact statement]</li>
      <li>[Long-term benefit]</li>
    </ul>
  </div>

  <!-- Tech Stack -->
  <div class="case-study-footer">
    <div class="tech-stack">
      <strong>Technologies:</strong> [PHP] · [WordPress] · [WooCommerce] · [Redis] · [MySQL] · [Nginx] · [New Relic]
    </div>
    
    <div class="case-study-cta">
      <a href="#contact" class="btn-primary">Discuss Your Project</a>
    </div>
  </div>
</article>
```

#### **4. Four Featured Case Studies Content**

Use these templates based on your real work. Fill in specifics as accurately as possible:

---

**CASE STUDY 1: E-COMMERCE PERFORMANCE RESCUE**

**Category Badge:** Performance Optimization

**Title:** Rescuing a High-Traffic WooCommerce Platform from Performance Crisis

**Client Info:**
- **Client:** ProDog Raw (UK-based raw pet food retailer) *[or use "UK-based e-commerce retailer" if NDA concerns]*
- **Industry:** E-Commerce / Pet Products
- **Timeline:** August 2023 - Present
- **Role:** Senior Web Developer

**The Challenge:**

A growing e-commerce business was losing sales due to a slow, unstable WordPress/WooCommerce platform. The site handled 300+ orders daily but struggled under load, with customers abandoning carts during slow checkouts and the site frequently crashing during promotional campaigns.

**Pain Points:**
- Page load times averaging 4+ seconds, far above industry standards
- Database queries timing out during peak hours causing white screens
- Site infrastructure unable to scale with growing order volume
- Previous attempts at optimization yielded minimal improvements
- **Business Impact:** Estimated £15,000+ monthly revenue loss to cart abandonment

**My Solution:**

I conducted a comprehensive performance audit and implemented systematic optimizations across the full stack:

- **Database Optimization:** Identified and resolved N+1 query problems in custom WooCommerce code, reducing queries per page from 180 to 35
- **Caching Strategy:** Implemented Redis object caching, eliminating 60% of database load
- **Query Tuning:** Optimized slow MySQL queries through proper indexing and query restructuring
- **Server Configuration:** Reconfigured PHP-FPM and Nginx for better concurrency handling
- **Monitoring:** Set up New Relic monitoring to catch performance regressions early

**Results & Impact:**

**Metrics:**
- **74% reduction** in page load time (4.2s → 1.1s)
- **80% reduction** in database queries (180 → 35 per page)
- **28% improvement** in checkout completion (45% abandonment → 32%)
- **99.9% uptime** maintained during Black Friday sale (previously had crashes)

**Business Outcomes:**
- Performance improvements paid for themselves within 2 weeks through reduced cart abandonment
- Site now comfortably handles 500+ concurrent users during promotions
- Client able to launch aggressive marketing campaigns without infrastructure concerns
- Ongoing maintenance contract secured based on results

**Technologies:** PHP · WordPress · WooCommerce · Redis · MySQL · Nginx · PHP-FPM · New Relic · Linux Server Administration

---

**CASE STUDY 2: COMPLEX NONPROFIT INTEGRATION**

**Category Badge:** Custom Integration

**Title:** Building Custom Salesforce Integration for Nonprofit Donation Platform

**Client Info:**
- **Client:** Lyric Stage (Boston-area nonprofit theater) *[or use "Northeast US nonprofit theater organization"]*
- **Industry:** Nonprofit / Arts & Culture
- **Timeline:** [Timeframe based on your records]
- **Role:** Full-Stack Developer

**The Challenge:**

A nonprofit theater organization needed a seamless way to process online donations while maintaining accurate donor records in Salesforce CRM. Their existing donation form was disconnected from their CRM, requiring manual data entry that was error-prone, time-consuming, and delayed donor acknowledgment.

**Pain Points:**
- Manual data entry into Salesforce took 2-3 hours daily for development staff
- Donor data inconsistencies between payment processor and CRM
- Delayed donation receipts frustrated donors during fundraising campaigns
- No ability to track donation campaigns or donor retention effectively
- Risk of data loss during manual transfer process

**My Solution:**

Built a custom WordPress donation form with real-time Salesforce integration:

- **Custom Form Builder:** Developed flexible donation form with multiple giving levels, recurring donations, and tribute options
- **Salesforce API Integration:** Real-time bidirectional sync between WordPress and Salesforce using REST API
- **Payment Processing:** Integrated Stripe payment gateway with PCI compliance
- **Data Mapping:** Custom field mapping to match organization's Salesforce structure and reporting needs
- **Error Handling:** Robust logging and retry mechanisms to prevent data loss

**Results & Impact:**

**Metrics:**
- **100% automation** of donation data entry (eliminated 2-3 hours daily manual work)
- **Instant donor acknowledgment** via automated receipt system
- **Zero data discrepancies** between payment processor and CRM
- **[X%] increase** in online donations due to improved user experience

**Business Outcomes:**
- Development team freed to focus on donor relationships instead of data entry
- Campaign tracking now accurate and real-time, enabling better fundraising strategies
- Donor satisfaction improved through immediate receipts and proper acknowledgment
- Platform now scalable for future fundraising growth

**Technologies:** PHP · WordPress · Salesforce REST API · Stripe API · JavaScript · MySQL · OAuth 2.0

---

**CASE STUDY 3: WORDPRESS MULTISITE AT SCALE**

**Category Badge:** Enterprise WordPress

**Title:** Managing 70+ WordPress Sites with Centralized Infrastructure

**Client Info:**
- **Client:** Multiple agency clients and direct businesses
- **Industry:** Various (E-Commerce, Publishing, Services, Nonprofit)
- **Timeline:** December 2015 - Present
- **Role:** Founder & Senior Developer, Rootscope Limited

**The Challenge:**

As Rootscope grew, managing dozens of WordPress sites across multiple servers became increasingly complex. Each site had unique requirements, but common issues emerged: security vulnerabilities, plugin conflicts, performance degradation, and the need for rapid emergency response when sites went down.

**Pain Points:**
- Manual updates across 70+ sites consumed excessive time
- Security vulnerabilities exposed multiple clients simultaneously
- No centralized monitoring meant issues discovered only when clients reported them
- Server resources inefficiently allocated across shared hosting
- Emergency support requests required rapid context-switching between different codebases

**My Solution:**

Developed a comprehensive management system and standardized infrastructure:

- **Centralized Monitoring:** Implemented uptime monitoring, performance tracking, and automated security scanning across all sites
- **Update Management:** Created systematic update workflow with staging environment testing before production deployment
- **Server Optimization:** Migrated sites to optimized VPS infrastructure with proper resource allocation
- **Security Hardening:** Implemented firewall rules, malware scanning, and hardened WordPress configurations
- **Documentation System:** Built internal knowledge base with site-specific configurations and common issue resolutions

**Results & Impact:**

**Metrics:**
- **75% reduction** in emergency support tickets through proactive monitoring
- **99.8% average uptime** across all managed sites
- **90% reduction** in time spent on routine updates through systematization
- **Zero security breaches** across managed sites in [X] years

**Business Outcomes:**
- Scaled from 20 sites to 70+ without proportional staff increase
- Client retention rate above 95% due to reliable service
- Emergency response time reduced from hours to minutes
- Business model evolved from reactive support to proactive management with predictable revenue

**Technologies:** PHP · WordPress · Linux · Bash · Nginx · MySQL · Redis · Git · Custom Monitoring Tools · Automated Backup Systems

---

**CASE STUDY 4: LEGACY PLATFORM MODERNIZATION**

**Category Badge:** Legacy Code Rescue

**Title:** Maintaining and Modernizing High-Traffic E-Commerce Platform

**Client Info:**
- **Client:** Estée Lauder Companies / ELC corporate projects *[or use "Fortune 500 beauty and cosmetics company"]*
- **Industry:** E-Commerce / Beauty & Cosmetics
- **Timeline:** [Based on your records]
- **Role:** Contract Full-Stack Developer

**The Challenge:**

A legacy e-commerce platform built with older PHP5 and custom Perl systems was mission-critical but increasingly difficult to maintain. The platform handled significant daily transaction volume, but the aging codebase made adding features risky and security patches challenging. The business needed someone who could work confidently with legacy code while gradually modernizing the platform.

**Pain Points:**
- Outdated PHP5 codebase with deprecated functions and security vulnerabilities
- Mixed technology stack (PHP, Perl, JavaScript) with limited documentation
- Fear of breaking production systems made developers avoid necessary updates
- Performance degradation as traffic grew beyond original design specifications
- Difficulty finding developers willing to work with legacy systems

**My Solution:**

Took a methodical approach to maintaining reliability while modernizing incrementally:

- **Stability First:** Implemented comprehensive error logging and monitoring before making changes
- **Strategic Refactoring:** Identified high-risk code sections and refactored incrementally with extensive testing
- **Performance Optimization:** Profiled and optimized database queries and resource-intensive operations
- **Security Hardening:** Applied security patches and gradually upgraded PHP version with compatibility testing
- **Documentation:** Created technical documentation for future developers working with the system

**Results & Impact:**

**Metrics:**
- **Maintained 99.9%+ uptime** despite working with fragile legacy codebase
- **[X%] performance improvement** through targeted optimization
- **Zero production incidents** caused by code changes
- **Successfully upgraded** critical system components without downtime

**Business Outcomes:**
- Business continuity maintained during transition planning for platform replacement
- Executive confidence in technical team restored through reliable delivery
- Platform lifespan extended 2+ years beyond expected retirement, saving migration costs
- Established reputation as developer who can handle challenging legacy systems

**Technologies:** PHP (PHP5 → PHP7) · Perl · JavaScript · MySQL · Linux · Legacy System Maintenance · Incremental Refactoring

---

#### **5. Additional Projects Section**

**Section Heading:**
```
Other Professional Work
```

**Format:** Grid of smaller project cards (less detailed than featured case studies)

**Template for each card:**

```html
<article class="work-card">
  <span class="category">[Category]</span>
  <h3>[Project Name]</h3>
  <p class="client">[Client/Industry]</p>
  <p class="description">[2-sentence description of challenge and solution]</p>
  <ul class="quick-outcomes">
    <li>[Quick outcome 1]</li>
    <li>[Quick outcome 2]</li>
  </ul>
  <div class="tech-tags">
    <span>[Tech1]</span>
    <span>[Tech2]</span>
    <span>[Tech3]</span>
  </div>
</article>
```

**Projects to include:**

1. **Custom WooCommerce Shipping Calculator**
   - Client: E-commerce retailer
   - Built complex shipping rate calculator based on product dimensions, weight, and destination
   - Reduced shipping cost errors by 95%, saved $3K monthly in shipping overcharges

2. **WordPress Plugin Development (Various)**
   - Multiple clients requiring custom functionality
   - 15+ production plugins deployed across client sites
   - Included custom post types, API integrations, admin tools

3. **Server Migration Projects**
   - Multiple clients
   - Zero-downtime migrations for production e-commerce sites
   - Improved performance 40-60% through infrastructure optimization

4. **Email Deliverability Resolution**
   - Multiple clients with email delivery issues
   - DNS configuration, SPF/DKIM/DMARC setup
   - Restored email deliverability from 60% to 98%+

5. **WP Cron Manager (SaaS Product)**
   - Internal product development
   - Laravel-based tool for WordPress cron job management
   - Currently in development for public launch

6. **Zoho CRM Implementation**
   - Small business client transitioning from spreadsheets
   - Custom field configuration, workflow automation, team training
   - Improved sales tracking accuracy and reduced manual data entry 80%

---

#### **6. Testimonials Section**

**Section Heading:**
```
What Clients Say
```

**Template:**

```html
<div class="testimonial">
  <blockquote>
    "[Testimonial text - specific about skills, results, and working relationship]"
  </blockquote>
  <div class="testimonial-author">
    <strong>[Name]</strong>
    <span>[Title, Company]</span>
  </div>
</div>
```

**Action Item for You:**
Reach out to 3-5 past clients and request testimonials. Suggested prompt:

```
Hi [Name],

I'm updating my professional portfolio and would love to include a 
testimonial from you about the work we did together on [project].

Would you be willing to write 2-3 sentences about:
- The challenge we solved
- How the solution impacted your business
- What it was like working with me

Thanks so much!
Michal
```

**Placeholder testimonials (replace with real ones):**

```
"Michal rescued our WooCommerce platform when we were losing thousands 
in sales daily. His systematic approach to performance optimization not 
only fixed our immediate crisis but set us up for sustainable growth. 
Best investment we made this year."
— [Name], CEO, ProDog Raw

"We needed someone who could work confidently with our legacy codebase 
without breaking production systems. Michal delivered exactly that - 
reliable, thoughtful improvements with zero downtime. Highly recommended 
for complex technical challenges."
— [Name], Technical Director, [Company]

"Michal's Salesforce integration transformed our donation process. What 
used to take our team hours of manual work now happens automatically and 
flawlessly. Our donors have a better experience and we have better data."
— [Name], Development Director, Lyric Stage
```

---

#### **7. Technical Capabilities Overview**

**Section Heading:**
```
Technical Expertise
```

**Format:** Grid or columns showing capability areas

```html
<div class="capabilities-grid">
  <div class="capability-area">
    <h3>E-Commerce Development</h3>
    <ul>
      <li>WooCommerce custom development</li>
      <li>Payment gateway integrations</li>
      <li>Custom shipping calculators</li>
      <li>Order management systems</li>
      <li>Shopify theme development</li>
    </ul>
  </div>

  <div class="capability-area">
    <h3>Performance Optimization</h3>
    <ul>
      <li>Database query optimization</li>
      <li>Redis/Memcached implementation</li>
      <li>PHP-FPM tuning</li>
      <li>CDN configuration</li>
      <li>Load testing & profiling</li>
    </ul>
  </div>

  <div class="capability-area">
    <h3>WordPress Expertise</h3>
    <ul>
      <li>Custom theme development</li>
      <li>Plugin development</li>
      <li>Multisite management</li>
      <li>Security hardening</li>
      <li>Maintenance at scale (70+ sites)</li>
    </ul>
  </div>

  <div class="capability-area">
    <h3>Laravel Development</h3>
    <ul>
      <li>Custom application development</li>
      <li>API development & integration</li>
      <li>Database design & optimization</li>
      <li>Queue & job management</li>
      <li>SaaS product development</li>
    </ul>
  </div>

  <div class="capability-area">
    <h3>Server & DevOps</h3>
    <ul>
      <li>Linux server administration</li>
      <li>Nginx/Apache configuration</li>
      <li>Database administration (MySQL/MariaDB)</li>
      <li>Backup & disaster recovery</li>
      <li>Security & monitoring</li>
    </ul>
  </div>

  <div class="capability-area">
    <h3>Third-Party Integrations</h3>
    <ul>
      <li>Salesforce API</li>
      <li>Stripe payment processing</li>
      <li>Email marketing platforms</li>
      <li>CRM systems (Zoho, HubSpot)</li>
      <li>RESTful API development</li>
    </ul>
  </div>
</div>
```

---

#### **8. Bottom CTA Section**

```html
<section class="cta-section">
  <h2>Let's Discuss Your Project</h2>
  
  <p>
    I work with agencies, e-commerce businesses, and startups who need 
    reliable technical expertise for complex WordPress, Laravel, and 
    e-commerce challenges.
  </p>

  <div class="cta-options">
    <div class="cta-option">
      <h3>For Agencies</h3>
      <p>White-label development, overflow work, and technical rescue projects</p>
      <a href="https://rootscope.dev/" class="btn-primary">Visit Rootscope →</a>
    </div>

    <div class="cta-option">
      <h3>For Direct Clients</h3>
      <p>Custom development, maintenance contracts, and technical consulting</p>
      <a href="mailto:michal@michalslepko.dev" class="btn-primary">Get in Touch →</a>
    </div>

    <div class="cta-option">
      <h3>For Hiring Managers</h3>
      <p>Contract or full-time opportunities for senior development roles</p>
      <a href="/resume/" class="btn-secondary">View Resume →</a>
    </div>
  </div>

  <div class="alternative-actions">
    <p>
      Want to see what else I'm working on? 
      <a href="/projects/">Check out my personal projects →</a>
    </p>
  </div>
</section>
```

---

#### **9. Design/Layout Specifications for /work/ Page**

**Visual Hierarchy:**
- Featured case studies get prominent treatment (full width or large cards)
- Additional projects in 2-3 column grid
- Testimonials in alternating or carousel layout
- Capabilities in clean grid format

**Color Coding:**
- E-Commerce projects: Blue accent
- Performance work: Green accent
- Integration projects: Purple accent
- Custom development: Orange accent

**Case Study Layout:**
- Challenge section: Slightly muted background to differentiate
- Results section: Highlighted with borders or background color
- Use visual elements (icons, numbers, progress bars) to break up text

**Responsive Behavior:**
- Desktop: Multi-column layouts where appropriate
- Tablet: 2-column for most sections
- Mobile: Single column, collapsible sections for long case studies

**Typography:**
- Large, bold headings for case study titles
- Metrics should be visually prominent (large numbers with labels)
- Testimonials in italics with clear attribution

---

## STEP 3: Update Navigation & Cross-Linking

### Objective
Ensure users can easily navigate between personal projects and professional work.

### Changes Needed

#### **1. Update Main Navigation**

**Current navigation likely has:**
```
Home | About | Projects | Resume | Contact
```

**Update to:**
```
Home | About | Work | Projects | Resume | Contact
```

Or if space is limited:
```
Home | Portfolio ▼ | Resume | Contact
  ↳ Professional Work (/work/)
  ↳ Personal Projects (/projects/)
```

#### **2. Add Cross-Links Between Pages**

**On /projects/ page:**
- Add prominent CTA button at top: "View Professional Work →"
- Add footer link: "Looking for client work examples? Visit my professional portfolio"

**On /work/ page:**
- Add footer link: "Want to see what else I'm building? Check out my personal projects"

#### **3. Update Homepage**

Add section highlighting both:

```html
<section class="portfolio-preview">
  <h2>Recent Work</h2>
  
  <div class="portfolio-split">
    <div class="portfolio-column">
      <h3>Professional Projects</h3>
      <p>Case studies and client work showcasing business impact</p>
      <a href="/work/">View Portfolio →</a>
    </div>
    
    <div class="portfolio-column">
      <h3>Personal Projects</h3>
      <p>Open source tools and experiments in new technologies</p>
      <a href="/projects/">Explore Projects →</a>
    </div>
  </div>
</section>
```

#### **4. Update Resume Page**

Add context at top of resume:

```
For detailed case studies of my work, see my professional portfolio.
For open source contributions and side projects, see my projects page.
```

---

## STEP 4: SEO & Meta Updates

### Objective
Ensure both pages rank well for appropriate search terms.

### Actions Needed

#### **1. Update sitemap.xml**
Add /work/ page to sitemap

#### **2. Create meta descriptions**

**For /projects/:**
```html
<meta name="description" content="Personal projects and open-source tools by Michal Slepko. WordPress plugins, developer utilities, and technical experiments exploring new frameworks.">
```

**For /work/:**
```html
<meta name="description" content="Professional WordPress and Laravel development portfolio. 14+ years building high-performance e-commerce solutions, optimizing databases, and managing enterprise WordPress installations.">
```

#### **3. Add structured data (optional but recommended)**

**For /work/ page - add schema.org markup:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Michal Slepko",
  "jobTitle": "Senior Full-Stack Developer",
  "url": "https://michalslepko.dev/work/",
  "sameAs": [
    "https://github.com/mslepko",
    "https://www.linkedin.com/in/michalslepko",
    "https://instagram.com/michal.codes"
  ],
  "knowsAbout": [
    "WordPress Development",
    "Laravel Development",
    "E-Commerce Optimization",
    "Performance Optimization",
    "Server Administration"
  ]
}
</script>
```

#### **4. Internal linking strategy**

- Link from homepage to /work/ as primary portfolio
- Link from /work/ case studies to relevant /projects/ (e.g., if WP Cron Manager mentioned)
- Link from blog posts (when created) to relevant case studies

---

## STEP 5: Content Gathering Checklist

### Information You Need to Provide to Claude Code

For each case study, gather:

**Quantitative Data:**
- [ ] Exact performance metrics (load times, query counts, etc.)
- [ ] Conversion rate improvements
- [ ] Uptime statistics
- [ ] Time savings achieved
- [ ] Revenue impact (if you can share)
- [ ] Number of orders/users/transactions handled

**Project Details:**
- [ ] Exact client names (or approved anonymized versions)
- [ ] Project timelines (start/end dates)
- [ ] Specific technologies used (versions if relevant)
- [ ] Team size (if you worked with others)
- [ ] Your specific role and responsibilities

**Business Context:**
- [ ] Industry/vertical for each client
- [ ] Company size/type (startup, SMB, enterprise)
- [ ] Why they came to you
- [ ] What happened after project completion

**Testimonials:**
- [ ] Request 3-5 testimonials from past clients
- [ ] Get permission to use client names/companies
- [ ] Include name, title, company for each testimonial

**Visual Assets (optional but powerful):**
- [ ] Screenshots of before/after performance
- [ ] Client logos (with permission)
- [ ] Architecture diagrams
- [ ] Dashboard screenshots showing metrics

---

## STEP 6: Implementation Checklist for Claude Code

### Phase 1: Restructure /projects/
- [ ] Update page title and meta description
- [ ] Add hero section with new copy
- [ ] Rewrite all project descriptions using new template
- [ ] Add category badges to each project
- [ ] Add impact/stats where available
- [ ] Add prominent CTA linking to /work/
- [ ] Update navigation if needed
- [ ] Test responsive layout

### Phase 2: Create /work/ page
- [ ] Create new /work/ directory and index file
- [ ] Implement hero section
- [ ] Build case study template/component
- [ ] Add 4 featured case studies with real content
- [ ] Create additional projects grid
- [ ] Add testimonials section (placeholder if needed)
- [ ] Add technical capabilities section
- [ ] Implement bottom CTA section
- [ ] Ensure responsive design works
- [ ] Add proper spacing/typography

### Phase 3: Navigation & Cross-linking
- [ ] Update main site navigation
- [ ] Add cross-links between pages
- [ ] Update homepage portfolio section
- [ ] Add portfolio links to resume page
- [ ] Ensure all internal links work

### Phase 4: SEO & Polish
- [ ] Update sitemap.xml
- [ ] Add meta descriptions to both pages
- [ ] Add structured data to /work/
- [ ] Test page load performance
- [ ] Check mobile responsiveness
- [ ] Validate HTML/CSS
- [ ] Test all links

### Phase 5: Content Review
- [ ] Proofread all copy for errors
- [ ] Verify all metrics are accurate
- [ ] Ensure no sensitive client info disclosed
- [ ] Check that tone is consistent
- [ ] Verify CTAs are compelling
- [ ] Test user flow between pages

---

## File Structure Reference

```
michalslepko.dev/
├── index.html (homepage)
├── about/ (or about.html)
├── work/
│   ├── index.html (NEW - professional portfolio)
│   └── assets/
│       ├── case-study-images/
│       └── client-logos/
├── projects/
│   └── index.html (UPDATED - personal projects)
├── resume/
│   └── index.html
└── assets/
    ├── css/
    │   ├── main.css
    │   ├── work.css (NEW - styles for work page)
    │   └── projects.css (UPDATED)
    └── js/
        └── main.js
```

---

## Design System Notes for Claude Code

### Typography Scale
```
H1 (Page Title): 2.5rem - 3rem
H2 (Section Headings): 2rem - 2.25rem  
H3 (Case Study Titles): 1.5rem - 1.75rem
Body: 1rem - 1.125rem
Small/Meta: 0.875rem - 1rem
```

### Color Palette Suggestions
```
Primary Action: #0066CC (or your brand color)
Success/Results: #10B981
Category Badges:
  - E-Commerce: #3B82F6 (blue)
  - Performance: #10B981 (green)
  - Integration: #8B5CF6 (purple)
  - Custom Dev: #F59E0B (orange)
Background Accent: #F3F4F6 (light gray)
Text Primary: #111827 (dark gray)
Text Secondary: #6B7280 (medium gray)
```

### Spacing System
```
Section Padding: 4rem - 6rem
Card Padding: 2rem - 3rem
Element Spacing: 1rem - 2rem
Component Gap: 1.5rem - 2rem
```

### Component Patterns

**Card Hover Effect:**
```css
.project-card, .work-card {
  transition: transform 0.2s, box-shadow 0.2s;
}
.project-card:hover, .work-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}
```

**Badge Style:**
```css
.badge, .category-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
}
```

**Results Metric Card:**
```css
.result-card {
  text-align: center;
  padding: 1.5rem;
}
.metric {
  font-size: 2.5rem;
  font-weight: 700;
  display: block;
  color: [primary-color];
}
.metric-label {
  font-size: 0.875rem;
  color: [secondary-text];
}
```

---

## Success Criteria

After implementation, the portfolio should:

✅ **Clearly separate** personal projects from professional work  
✅ **Showcase business impact** with specific metrics and outcomes  
✅ **Tell compelling stories** that demonstrate problem-solving ability  
✅ **Build credibility** through testimonials and proven results  
✅ **Guide visitors** naturally from one page to another  
✅ **Load quickly** and work perfectly on mobile devices  
✅ **Rank well** for relevant search terms  
✅ **Convert visitors** into leads or interview requests  

---

## Final Notes for Claude Code

**Priority order:**
1. Get /work/ page live with at least 2-3 strong case studies
2. Update /projects/ with new positioning
3. Fix navigation and cross-linking
4. Polish design and responsiveness
5. Add testimonials when available

**Content placeholders:**
- Use `[PLACEHOLDER: specific metric]` where you need exact numbers
- Use `[CLIENT NAME OR "Industry description"]` where NDA might apply
- Use `[TESTIMONIAL PENDING]` in testimonials section

**Design flexibility:**
Feel free to adapt the design to match the existing site style, but ensure:
- Case studies are visually prominent
- Results/metrics stand out clearly
- Page is scannable (users should grasp value in 30 seconds)
- CTAs are obvious and compelling

**Questions to ask Michal if anything is unclear:**
1. Which 3-4 projects should be featured case studies?
2. What exact metrics can you share for each project?
3. Do you have any client testimonials already?
4. Are there NDA restrictions on any client names?
5. Do you have any visual assets (screenshots, logos, etc.)?

---

This plan should give Claude Code everything needed to implement a professional, results-driven portfolio that properly showcases your expertise. The key is telling compelling stories with specific outcomes rather than just listing technical features.
