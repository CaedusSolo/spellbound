import React, { useContext } from "react";
import { SortingQuizContext } from "./SortingQuizPage";

function SortingQuizQuestionItem({ question, questionIndex, onAnswerChange }) {
  const { userResponses } = useContext(SortingQuizContext);

  function mapOptions() {
    return Array.from({ length: 7 }, (_, i) => {
      const optionValue = i + 1;
      const optionId = `option-${questionIndex}-${optionValue}`;
      return (
        <React.Fragment key={optionValue}>
          {i === 0 && (
            <p className="d-inline-block align-text-bottom mx-1">Disagree</p>
          )}
          <input
            type="radio"
            name={`option-${questionIndex}`}
            id={optionId}
            value={optionValue}
            className={`sortingOptionInput`}
            onChange={() => onAnswerChange(questionIndex, i + 1)}
          />
          <label
            htmlFor={optionId}
            className={`sortingOptionLabel ${
              userResponses[questionIndex] === optionValue ? "checked" : ""
            }`}
          >
            {optionValue}
          </label>
          {i === 6 && (
            <p className="d-inline-block align-text-bottom mx-1">Agree</p>
          )}
        </React.Fragment>
      );
    });
  }

  return (
    <div className="sortingQuestionItem mb-3">
      <h4 className="sortingQuestion fst-italic">{question}</h4>
      <div className="sortingOptions">{mapOptions()}</div>
    </div>
  );
}

export default SortingQuizQuestionItem;
