import styled from '@emotion/styled';
import React, {ButtonHTMLAttributes} from 'react'

const ButtonData = styled.button`
width: 100px;
height: 33px;
border: none;
background: linear-gradient(150deg, #ffa600 20%, #e7b860 100%);
border-radius: 10px;
margin-left: 10px;
cursor: pointer;
&:hover {
  background: #ffa60058;
}
&:disabled {
    background: #ccc;
    cursor: not-allowed;
    color: #666;
}

`;

type ButtonProps = {
    children: React.ReactNode;
}
//Union Types - Typescript Avançado
type ButtoUnion = ButtonProps | ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtoUnion) {
  return (
    <ButtonData {...props}>{props.children}</ButtonData>
  )
}
