import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/_next')
    || request.nextUrl.pathname.startsWith('/api')
    || request.nextUrl.pathname.startsWith('/favicon.ico')) {
    return NextResponse.next()
  }

  console.log('url', request.nextUrl.pathname)

  return NextResponse.next()
}