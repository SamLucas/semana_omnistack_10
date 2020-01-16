import React from "react";

import "./styles/global.css";
import "./styles/app.css";
import "./styles/aside.css";
import "./styles/main.css";

export default function src() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form action="">
          <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/30835506?s=460&v=4"
                alt="Samuel Lucas"
              />
              <div className="user-info">
                <strong>Samuel Lucas</strong>
                <span>ReactJS, React Native, NodeJs</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              asperiores autem et deleniti est blanditiis. Laudantium possimus
              nobis odit provident asperiores, dignissimos mollitia quisquam
              iusto deleniti laborum sint, repellat vel?
            </p>
            <a href="https://github.com/SamLucas">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/30835506?s=460&v=4"
                alt="Samuel Lucas"
              />
              <div className="user-info">
                <strong>Samuel Lucas</strong>
                <span>ReactJS, React Native, NodeJs</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              asperiores autem et deleniti est blanditiis. Laudantium possimus
              nobis odit provident asperiores, dignissimos mollitia quisquam
              iusto deleniti laborum sint, repellat vel?
            </p>
            <a href="https://github.com/SamLucas">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/30835506?s=460&v=4"
                alt="Samuel Lucas"
              />
              <div className="user-info">
                <strong>Samuel Lucas</strong>
                <span>ReactJS, React Native, NodeJs</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              asperiores autem et deleniti est blanditiis. Laudantium possimus
              nobis odit provident asperiores, dignissimos mollitia quisquam
              iusto deleniti laborum sint, repellat vel?
            </p>
            <a href="https://github.com/SamLucas">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/30835506?s=460&v=4"
                alt="Samuel Lucas"
              />
              <div className="user-info">
                <strong>Samuel Lucas</strong>
                <span>ReactJS, React Native, NodeJs</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              asperiores autem et deleniti est blanditiis. Laudantium possimus
              nobis odit provident asperiores, dignissimos mollitia quisquam
              iusto deleniti laborum sint, repellat vel?
            </p>
            <a href="https://github.com/SamLucas">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/30835506?s=460&v=4"
                alt="Samuel Lucas"
              />
              <div className="user-info">
                <strong>Samuel Lucas</strong>
                <span>ReactJS, React Native, NodeJs</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              asperiores autem et deleniti est blanditiis. Laudantium possimus
              nobis odit provident asperiores, dignissimos mollitia quisquam
              iusto deleniti laborum sint, repellat vel?
            </p>
            <a href="https://github.com/SamLucas">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/30835506?s=460&v=4"
                alt="Samuel Lucas"
              />
              <div className="user-info">
                <strong>Samuel Lucas</strong>
                <span>ReactJS, React Native, NodeJs</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              asperiores autem et deleniti est blanditiis. Laudantium possimus
              nobis odit provident asperiores, dignissimos mollitia quisquam
              iusto deleniti laborum sint, repellat vel?
            </p>
            <a href="https://github.com/SamLucas">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/30835506?s=460&v=4"
                alt="Samuel Lucas"
              />
              <div className="user-info">
                <strong>Samuel Lucas</strong>
                <span>ReactJS, React Native, NodeJs</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              asperiores autem et deleniti est blanditiis. Laudantium possimus
              nobis odit provident asperiores, dignissimos mollitia quisquam
              iusto deleniti laborum sint, repellat vel?
            </p>
            <a href="https://github.com/SamLucas">Acessar perfil do Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}
