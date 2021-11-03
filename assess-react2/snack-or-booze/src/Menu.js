import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import MenuItemForm from "./MenuItemForm";

function Menu({ items , title }) {

  let itemType = title.toLowerCase()

  let itemDesc = itemType == 'snacks' ? 
  'Apps and entres of the highest calibre.' : 'Best drinks this side of the river.'

  return (
    <div>
      
        <section>
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
                  <Link to={`/${itemType}/${item.id}`} key={item.id}>
                    <ListGroupItem>{item.name}</ListGroupItem>
                  </Link>
                ))}
              </ListGroup>
            </CardBody>
          </Card>
        </section>

        <MenuItemForm title={title}/>
        
    </div>
    


  );
}

export default Menu;
