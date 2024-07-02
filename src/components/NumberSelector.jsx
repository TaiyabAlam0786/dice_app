import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = (
{setError,error,selectedNumber, setSelectedNumber}
) => {
  const array = [1, 2, 3, 4, 5, 6];
 const numberSelectorHandler = (item) =>{
    setSelectedNumber(item);
    setError('')
 }

  return (
    <NumberSelectorContainer>
    <p className="para">{error}</p>
      <div className="flex">
        {array.map((item, i) => (
          <Box
            isSelected={item === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(item)}
          >
            {item}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
margin-left: 20px;
.flex{
  display: flex;
  gap: 24px;
  
}
p{
font-size: 24px;
font-weight: 700px;
}
.para{
font-size: 24px;
color: red;
}
  

`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
