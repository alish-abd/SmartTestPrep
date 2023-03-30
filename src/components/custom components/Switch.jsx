import React, { useState } from "react";
import "../../styles/components/switch.css";

const Switch = () => {
  const [lang, setLang] = useState("eng");

  const handleLangChange = (option) => {
    setLang(option);

    // console.log(chips);
  };

  return (
    <div className="container">
      <div className="radio_container">
        <input
          className="radio_container__input"
          type="radio"
          name="radio"
          id="eng"
          checked={lang === "eng"}
          onChange={() => handleLangChange("eng")}
        />
        <label className="radio_container__label" htmlFor="eng">
          Eng
        </label>
        <input
          className="radio_container__input"
          type="radio"
          name="radio"
          id="rus"
          checked={lang === "rus"}
          onChange={() => handleLangChange("rus")}
        />
        <label className="radio_container__label" htmlFor="rus">
          Rus
        </label>
      </div>
    </div>
  );
};

export default Switch;
