import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: start;
    font-size: 24px;
    color: #333;

    margin-bottom: 2rem;
  }
`;

export const ContainerFormControll = styled.div`

display: flex;
justify-content: space-between;
align-items: center;

gap: 1rem;

`;

export const ControlForm = styled.div`
  margin-bottom: 15px;
  width: ${({ w }) => w};

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }
`;

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

export const ContainerPrevImage = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 1rem;

  width: 100%;


  margin-bottom: 1rem;



img{
    width: 40%;
    height: 200px;

    object-fit: cover;

    padding: 2rem;
    background-color: aqua;

    border-radius: 6px;

    background-color: #f4f4f4;

}
`;