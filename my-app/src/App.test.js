import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import {App, Counter }from './App';
import App from './App';
import Counter from './Counter';

test('testing a test', () => {
  console.log("test is running")     
});


test('renders learn react link', () => {
  render(<App />);


  // console.log(linkElement)
  
 

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  // const simulatedDom = screen.getAllByAltText  
});

test('renders Hello World/', () => {
  render(<App />);


  // console.log(linkElement)
  
  // const element  = screen.getByText(/Hello World/i)
  const element  = screen.queryByText(/Hello World/i)
  // console.log(element)
  expect(element).toBeInTheDocument();
  expect(element).toBeTruthy()
  expect(element).toBeVisible()

  // const simulatedDom = screen.queryByText(/Lambda/i)  
  const simulatedDom = screen.queryByText(/Lambda/i)  
  expect(simulatedDom).toBeInTheDocument();
  console.log(simulatedDom.textContent)
});


test("increments count when increment button is clicked", async () => {
  // Arrange
  render(<Counter />);
  // Act
  const count = screen.getByText(/0/i);
  // get the button node
  const button = screen.getByText(/increment/i);
  // simulate a user click
  userEvent.click(button)
  // userEvent.click(button);
  // Assert
  expect(count).toHaveTextContent("1"); //passes with 1 because we expect it to be 1 after a button click
  expect(count).not.toHaveTextContent("0");
});
