import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { Card } from "../../components/card";

import database from "../../../database.json";

export function Home() {
  const navigate = useNavigate();

  function handleClick(id, name, number) {
    navigate("/details", { state: { id, name, number } });
  }

  return (
    <Container>
      {database.map(({ id, name, number }) => {
        return (
          <Card
            key={id}
            name={name}
            number={number}
            onClick={() => handleClick(id, name, number)}
          />
        );
      })}
    </Container>
  );
}
