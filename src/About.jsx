import { langConfig } from "./utils/lang";
const About = ({ lang }) => {
  console.log("lang", lang);
  const {
    ABOUT,
    ABOUT_DESC,
    ABOUT_THE_PRODUCT,
    ABOUT_THE_PRODUCT_DESC,
    INFO_FOR_WEBSITE,
    INFO_FOR_WEBSITE_DESC,
  } = langConfig[lang];
  return (
    <>
      <div>
        <h1>{ABOUT}</h1>
        <p>{ABOUT_DESC}</p>
      </div>

      <div>
        <h1>{ABOUT_THE_PRODUCT}</h1>
        <p>{ABOUT_THE_PRODUCT_DESC}</p>
      </div>

      <div>
        <h1>{INFO_FOR_WEBSITE}</h1>
        <p>{INFO_FOR_WEBSITE_DESC}</p>
      </div>
    </>
  );
};

export default About;
