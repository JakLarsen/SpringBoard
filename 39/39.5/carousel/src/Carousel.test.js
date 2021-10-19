import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";








it("renders without crashing", function() {
  render(<Carousel />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the arrows", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

   // move backwards in the carousel
   const leftArrow = queryByTestId("left-arrow");
   fireEvent.click(leftArrow);
 
   // when clicked from the second image, expect the first image to show, but not the third
   expect(queryByAltText("Photo by Josh Post on Unsplash")).not.toBeInTheDocument();
   expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
});

it("arrow display/hidden works", function() {
  const { getByTestId } = render(<Carousel />);
  const leftArrow = getByTestId("left-arrow");
  const rightArrow = getByTestId("right-arrow");

  // expect the left arrow to be missing, but the right button to be present.
  expect(leftArrow).toHaveClass("hidden");
  expect(rightArrow).not.toHaveClass("hidden");

  // move forward
  fireEvent.click(getByTestId("right-arrow"));

  // expect both arrows to be present.
  expect(leftArrow).not.toHaveClass("hidden");
  expect(rightArrow).not.toHaveClass("hidden");

  // move forward
  fireEvent.click(rightArrow);

  //expect right arrow to be missing, left still present
  expect(leftArrow).not.toHaveClass("hidden");
  expect(rightArrow).toHaveClass("hidden");

});

