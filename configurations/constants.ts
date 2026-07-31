export const COOKIE_LOCALE_KEY = "__sciwork_locale";
export const COOKIE_SHOW_COOKIE_BANNER_KEY = "__sciwork_show_cookie_banner";
export const COOKIE_IS_COOKIE_CONSENTED_KEY = "__sciwork_is_cookie_consented";
export const DEFAULT_LOCALE = "en";
export const UNKNOWN_LOCALE = "";
export const CFP_URL = "https://pretalx.sciwork.dev/sw26/submit";
// The "Submit a Proposal" button is shown only within [CFP_OPEN_AT, CFP_DEADLINE).
// Both are Taipei time (+08:00), so the window flips on the same calendar day for
// every visitor regardless of their own time zone.
export const CFP_OPEN_AT = "2026-08-01T00:00:00+08:00";
export const CFP_DEADLINE = "2026-09-16T23:59:59+08:00";
export type CookieConsentValue = "accepted" | "rejected" | undefined;
export const COOKIE_NAME = "cookieConsent";
