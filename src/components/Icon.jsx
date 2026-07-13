import React from 'react'

/**
 * Reusable Icon component for displaying SVG icons
 * Provides consistent icon sizing and alignment throughout the app
 * 
 * @param {string} src - Path to the icon file (SVG recommended)
 * @param {string} alt - Alternative text for accessibility
 * @param {number} size - Width and height of the icon in pixels (default: 24)
 * @param {string} className - Additional CSS classes to apply
 * @param {object} style - Additional inline styles to apply
 */
const Icon = ({ src, alt = '', size = 24, className = '', style = {} }) => {
  // Next.js imports static assets as objects with a .src property
  const actualSrc = typeof src === 'object' && src !== null && 'src' in src ? src.src : src;

  return (
    <img
      src={actualSrc}
      alt={alt}
      draggable={false}
      style={{
        width: size,
        height: size,
        display: 'inline-block',
        verticalAlign: 'middle', // Ensures perfect alignment with text
        ...style,
      }}
      className={className}
    />
  )
}

export default Icon
