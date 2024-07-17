import { Container } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

export function Details() {
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  const location = useLocation();
  const { id, name, number } = location.state || {};

  return (
    <Container>
      <h1>Details Page</h1>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Number: {number}</p>

      <button onClick={handleBack}>voltar</button>
    </Container>
  );
}
