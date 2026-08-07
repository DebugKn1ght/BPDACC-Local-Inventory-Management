/** @type {import('next').NextConfig} */
import os from 'os'

const getAllowedDevOrigins = () => {
  const origins = new Set(['localhost', '127.0.0.1', '::1'])

  for (const networkInterface of Object.values(os.networkInterfaces() || {})) {
    for (const detail of networkInterface || []) {
      if (detail.family === 'IPv4' && !detail.internal) {
        origins.add(detail.address)
      }
    }
  }

  return Array.from(origins)
}

const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: getAllowedDevOrigins(),
}

export default nextConfig;
