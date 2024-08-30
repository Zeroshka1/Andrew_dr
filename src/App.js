import { useState } from 'react';
import puck from './puck-berserk.gif';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState(null);

  const handleFirstQuestion = (answer) => {
    if (answer === 'yes') {
      setStep(2);
    } else {
      setError('Тогда уходи');
    }
  };

  const handleSecondQuestion = (answer) => {
    if (answer === 'yes') {
      setStep(3);
    } else {
      setError('Приходи через год');
    }
  };

  return (
    <div className="App">
      <img src={puck} className="puck" alt="Puck" />

      {error ? (
        <div className='error_message'>{error}</div>
      ) : (
        <>
          {step === 1 && (
            <div className="question_wrapper">
              <h1 className="question_text">Тебя зовут Андрей?</h1>
              <div className="answers">
                <button className="answer_button" onClick={() => handleFirstQuestion('yes')}>Да</button>
                <button className="answer_button" onClick={() => handleFirstQuestion('no')}>Нет</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="question_wrapper">
              <h1 className="question_text">У тебя сегодня ДР?</h1>
              <div className="answers">
                <button className="answer_button" onClick={() => handleSecondQuestion('yes')}>Да</button>
                <button className="answer_button" onClick={() => handleSecondQuestion('no')}>Нет</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <a className='final' href='https://vk.com/away.php?to=https%3A%2F%2Faidn.jp%2Fwowa%2F320468120&cc_key='>Тогда это для тебя</a>
          )}
        </>
      )}
    </div>
  );
}

export default App;
