import { kotori, detectLanguage } from 'kotori';

export const i18n = kotori({
  primary: 'en',
  secondaries: ['zh', 'ja', 'ms'],
});

detectLanguage(i18n);

export const { useT, d, setLanguage, r } = i18n;

// you can define your dicts in the same file or separate them by component, it's up to you
export const intro = d({
  en: 'my name is {{name}}, I am {{age}} years old.',
  zh: '我叫{{name}}，我今年{{age}}岁了。',
  ja: '私の名前は{{name}}で、{{age}}歳です。',
  ms: 'nama saya {{name}}, saya berumur {{age}} tahun.',
});

export const time = d({
  en: 'time {{time}}',
  zh: '时间 {{time}}',
  ja: '時間 {{time}}',
  ms: 'waktu {{time}}',
  // optional: type your arguments, by default it's `Record<'time', string | number>` in this example
})<{ time: `${number}:${number}:${number}` }>;
