import { createDirectus, rest, authentication } from "@directus/sdk";

// Konfiguracja klienta z obsługą CORS
export const client = createDirectus(
  "https://whale-app-jcm48.ondigitalocean.app/"
).with(
  rest()
);
