import { useT, d } from './locales';

// you can also define dicts in the same file as your components, it's up to you
const weather = d({
  en: 'The weather in {{city}} has {{humidity}}% humidity.',
  zh: '{{city}}的天气湿度为{{humidity}}%。',
  ja: '{{city}}の湿度は{{humidity}}%です。',
  ms: 'Cuaca di {{city}} mempunyai kelembapan {{humidity}}%.',
})<{ city: string; humidity: number }>;

const lastLogin = d({
  en: 'Last login: {{date}} at {{time}}',
  zh: '上次登录：{{date}} {{time}}',
  ja: '最終ログイン：{{date}} {{time}}',
  ms: 'Log masuk terakhir: {{date}} pada {{time}}',
})<{ date: `${number}-${number}-${number}`; time: `${number}:${number}` }>;

export const Page2 = () => {
  const { t } = useT();

  return (
    <>
      <p>{t(weather, { city: 'Kuala Lumpur', humidity: 80 })}</p>
      <p>{t(lastLogin, { date: '2024-04-24', time: '09:30' })}</p>
    </>
  );
};
