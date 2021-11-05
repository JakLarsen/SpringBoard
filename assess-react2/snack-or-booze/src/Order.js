import React, {useState} from "react";
import './css/Order.css'
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
} from "reactstrap";



/**
 * Basic Order display, showing the snacks or drinks (MenuItems) you've added to it
 * [order, setOrder, addToOrder removeFromOrder] state is managed in Routes.js
 */

function Order({ items , title, removeFromOrder }) {

  return (
    <section className="order-section col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <span className="font-weight-bold">
              Your order so far:
            </span>
          </CardTitle>
          <ListGroup>
              {items.map(item => (
                <div className="order-item">
                  <Link to={`/${item.itemType}/${item.id}`} key={item.id}>
                    <span className="order-item-name">{item.name}</span>
                  </Link>
                  <button onClick={()=>removeFromOrder(item.id)} className="order-remove-btn">-</button>
                </div>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Order;