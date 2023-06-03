import { createPinia } from 'pinia';
import type { App } from 'vue';

const piniaStore = createPinia();

export function setupPiniaStore(app: App<Element>) {
  app.use(piniaStore);
}

export { piniaStore };
