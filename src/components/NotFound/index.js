import NotFound404 from "../../assets/images/notfound.png";

import { Container, Image } from "./styles";

const NotFound = () => {
  return (
    <Container>
      <Image alt="not found" src={NotFound404} />
    </Container>
  );
};

export { NotFound };
