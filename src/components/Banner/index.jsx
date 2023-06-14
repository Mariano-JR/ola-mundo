import React from "react";
import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/profile-pic.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá Mundo
            </h1>

            <p className={styles.paragrafo}>
                Bem vindos ao meu espaço pessoal! Eu sou Mariano Júnior, Desenvolvedor Front-End. Aqui compartilho varios conhecimentos, espero que aprenda algo novo!
            </p>
        </div>

        <div className={styles.imagens}>
            <img
                className={styles.circuloColorido}
                src={circuloColorido} 
                area-hidden={true}
                alt="Circulo Colorido"
            />

            <img 
                className={styles.minhaFoto}
                src={minhaFoto} 
                alt="Minha foto" />
        </div>
    </div>
  )
}
