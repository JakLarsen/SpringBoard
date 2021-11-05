import React from "react";
import './css/MenuItem.css'
import { Redirect, useParams, useHistory } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";



/**
 * Displays a clicked-on DrinkItem or SnackItem as a dual-purpose MenuItem
 */
function MenuItem({ items, cantFind }) {
  
  //Grab the id from URL params
  const { id } = useParams();
  let history = useHistory();

  let menuItem = items.find(menuItem => menuItem.id === id);
  //if the item doesn't exist, redirect to designated cantFind location
  if (!menuItem) return <Redirect to={cantFind} />;

  const goBack = () => {
    history.goBack();
  }

  return (
    <section>
      <Card>
        <CardBody>
          <span className="back-btn" onClick={goBack}> Back </span>
          <CardTitle className="font-weight-bold text-center">
            {menuItem.name}
          </CardTitle>
          <CardText className="font-italic">{menuItem.description}</CardText>
          <p>
            <b>Recipe:</b> {menuItem.recipe}
          </p>
          <p>
            <b>Serve:</b> {menuItem.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default MenuItem;
