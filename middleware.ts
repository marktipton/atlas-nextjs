export { auth as middleware } from "@/auth";

export const config = {
  matcher: [
    // allows home page and about page to be accessed by non-users
    "/((?!api|_next/static|_next/image|favicon.ico|logo.png|about|$).*)",
  ],
};