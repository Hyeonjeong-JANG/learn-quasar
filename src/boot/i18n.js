import { Quasar, LocalStorage } from 'quasar';
import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  const locale = LocalStorage.getItem('lang') || Quasar.lang.isoName;
  // something to do
  const i18n = createI18n({
    locale,
    messages,
  });
  app.use(i18n);
});
