import React from "react";
import './MenuItem.css'
import { Redirect, useParams, useHistory } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function MenuItem({ items, cantFind }) {
  
  const { id } = useParams();
  let history = useHistory();

  let menuItem = items.find(menuItem => menuItem.id === id);
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
