// app/layout.tsx
import Nav from "@/components/Navbar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
