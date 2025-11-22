// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

// Initialize Clerk middleware (no arguments — v6+ doesn’t support publicRoutes)
export default clerkMiddleware();

// Configuration: run Clerk on all routes
export const config = {
  matcher: [
    // Match all routes except Next.js internals and static assets
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|png|gif|svg|ico|woff2?|ttf|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
