import React from "react";
import '../styles/LightCatalogue.css';
import Button from './UI-Elements/Button';
import '../img/normal_search.svg';
import SearchIcon from "./UI-Elements/SearchIcon";
import DropDown from "./UI-Elements/Dropdown";
import Results from "./UI-Elements/Results";
// import { useNavigate } from "react-router-dom";

interface Props {}

const Catalogue: React.FC<Props> = ({ }) => { 
    // const navigate = useNavigate();
  return (
    <div id="main">
        <Button children="Se Connecter" styleName="se-connecter" onClick={() => console.log("You clicked")}></Button>
                <div id="content">
                    <div id="rectangle">
                        <div id="catalogue-des-cas">Catalogue des cas</div>
                        <div id="searchField">
                            <SearchIcon></SearchIcon>
                            <input id="predictive-search" placeholder="Rechercher dans le catalogue"></input>
                        </div>
                    </div>
                    <div id="smallRectangle">
                        <div id="type-de-contenu">Type de contenu :</div>
                            {/* TODO: insert div for tags here */}
                        <div id="effacer-tous-les-fil">Effacer tous les filtres</div>
                    </div>
                    <div id="smallRectangle"> 
                        <div id="filtrer-par">Filtrer par</div>
                        <div id="results"> X résultats</div>
                    </div>
                    <div id="rows">
                        <div id="rectangleFilter">
                            <DropDown children="DISCIPLINE" onClick={() => console.log("You clicked")} ></DropDown>
                            <DropDown children="SUJET" onClick={() => console.log("You clicked")} ></DropDown>
                            <DropDown children="DATE DE PARUTION" onClick={() => console.log("You clicked")} ></DropDown>
                            <DropDown children="NOMBRE DE PAGES" onClick={() => console.log("You clicked")} ></DropDown>
                            <DropDown children="AUTEUR" onClick={() => console.log("You clicked")} ></DropDown>
                        </div>
                        <div id="articles">
                            <Results title="LES BOUCHONS : une aventure entrepreneuriale" 
                                    auteurs="Franck Barès, Sabrina Hombourger-Barès, Catherine S Beaucage"
                                    content="Le cas suit le parcours entrepreneurial de Nicolas et Xavier, deux étudiants qui s’associent pour fonder LES BOUCHONS, entreprise qui vise à offrir des conseils aux consommateurs de vin. Il aborde les approches basées sur la pensée design (design thinking) et le lean start-up."
                                    date="2022-02-24"
                                    page="6"
                                    discipline="Génie Industriel"
                                    tags="Entrepreneuriat"
                                    classNumber="IND6117"
                                    className="Gestion de l’innovation">
                            </Results>
                            <Results title="LES BOUCHONS : une aventure entrepreneuriale" 
                                    auteurs="Franck Barès, Sabrina Hombourger-Barès, Catherine S Beaucage"
                                    content="Le cas suit le parcours entrepreneurial de Nicolas et Xavier, deux étudiants qui s’associent pour fonder LES BOUCHONS, entreprise qui vise à offrir des conseils aux consommateurs de vin. Il aborde les approches basées sur la pensée design (design thinking) et le lean start-up."
                                    date="2022-02-24"
                                    page="6"
                                    discipline="Génie Industriel"
                                    tags="Entrepreneuriat"
                                    classNumber="IND6117"
                                    className="Gestion de l’innovation">
                            </Results>
                            <Results title="LES BOUCHONS : une aventure entrepreneuriale" 
                                    auteurs="Franck Barès, Sabrina Hombourger-Barès, Catherine S Beaucage"
                                    content="Le cas suit le parcours entrepreneurial de Nicolas et Xavier, deux étudiants qui s’associent pour fonder LES BOUCHONS, entreprise qui vise à offrir des conseils aux consommateurs de vin. Il aborde les approches basées sur la pensée design (design thinking) et le lean start-up."
                                    date="2022-02-24"
                                    page="6"
                                    discipline="Génie Industriel"
                                    tags="Entrepreneuriat"
                                    classNumber="IND6117"
                                    className="Gestion de l’innovation">
                            </Results>
                        </div>
                    </div>
                </div>
    </div>
  );
}

export default Catalogue;