import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: 'Ideate, Innovate, Iterate. | Jaime Ng',
  description:
    'Ideate, Innovate, Iterate. Welcome to my portfolio. I\'m Jaime Ng, a computer science student and software developer. Find out more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
