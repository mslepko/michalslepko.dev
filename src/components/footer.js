import * as React from "react"
import { TelemetryDeck } from '@telemetrydeck/sdk';
const td = new TelemetryDeck({ app: '85F1CA88-24D2-4798-9F55-4C1573C42928', user: 'anonymous' });

const Footer = () => {
  td.signal()
  const url = typeof window !== 'undefined' ? window.location.href : '';
  td.signal({
    route: url,
  });
  return (
    <footer
      className="container
      mx-auto
      text-center
      text-mint
      mt-4"
    >
      Michal Slepko © {new Date().getFullYear()}, Built with {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer
