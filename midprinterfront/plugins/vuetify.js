// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VStepper } from "vuetify/labs/VStepper";

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        ssr: true,
        components: {
            VStepper,
            ...components,
        },
        directives,
    });

    nuxtApp.vueApp.use(vuetify);
});