import React from "react";
import '../../styles/LightResults.css';
import Button from './Button';

interface Props {
//   onClick: () => void;
  title: React.ReactNode;
  auteurs: React.ReactNode;
  content: React.ReactNode;
  date: React.ReactNode;
  page: React.ReactNode;
  children:React.ReactNode;
  discipline: React.ReactNode;
  tags: React.ReactNode;
  className: React.ReactNode;
  classNumber: React.ReactNode;
}

const Results: React.FC<Props> = ({ 
    // onClick, 
    title,
    auteurs,
    content,
    date,
    page,
    discipline,
    tags,
    className,
    classNumber,
  }) => { 
  return (
    <div id="viewArticles"> 
        <div id="first">
            <div id="title">{title}</div>
            <div id="authors">Auteurs : {auteurs}</div>
            <div id="preview">{content}</div>
            <div id="date"> Date : {date}</div>
            <div id="page"> Nombre de pages : {page}</div>
            <div id="placement">
                <div id="discipline"> Discipline : {discipline}</div>
                <div id="positionButton">
                    <Button children="Consulter" styleName="consulter" onClick={() => console.log("You clicked")}></Button>
                </div>
            </div>
            <div id="tags"> Sujet(s) : {tags}</div>
        </div>
        <div id="second">
            <div id="ratings">
                <div>stars</div>
                <div id="votes">(X votes)</div>
            </div>
            <div id="usedClass">Actuellement utilisé dans le cours : </div>
            <div id="name">
                <div>{classNumber}</div>
                <div>{className}</div>
                <button id="info">Plus d'info</button>
            </div>
            
        </div>
        
    </div>
  );
}

export default Results;