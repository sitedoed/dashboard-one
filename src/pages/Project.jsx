import React from 'react'
import Layout from '../components/Layout'

export default function Project() {
  return (
    <Layout>
      <section>
        <article>
          <h1>Projeto: DashBoard One</h1>
          <p>
            O Dashboard One é um projeto responsivo e personalizável, utilizado como painel de controle de aplicações WEB
          </p>
          <br></br>
          <h2>Principais Tecnologias</h2>
          <ul>
            <li>ReactJS</li>
            <li>Editor de Textos Wysiwyg - Disponível em: <a href="https://jpuri.github.io/react-draft-wysiwyg/#/" target="_blank" rel="noreferrer">React Draft Wysiwyg</a></li>
            <li>Editor de TimyMCE - Disponível em: <a href="https://www.tiny.cloud/" target="_blank" rel="noreferrer">TimyMCE Editor</a></li>
          </ul>
        </article>
      </section>
    </Layout>
  )
}
