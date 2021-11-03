import React from "react";
import './Order.css'
import { Link } from "react-router-dom";

import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
} from "reactstrap";

function OrderMenu({ items , title }) {

  let itemType = title.toLowerCase()

  let itemDesc = itemType == 'snacks' ? 
  'Apps and entres of the highest calibre.' : 'Best drinks this side of the river.'

  return (

    <section className="col-md-4">

      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {`${title} Menu`}
          </CardTitle>
          <CardText>
            {itemDesc}
          </CardText>
          <ListGroup>
              {items.map(item => (
                <div className="order-item">
                  <Link to={`/${itemType}/${item.id}`} key={item.id}>
                    <span className="order-item-name">{item.name}</span>
                  </Link>
                  <button className="order-add-btn">+</button>
                </div>
              ))}
          </ListGroup>
        </CardBody>
      </Card>

    </section>
  );
}

export default OrderMenu;