import React, { useState, createContext } from "react";
import { questionItems, houseMapping } from "./utils/questions";
import SortingQuizQuestionItem from "./SortingQuizQuestionItem";

export const SortingQuizContext = createContext();

function SortingQuizPage() {
  const [userResponses, setUserResponses] = useState(
    Array(questionItems.length).fill(null)
  );
  const houseScores = {
    Gryffindor: 0,
    Slytherin: 0,
    Hufflepuff: 0,
    Ravenclaw: 0,
  };

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
    currentResponses[questionIndex] = answer;
    setUserResponses(currentResponses);
  }

  function handleSubmit() {
    const userHouse = getUserHouse()
  }

  function getUserHouse() {
    userResponses.forEach((response, index) => {
      const house = houseMapping[index];
      houseScores[house] += response;
    });

    const totalScore = Object.values(houseScores).reduce(
      (currentTotal, score) => currentTotal + score,
      0
    );
    console.log(totalScore);

    const housePercentages = {};
    for (let house in houseScores) {
      housePercentages[house] = (houseScores[house] / totalScore) * 100;
    }

    const highestPercentage = Math.max(...Object.values(housePercentages));
    const userHouse = Object.keys(housePercentages).find(
      (house) => housePercentages[house] === highestPercentage
    );

    return userHouse
  }

  return (
    <div className="content-container">
      <SortingQuizContext.Provider
        value={{
          userResponses,
        }}
      >
        <div className="sortingQuestionsContainer p-4 text-center">
          {mapSortingQuestions()}
        </div>
        <button
          className="btn btn-primary"
          disabled={userResponses.includes(null)}
          onClick={() => handleSubmit()}
        >
          Submit Answers!
        </button>
      </SortingQuizContext.Provider>
    </div>
  );
}

export default SortingQuizPage;
