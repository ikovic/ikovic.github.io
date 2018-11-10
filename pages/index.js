import { Layout } from '../components/index';

export default () => (
  <Layout>
    <div className="container has-text-centered">
      <div className="columns is-vcentered">
        <div className="column is-5">
          <figure className="image is-4by3">
            <img src="/static/profile.png" alt="Description" />
          </figure>
        </div>
        <div className="column is-6 is-offset-1">
          <h1 className="title is-2">Ivan Kovic</h1>
          <h2 className="subtitle is-4">Full-stack developer</h2>
          <br />
          <div>
            <p>
              Happy to do stuff both on server and in browser. Interested in architecture, design patterns and building
              maintainable software. Currently using JavaScript, but always looking for new things to learn.
            </p>
            <div className="social">
              <ul>
                <li>
                  <a href="https://github.com/ikovic">
                    <i className="fa fa-github-square fa-2x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ivan-ković-684b44a0">
                    <i className="fa fa-linkedin-square fa-2x" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/kobeljic">
                    <i className="fa fa-twitter-square fa-2x" />
                  </a>
                </li>
                <li>
                  <a href="mailto:kovic.ivan@gmail.com">
                    <i className="fa fa-envelope-square fa-2x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
