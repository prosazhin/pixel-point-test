/* eslint-disable react/prop-types */
/* eslint-disable @next/next/no-page-custom-font */
import 'styles/main.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
      />
    </head>
    <body>
      <main className="h-auto w-full py-[160px]">{children}</main>
    </body>
  </html>
);

export default RootLayout;
