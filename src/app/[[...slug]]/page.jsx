'use client';

import dynamic from 'next/dynamic'

// Dynamically import the main App component with SSR disabled.
// This avoids server-side rendering issues because the app uses react-router-dom
// and other browser-only behavior inside the React entry point.
const App = dynamic(() => import('../../App'), { ssr: false })

export default function CatchAllPage() {
  return <App />
}
