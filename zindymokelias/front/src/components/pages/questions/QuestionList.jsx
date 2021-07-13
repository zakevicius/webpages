import React, { useEffect, useContext, useState } from 'react';
import './questionList.css';

import Question from './Question.jsx';
import Divider from "../../elements/Divider.jsx";

const QuestionList = ({ cat, subCat, questions, loading }) => {
  useEffect(() => {}, [questions.length]);

  const renderQuestions = () => {
    if (loading) return 'Loading';
    const questionsToRender = questions.filter((question) => {
      if (!cat && !subCat) return question;
      if (subCat) {
        return question.subCat === subCat;
      } else {
        return question.cat === cat;
      }
    });

    if (questionsToRender.length > 0) {
      return questionsToRender.map((question, i) => (
        <>
          <Question index={i} key={question.id} question={question} />
          {i !== questionsToRender.length - 1 ? (
            <Divider key={question.id} />
          ) : null}
        </>
      ));
    } else {
      // return "No questions";
      return (
        <>
          <Question key={Math.random()}/>
        </>
      );
    }
  };

  return (
    <div className='question-list section width flex wrap middle-X'>
      {renderQuestions()}
    </div>
  );
};

export default QuestionList;
