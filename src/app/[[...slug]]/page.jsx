'use client';

import dynamic from 'next/dynamic'

// Dynamically import the main App component with SSR disabled
// since it uses react-router-dom which expects a browser environment
const App = dynamic(() => import('../../App'), { ssr: false })

export default function CatchAllPage() {
  return <App />
}
