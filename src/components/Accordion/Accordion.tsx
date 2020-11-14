import { connected } from 'process';
import React, { useState, useRef } from 'react';

import './Accordion.css';

interface AccordionProps {
    title: string;
    fetchUrl: string;
    details: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, fetchUrl, details }: AccordionProps) => {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const accordionContent = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${!!accordionContent.current?.scrollHeight}px`
            );
      }

      return (
        <div className="accordion__section">
          <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <p className="accordion__title">{title}</p>
            <img key={fetchUrl} className={`row-fund row-fund-details`} src={fetchUrl} alt={title}/>
          </button>
          <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
            <div
              className="accordion__text"
              dangerouslySetInnerHTML={{ __html: props.content }}
            />
          </div>
        </div>
      );

}

export default Accordion;