import React from "react";
import { Link } from "react-router-dom";
import "./css/Menu.css";
import MenuItemForm from "./MenuItemForm";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";


/**
 * Menu display for either SnackItem components or DrinkItem components
 * We grab itemType as a toggle for whether to make a Snack menu or Drink menu
 */
function Menu({ items , title, addSnack, addDrink }) {

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

              {/* Display each item with a link to their MenuItem component display view */}
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

        <MenuItemForm title={title} addSnack={addSnack} addDrink={addDrink}/>
        
    </div>
    


  );
}

export default Menu;
