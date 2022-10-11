import React from 'react';
import styles from './Header.module.css';
// Existem 5 maneiras de utilizar CSS no React
// 1. CSS puro 
// 2. CSS Modules
// 3. Sass
// 4. Styled Components
// 5. Emotion
import {css} from '@emotion/css';
import Link from 'next/link';
import styled from '@emotion/styled';
import Input from '../Form/Input';
import Button from '../Form/Button';


//Styled Component cria o componente Header e o estiliza
const HeaderPage = styled.header`
width: 100%;
height: 100px;
background: rgb(247, 243, 200);
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;

`;

const NavMenu = styled.nav`
width: 80%;
height: 50px;
display: flex;
justify-content: center;
& a:hover {
  font-weight: bold;
}
& li{
  margin-top: 4px;
  border-bottom: 4px solid transparent;
  padding-bottom: 20px;
}
& li:hover {
  border-bottom: 2px solid orange;  
  transition: .4s;
}

`;

type HeaderProps = {
  pesquisar ?: string;
  menu?: Array<string>;
}

//input
//button
//ambos sem bordas
export default function header(props: HeaderProps) {
  return (
    //<header className={styles['menu-site']}>
    <HeaderPage>
        <div>Logotipo</div>
        <NavMenu>
          <ul className={css`
          margin: 0;
          padding: 0;
          display: inline-flex;
          & > li{
            list-style: none;
            min-width: 100px;
            text-align: center;
            padding: 10px;
          }
          `}>
            <li><Link href="">Home</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="#">Galeria</Link></li>
            <li><Link href="#">Serviços</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Contato</Link></li>
          </ul>
        </NavMenu>
        <div className={css`
          display: flex;
        `}>
          <Input type="text" placeholder="Pesquisar" />
          <Button >{props.pesquisar?props.pesquisar:"Search"}</Button>
        </div>
    </HeaderPage>
    
  )
}
