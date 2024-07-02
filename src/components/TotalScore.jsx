import React from 'react'
import styled from 'styled-components'
const TotalScore = ({score}) => {
  return (
  
    <ScoreContainer>
    <h1>{score}</h1>
    <p>Total score: </p>
    </ScoreContainer>
   
  )
}

export default TotalScore;

const ScoreContainer = styled.div`
max-width:200px;
text-align:center;
h1{
    font-size:100;
    }
    p{
    font-size: 24px;
    font-weight: 500px;
    }
`
