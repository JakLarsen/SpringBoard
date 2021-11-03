import React, {useState} from "react";
import './Order.css'
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
} from "reactstrap";








function Order({ items , title }) {

  return (
    <section className="order-section col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Your order so far:
            </h3>
          </CardTitle>
          <ListGroup>
              {items.map(item => (
                <div className="order-item">
                  <Link to={`/${item.itemType}/${item.id}`} key={item.id}>
                    <span className="order-item-name">{item.name}</span>
                  </Link>
                  <button className="order-remove-btn">-</button>
                </div>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Order;