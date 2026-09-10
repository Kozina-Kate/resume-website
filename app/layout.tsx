import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Екатерина Козина — резюме',
  description: 'Персональный сайт-резюме Екатерины Козиной',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link rel="icon" href="favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
