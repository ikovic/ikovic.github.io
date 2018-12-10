import Link from 'next/link';

export default () => (
  <header className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <h4 className="title is-4">Ivan Kovic</h4>
            </a>
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span />
            <span />
            <span />
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <div className="tabs is-right">
              <ul>
                <li className="is-active">
                  <Link prefetch href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link prefetch href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
);
