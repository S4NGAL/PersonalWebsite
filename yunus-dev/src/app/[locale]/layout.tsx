import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: {
      template: "%s | Yunus Mümin Aydınoğlu",
      default: t("og_title"),
    },
    description: t("description"),
    openGraph: { siteName: t("site_name"), type: "website" },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
    alternates: {
      canonical: `/${locale}`,
      languages: { tr: "/tr", en: "/en" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-btn"
      >
        {locale === "tr" ? "İçeriğe geç" : "Skip to content"}
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
