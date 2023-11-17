import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 25px 0px;
  align-items: baseline;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.div`
  margin-top: 100px;
  width: 500px;
  height: 450px;
  background-color: #404156;
  border-radius: 5px;
`;

export const Title = styled.div`
  border-radius: 5px 5px 0px 0px;
  background-color: #6a6c98;
  padding: 20px;
  text-align: center;
  color: white;
  font-weight: bolder;
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;

  label {
    margin-bottom: 10px;
  }
  input {
    padding: 10px 10px;
    outline: none;
    border: none;
    background-color: #eaf0ff;
    border-radius: 2px;
    margin-bottom: 10px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #6dbcd5;
  border: none;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: bold;
`;

export const Message = styled.b`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  color: #00c3ff;
`;

export const SignUpRedirect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  b {
    cursor: pointer;
    color: #00c3ff;
  }
`;
