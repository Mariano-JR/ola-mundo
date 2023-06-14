import React from 'react'
import styles from './SobreMim.module.css'
import PostModelo from 'components/PostModelo'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/profile-pic.png'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre Mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou Mariano!
      </h3>

      <img 
        className={styles.fotoSobreMim}
        src={fotoSobreMim} 
        alt="Foto do perfil" 
      />

      <p className={styles.paragrafo}></p>
      <p className={styles.paragrafo}></p>
      <p className={styles.paragrafo}></p>
      <p className={styles.paragrafo}></p>
      <p className={styles.paragrafo}></p>
      <p className={styles.paragrafo}></p>
    </PostModelo>
  )
}
