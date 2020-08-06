import styled from "styled-components";
import { H1 } from "../../components/Title";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 5px rgba(48,52,55,0.4);
`;

export const Title404 = styled(H1)`
  font-size: 48px;
  line-height: 52px;
  margin: 20px 0;
  font-weight: 800;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin: 0px 0 20px 0;
`;
