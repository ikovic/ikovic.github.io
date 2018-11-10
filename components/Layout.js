import Head from 'next/head';
import { Footer, Header } from './index';
import 'bulma/css/bulma.css';

export default ({ children, title = 'Ivan Kovic - Full-stack developer' }) => (
  <section>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <link rel="icon" type="image/png" href="/static/favicon.png" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
      <style global jsx>{`
        html,
        body {
          font-family: 'Open Sans';
        }

        img {
          padding: 5px;
          border: 1px solid #ccc;
        }

        .social {
          margin-top: 3rem;
        }

        .social ul {
          display: inline;
        }

        .social li {
          display: inline-block;
          list-style: none;
          margin: 0 0.5rem;
        }
      `}</style>
    </Head>
    <Header />

    <div className="hero-body">{children}</div>

    <Footer />
  </section>
);
