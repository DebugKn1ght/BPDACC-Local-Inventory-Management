import '../index.css'

// Global page metadata for the Next.js shell.
// This helps define the browser tab title and icon for the app.
export const metadata = {
  title: 'BPDACC Inventory Management',
  description: 'Manage and track medical supplies',
  icons: {
    icon: '/bpdacc-logo.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/bpdacc-logo.svg" type="image/svg+xml" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
