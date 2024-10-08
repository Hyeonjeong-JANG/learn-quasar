import { Loading } from 'quasar';
import { boot } from 'quasar/wrappers';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  Loading.setDefaults({
    delay: 0,
    message: '로딩중...',
    spinnerSize: 40,
  });
});
