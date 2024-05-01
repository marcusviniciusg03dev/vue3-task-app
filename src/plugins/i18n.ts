import { langs } from "@/langs";
import { setTranslate } from "@/setTranslate";
import type { NuxtApp } from "nuxt/app";

export default function (nuxtApp: NuxtApp) {
  nuxtApp.vueApp.provide('translate', setTranslate(nuxtApp.vueApp, langs))
}