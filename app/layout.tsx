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
      <body>{children}</body>
    </html>
  );
}
