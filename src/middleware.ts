import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["vi", "en"],
  defaultLocale: "vi",
  localePrefix: "always", // luôn hiện /vi hoặc /en trong URL
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};