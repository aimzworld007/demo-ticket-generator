import './globals.css';

export const metadata = {
  title: 'Demo Ticket Generator',
  description: 'Create, preview, print, and export demo flight tickets.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
