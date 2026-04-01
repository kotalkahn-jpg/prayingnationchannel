import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const siteKey = process.env.SITE_KEY
  const validKey = "my-secure-certificate-123"

  // Check header or query param (optional)
  const userKey =
    request.headers.get('x-site-key') ||
    request.nextUrl.searchParams.get('key')

  if (siteKey !== validKey && userKey !== validKey) {
    return new NextResponse(
      `
      <html>
        <body style="display:flex;justify-content:center;align-items:center;height:100vh;background:black;color:white;text-align:center;font-family:sans-serif;">
          <div>
            <h1>🚫 Website Unavailable</h1>
            <p>Validate with your certificate provider to gain access.</p>
          </div>
        </body>
      </html>
      `,
      {
        status: 503,
        headers: { 'content-type': 'text/html' },
      }
    )
  }

  return NextResponse.next()
}
