import React from 'react';
import { useAppContext } from '../context2';
import { useState } from 'react';


export default function Faq() {
  const { state } = useAppContext();
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionToggle = (index) => { setOpenAccordion((prev) => (prev === index ? null : index)); };
  return (
    <div className='container-faq-group'>
      <ul className='faq-group'> {state.faq.map((question, index) => (
          <Question key={index} handleAccordionToggle={handleAccordionToggle} openAccordion={openAccordion} index={index} question={question} />
        ))}
      </ul>
    </div>
  );
}

const Question = ({ handleAccordionToggle, openAccordion, index, question }) => {
    const isAccordionOpen = openAccordion === index;
    return (
      <li key={index} className='faq-item'>
        <Accordion isOpen={isAccordionOpen} handleAccordionToggle={() => handleAccordionToggle(index)} question={question} />
      </li>
    );
  };
  

const Accordion = ({ isOpen, handleAccordionToggle, question }) => {
    return (
      <div className={`accordion accordion-faq ${isOpen ? 'show' : ''}`}>
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button className="accordion-button" type="button" onClick={handleAccordionToggle}>
              {question.q}
            </button>
          </h4>
          <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}>
            <div className="accordion-body">
                <span key={question.id}>{question.r}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  



/* export default function Faq({ index }) {
  const { state } = useAppContext();
  const [openAccordion, setOpenAccordion] = useState(null);

  const isAccordionOpen = openAccordion === index;
  const handleAccordionToggle = () => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <Container>
      <ul>
        {state.faq.map((question, idx) => (
          <li key={question.id}>
            <div className={`accordion ${isAccordionOpen ? 'show' : ''}`}>
              <div className='accordion-item'>
                <div className='accordion-header'>
                  <button
                    className='accordion-button'
                    type='button'
                    onClick={handleAccordionToggle}
                  >
                    {question.q}
                  </button>
                </div>
                <div className={`accordion-collapse collapse ${isAccordionOpen ? 'show' : ''}`}>
                  <div className='accordion-body'>
                    <span>{question.r}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
 */