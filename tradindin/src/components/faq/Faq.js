import React, {useState} from "react";
import "./Faq.css";


const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className="accordion-wrapper">
        
        <div
          className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          {title}
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  };

 export default function Faq(){

  
return(
    <div className="wrapper">
    <Accordion title="O que faz a TraDinDin?">
      Sunlight reaches Earth's atmosphere and is scattered in all directions by
      all the gases and particles in the air. Blue light is scattered more than
      the other colors because it travels as shorter, smaller waves. This is why
      we see a blue sky most of the time.
    </Accordion>
    <Accordion title="Como criar uma conta na TraDinDin?">
      It's really hot inside Jupiter! No one knows exactly how hot, but
      scientists think it could be about 43,000°F (24,000°C) near Jupiter's
      center, or core.
    </Accordion>
    <Accordion title="O site é seguro?">
      A black hole is an area of such immense gravity that nothing -- not even
      light -- can escape from it.
    </Accordion>
    <Accordion title="Como encontrar um vendedor?">
      Sunlight reaches Earth's atmosphere and is scattered in all directions by
      all the gases and particles in the air. Blue light is scattered more than
      the other colors because it travels as shorter, smaller waves. This is why
      we see a blue sky most of the time.
    </Accordion>
    <Accordion title="Posso vender qualquer moeda?">
      It's really hot inside Jupiter! No one knows exactly how hot, but
      scientists think it could be about 43,000°F (24,000°C) near Jupiter's
      center, or core.
    </Accordion>
    <Accordion title="Qual a quantidade máxima de troca?">
      A black hole is an area of such immense gravity that nothing -- not even
      light -- can escape from it.
    </Accordion>
  </div>
);

}