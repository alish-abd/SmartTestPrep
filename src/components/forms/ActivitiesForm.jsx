import React, { useState, useEffect, Children } from "react";
import axios from "axios";
import "../../styles/components/forms.css";
import Chip from "../custom components/Chip";

const ActivitiesForm = () => {
  const [selectedOption, setSelectedOption] = useState("Extracurriculars");

  const [activityName, setActivityName] = useState("");
  const [description, setDescription] = useState("");
  const [tier, setTier] = useState("");

  const [chips, setChips] = useState([]);

  const handleChipDelete = (chipToDelete) => {
    setChips(chips.filter((chip) => chip !== chipToDelete));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log();
  };

  const handleAddActivity = (event) => {
    setChips([...chips, { activityName, description, selectedOption, tier }]);
    console.log(chips);
    setActivityName("");
    setDescription("");
    setSelectedOption("Extracurriculars");
    setTier("");
  };

  const handleOptionChange = (option) => {
    console.log("before" + selectedOption);
    console.log("after" + option);
    setSelectedOption(option);

    // console.log(chips);
  };

  const handleTierChange = (event) => {
    setTier(event.target.value);
    console.log(chips);
  };

  return (
    <div>
      <form className="form__activities" onSubmit={handleSubmit}>
        <div className="form__group">
          <label className="form__label">Activity type</label>
          <div className="form__horizontal">
            <label className="form__label__radio">
              <input
                type="radio"
                name="activityType"
                value={"Extracurriculars"}
                checked={selectedOption === "Extracurriculars"}
                onChange={() => handleOptionChange("Extracurriculars")}
              />
              Extracurriculars
            </label>
            <label className="form__label__radio">
              <input
                type="radio"
                name="activityType"
                value={"Honors"}
                checked={selectedOption === "Honors"}
                onChange={() => handleOptionChange("Honors")}
              />
              Honors
            </label>
          </div>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="country-dropdown">
            Tier:
          </label>
          <select
            className="form__select"
            id="country-dropdown"
            value={tier}
            onChange={handleTierChange}
          >
            <option value="1 - Exceptional">Choose tier</option>
            <option value="1 - Exceptional">1 - Global Excellence</option>
            <option value="2 - National Excellence">
              2 - National Excellence
            </option>
            <option value="3 - Regional Excellence">
              3 - Regional Excellence
            </option>
            <option value="4 - School Excellence">4 - School Excellence</option>
            <option value="5 - Effort Award">5 - Effort Award</option>
          </select>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="input">
            Activity name
          </label>
          <input
            className="form__input"
            id="input"
            type="text"
            placeholder="Entre a name of activity"
            value={activityName}
            onChange={(event) => setActivityName(event.target.value)}
          />
        </div>
        <div className="form__group-area">
          <label className="form__label" htmlFor="input">
            Description
          </label>
          <textarea
            className="form__input-area"
            id="description"
            type="textarea"
            rows="5"
            placeholder="Entre a description of activity"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <button className="form__button" onClick={handleAddActivity}>
          Add Activity
        </button>
      </form>
      <div className="chip-container">
        {chips.map((chip, index) => (
          <Chip key={index} data={chip} onDelete={handleChipDelete} />
        ))}
      </div>
    </div>
  );
};

export default ActivitiesForm;
