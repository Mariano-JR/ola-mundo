import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import PostModelo from "components/PostModelo";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "components/PaginaPadrao";
import PostCard from "components/PostCard";
import posts from "json/posts.json";
import styles from "./Post.module.css";
import "./Post.css";

export default function Post() {
  const parametros = useParams();

  const postCompleto = posts.find((post) => post.id === Number(parametros.id));

  if (!postCompleto) {
    return <NaoEncontrada />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${postCompleto.id}/capa.png`}
              titulo={postCompleto.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{postCompleto.texto}</ReactMarkdown>
              </div>

              <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
              </h2>

              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
