import React, { useState, createContext, useContext } from "react";
import { questionItems, houseMapping } from "./utils/questions";
import SortingQuizQuestionItem from "./SortingQuizQuestionItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import { useUser } from "../../UserProvider";

export const SortingQuizContext = createContext();

function SortingQuizPage() {
  const { authState } = useAuth();
  const { updateUserInfo } = useUser();
  const { navigate } = useNavigate();
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
    const userHouse = getUserHouse();
    const response = axios.post("http://localhost:5000/sorting/set_house", {
      username: authState.username,
      house: userHouse,
    });
    if (response) {
      handleSortingComplete(userHouse);
    }
  }

  function handleSortingComplete(house) {
    updateUserInfo({ house });
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

    return userHouse;
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
