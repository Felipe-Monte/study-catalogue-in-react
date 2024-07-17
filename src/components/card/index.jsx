import { Container } from "./styles"

export function Card({ name, number, onClick}){
  return(
    <Container onClick={onClick}>
      <h1>{name}</h1>
      <h2>{number}</h2>
    </Container>
  )
}