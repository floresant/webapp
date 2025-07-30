import React, { useState } from "react";
import { groupedGlossaryData } from "./GlossaryData";
import "../Styles/Glossary.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function Glossary() {
  const [inputValue, setInputValue] = useState("");
  const [activeLetter, setActiveLetter] = useState("");

  const handleLetterClick = (letter) => {
    setActiveLetter(letter === activeLetter ? "" : letter);
    setInputValue("");
  };

  const handleButtonClick = () => {
    setActiveLetter("");
    setInputValue("");
  };

  const filteredGroup = (groupedGlossaryData, activeLetter, inputValue) => {
    const result = {};

    const lettersToCheck = activeLetter
      ? [activeLetter]
      : Object.keys(groupedGlossaryData);

    lettersToCheck.forEach((letter) => {
      const items = groupedGlossaryData[letter] || [];

      const filtered = items.filter((item) =>
        inputValue
          ? item.phrase.toLowerCase().includes(inputValue.toLowerCase())
          : true
      );

      if (filtered.length > 0) {
        result[letter] = filtered;
      }
    });

    console.log(result);

    return result;
  };

  const filteredData = filteredGroup(groupedGlossaryData, activeLetter, inputValue);

  return (
    <div>
      <input
        className="sc-fPXMVe dRqAVJ nindo-input search-bar"
        placeholder="Enter text..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setActiveLetter("");
        }}
        style={{
          borderWidth: "2px",
          borderRadius: "5px",
          color: "rgb(0, 0, 0)",
          borderColor: "rgb(102, 2, 60)",
          backgroundColor: "rgb(250, 245, 225)",
          padding: "14px",
          borderStyle: "solid",
        }}
      />
      <div className="letters-filter-container">
        {alphabet.map((letter) => (
          <div
            key={letter}
            className={`letter-filter ${
              activeLetter === letter ? "active" : ""
            }`}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      {Object.keys(filteredData).length > 0 ? (
        Object.entries(filteredData).map(([letter, items]) => (
        <div key={letter} className="character-wrapper">
          <div className="character-letter above">{letter}</div>
          <div className="character-items">
            {items.map((item) => (
              <div className="sc-kbhJrz iNdwLx">
                <div className="definition-container regular">
                  <div className="item-phrase">
                    <h3 className="phrase">{item.phrase}</h3>
                  </div>
                  <div className="definition-image-container right">
                    <div className="item-definition">
                      <p>
                        <span style={{ color: "rgb(0, 0, 0)" }}>
                          {item.definition}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))
      ) : (
        <div class="empty-message">
            <p>No Terms Found</p>
            <button className="sc-eqUAAy kjwXVB nindo-button primary" onClick={handleButtonClick}>
                Clear
            </button>
        </div>
      )}
    </div>
  );
}

export default Glossary;
