import React from "react";
import "../../styles/components/chip.css";

const Chip = ({ data, onDelete }) => {
  return (
    <div className="chip">
      <div className="chip__type">
        <p>{data.selectedOption}</p>
      </div>

      <h3 className="chip__name">{data.activityName}</h3>
      <p className="chip__description">{data.description}</p>

      <p className="chip__tier">{data.tier}</p>

      <button className="chip-delete" onClick={() => onDelete(data)}>
        Delete
      </button>
    </div>
  );
};

export default Chip;
