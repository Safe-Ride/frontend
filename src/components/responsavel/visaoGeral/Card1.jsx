import React from "react";
import styles from "./Card1.module.css";


const CardVisao = () => {
  return (
   <div className="Card">
    <div className="Information">
        <p className="nameDependent"></p>
        <p className="Status"></p>
    </div>
    <div className="MedionCard">
        <div className="exitBox">
            <div className="img-status-exit">
                <img src="" alt="" />
            </div>
            
            </div>
            <div className="BoxArrow">
                <img className="Arrow" src="" alt="" />
            </div>
            <div className="returnBox">
                 
            </div>

            <div className="returnBOX">
            <div className="img-status-return">
                <img src="" alt="" />
            </div>
            </div>
            <div className="footer">
            <p>Ver Dependente</p>
            </div>
            
        
    </div>

   </div>
  );
};

export default CardVisao;
