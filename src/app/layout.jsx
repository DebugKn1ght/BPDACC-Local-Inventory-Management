import '../index.css'

export const metadata = {
  title: 'BPDACC Inventory Management',
  description: 'Manage and track medical supplies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
