const LanguageSelect = ({ lang, setLang }) => {
  console.log("lang", lang);
  return (
    <select
      name=""
      id=""
      value={lang}
      onChange={(e) => setLang(e.target.value)}
    >
      <option value="en">English</option>
      <option value="hi">Hindi</option>
    </select>
  );
};

export default LanguageSelect;
