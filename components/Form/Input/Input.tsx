import styled from '@emotion/styled';
import React, {InputHTMLAttributes} from 'react'

const InputData = styled.input`
width: 200px;
height: 30px;
border: none;
border-radius: 10px;
outline: 0.5px solid #ffd04e;
padding: 0 10px;
box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);
`;

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputData{...props} />
  )
}
