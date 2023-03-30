import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/components/forms.css";

const DemographicsForm = () => {
  const [gender, setGender] = useState("");
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    axios
      .get("https://api.dev-smartestprep.com/api/directory/countries/")
      .then((response) => setCountries(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://api.dev-smartestprep.com/api/directory/cities/")
      .then((response) => setCities(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  function handleCountryChange(event) {
    setCountry(event.target.value);
  }

  return (
    <form className="form">
      <div className="form__group">
        <label className="form__label" htmlFor="gender-dropdown">
          Gender:
        </label>
        <select
          className="form__select"
          id="gender-dropdown"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="">Select Gender</option>
          <option className="" value="male">
            Male
          </option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="country-dropdown">
          Country of Residence:
        </label>
        <select
          className="form__select"
          id="country-dropdown"
          value={country}
          onChange={handleCountryChange}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="city-dropdown">
          City of Residence:
        </label>
        <select
          className="form__select"
          id="city-dropdown"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default DemographicsForm;
