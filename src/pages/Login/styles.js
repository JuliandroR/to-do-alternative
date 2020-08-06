import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerLogin = styled.div`
  width: 450px;
  min-width: 150px;

  height: 250px;
  min-height: 250px;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0px 20px 15px rgba(48,52,55,0.2);
  padding: 2% 3%;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: center
`;
