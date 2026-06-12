import { useT, setLanguage, intro, time } from './locales';

export const Page1 = () => {
  const { language, t } = useT();

  return (
    <>
      <select
        name="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en')}
      >
        <option value="en">English</option>
        <option value="zh">Chinese</option>
        <option value="ja">Japanese</option>
        <option value="ms">Malay</option>
      </select>
      <p>{t(intro, { name: 'John', age: 30 })}</p>
      <p>{t(time, { time: '12:00:00' })}</p>
    </>
  );
};
