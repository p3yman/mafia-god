import { useLocalStorage } from "usehooks-ts";

import { fa } from "../locales/fa";
import { en } from "../locales/en";

export const locales = {
  fa,
  en,
};

export type Locale = keyof typeof locales;

type Key = keyof (typeof locales)["en"] | keyof (typeof locales)["fa"];

export const useTranslation = () => {
  const [locale, setLocale] = useLocalStorage<Locale>("locale", "en");

  const t = (key: Key) => {
    if (!locales[locale][key]) {
      return key as string;
    }

    return locales[locale][key];
  };

  const toggleLocale = () => {
    if (locale === "en") {
      setLocale("fa");
    } else {
      setLocale("en");
    }
  };

  return {
    locale,
    toggleLocale,
    t,
  };
};
