import React from "react";

function SortingQuizQuestionItem({ question, questionIndex }) {
  function mapOptions() {
    return Array.from({ length: 7 }, (_, i) => (
      <>
        <input
          type="radio"
          name={`option-${questionIndex}`}
          id={`option-${questionIndex}`}
          value={i+1}
          className="sortingOptionInput"
        />
        <label htmlFor={`option-${questionIndex}`} 
         className="sortingOptionLabel"
        >{i+1}</label>
      </>
    ));
  }

  return (
    <div className="sortingQuestionItem mt-2">
      <h4 className="sortingQuestion fst-italic">{question}</h4>
      <div className="sortingOptions">{mapOptions()}</div>
    </div>
  );
}

export default SortingQuizQuestionItem;
