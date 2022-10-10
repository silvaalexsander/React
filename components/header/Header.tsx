import React from 'react'
import styles from './Header.module.css'
// Existem 5 maneiras de utilizar CSS no React
// 1. CSS puro 
// 2. CSS Modules
// 3. Sass
// 4. Styled Components
// 5. Emotion
import {css} from '@emotion/css'
import Link from 'next/link'
import styled from '@emotion/styled'

const HeaderPage = styled.header`
width: 100%;
height: 100px;
background: rgb(247, 243, 232);
display: flex;
align-items: center;
justify-content: space-between;

`

export default function header() {
  return (
    //<header className={styles['menu-site']}>
    <HeaderPage>
        <div>Logotipo</div>
        <nav>
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
        </nav>
        <div>Caixa de Busca</div>
    </HeaderPage>
    
  )
}
