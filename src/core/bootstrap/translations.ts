import { messages as enMessages } from "@app/locales/en/messages";
import { messages as esMessages } from "@app/locales/es/messages";
import { i18n } from "@lingui/core";
import * as Localization from "expo-localization";

const LOCALES = { en: enMessages, es: esMessages };
const ALLOWED_LOCALES = Object.keys(LOCALES);

Object.entries(LOCALES).forEach(([locale, messages]) => {
  i18n.load(locale, messages);
});

const locales = Localization.getLocales().map((locale) => locale.languageCode);
const locale = locales.find(
  (locale) => locale && ALLOWED_LOCALES.includes(locale)
);

i18n.activate(locale ?? "en");
