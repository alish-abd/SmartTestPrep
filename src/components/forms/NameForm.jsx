import React, { useState } from "react";
import "../../styles/components/forms.css";

const NameForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted Name: ${name} ${surname}`);
    // Do something with the submitted name and surname
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <label className="form__label" htmlFor="input">
          Name:
        </label>
        <input
          className="form__input"
          id="input"
          type="text"
          placeholder="Placeholder"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="surname-input">
          Surname:
        </label>
        <input
          className="form__input"
          id="surname-input"
          type="text"
          placeholder="Placeholder"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
      </div>
      {/* <button className="name-form__submit-btn" type="submit">
        Submit
      </button> */}
    </form>
  );
};

export default NameForm;
