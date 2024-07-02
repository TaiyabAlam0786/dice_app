
import styled from "styled-components";
import { Button } from "./Styled/Button";

const StartGames = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/public/images/dices1.png" alt="dices" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play now</Button>
      </div>
    </Container>
  )
};Button

export default StartGames;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display:flex;
  margin: 0 auto;
  align-items: center;
  
  .content h1{
  font-size: 96px;
  white-space: nowrap;
  }
  
  
  
`;

