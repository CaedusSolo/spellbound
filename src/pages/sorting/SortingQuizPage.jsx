import React, { useState, createContext } from "react";
import { questionItems, questionsMapping } from "./utils/questions";
import SortingQuizQuestionItem from "./SortingQuizQuestionItem";

export const SortingQuizContext = createContext();

function SortingQuizPage() {
  const [userResponses, setUserResponses] = useState(
    Array(questionItems.length).fill(null)
  );
  const [scores, setScores] = useState({
    Gryffindor: 0,
    Slytherin: 0,
    Hufflepuff: 0,
    Ravenclaw: 0,
  });

  function mapSortingQuestions() {
    return questionItems.map((question, index) => {
      return (
        <SortingQuizQuestionItem
          question={question}
          questionIndex={index}
          key={index}
          onAnswerChange={handleAnswerChange}
        />
      );
    });
  }

  function handleAnswerChange(questionIndex, answer) {
    const currentResponses = [...userResponses];
    console.log(currentResponses)
    currentResponses[questionIndex] = answer;
    setUserResponses(currentResponses);
  }

  return (
    <div className="content-container">
      <SortingQuizContext.Provider value={{
        userResponses,
        scores
      }}>
        <div className="sortingQuestionsContainer p-4 text-center">
          {mapSortingQuestions()}
        </div>
        <button
          className="btn btn-primary"
          disabled={userResponses.includes(null)}
        >
          Submit Answers!
        </button>
      </SortingQuizContext.Provider>
    </div>
  );
}

export default SortingQuizPage;
