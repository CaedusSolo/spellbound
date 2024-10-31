import React, { useState, useId } from "react";
import { questionItems, questionsMapping } from "./utils/questions";
import SortingQuizQuestionItem from "./SortingQuizQuestionItem";

function SortingQuizPage() {
  const [userResponses, setUserResponses] = useState([]);
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
        />
      );
    });
  }

  return (
    <div className="content-container">
      <div className="sortingQuestionsContainer p-4 text-center">
        {mapSortingQuestions()}
      </div>
      <button className="btn btn-secondary">Submit Answers!</button>
    </div>
  );
}

export default SortingQuizPage;
