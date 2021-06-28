import NotFound404 from "../../assets/images/notfound.png";

import { Container } from "./styles";

const NotFound = () => {
  return (
    <Container>
      <img alt="not found" src={NotFound404} width="40%"/>
    </Container>
  );
};

export default NotFound;
