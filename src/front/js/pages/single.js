import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const SingleArticle = () => {
    // const params = useParams()
    // const {store,actions} = useContext(Context)
    // useEffect(() => {
    //     actions.getCharacter(params.uid)
    //   }, []);
  return (
    <div className="card mb-3" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202211/08/00108346400420____6__640x640.jpg" className="img-fluid rounded-start" />
        </div>
        {/* <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{store.articles?.properties?.name}</h5>
            <p className="card-text">
              {store.articles?.description}
            </p>
            
          </div>
        </div>
      </div>
      <div className="g-0 d-flex justify-content-around p-1 border-top">
        <div>
            Height: {store.character?.properties?.height}
        </div>
        <div>
            Birth Year: {store.character?.properties?.birth_year}
        </div>
        <div>
            Gender: {store.character?.properties?.gender}
        </div>
        <div>
            Eye Color: {store.character?.properties?.eye_color}
        </div>
        <div>
            Hair Color: {store.character?.properties?.hair_color}
        </div>*/}
      </div> 
    </div>
  );
};