import './globals.css';

export const metadata = {
  title: 'Forky — Software & Marketing Solutions',
  description: 'Forky helps ambitious businesses grow with cutting-edge software development and performance marketing. Strategy, execution, results.',
  keywords: ['software development', 'marketing agency', 'digital solutions', 'Forky'],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
  openGraph: {
    title: 'Forky — Software & Marketing Solutions',
    description: 'Forky helps ambitious businesses grow with cutting-edge software and marketing.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        <div className="bg-orb-teal"   aria-hidden="true" />
        <div className="bg-orb-dark"   aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
