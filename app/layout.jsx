import './globals.css';
import { LanguageProvider } from '../src/context/LanguageContext.jsx';

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

      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
