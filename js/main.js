import React from 'react';
import ReactDOM from 'react-dom';
import './../bower_components/skeleton/css/skeleton.css';
import './../sass/styles.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <!-- Page Control --> */}
        <input id="page-1" name="page" type="radio" defaultChecked/>
        <input id="page-2" name="page" type="radio"/>
        <input id="page-3" name="page" type="radio"/>
        <input id="page-4" name="page" type="radio"/>

        {/* <!-- Joke Control --> */}
        {/* <!-- <input id="joke-alert" name="joke" type="checkbox"> --> */}

          {/* <!-- <label htmlFor="joke-alert"><div>JOKE ALERT</div></label> --> */}

          {/* <!-- Header and Nav --> */}
          <div className="container">
            <div className="row header">
              <div className="twelve columns">
                <h1>Daryl Brendt Napp</h1>
              </div>
            </div>
            <nav>
              <ul className="nav-list">
                <li className="nav-item">
                  <label htmlFor="page-1">
                    <h4>About</h4>
                  </label>
                </li>
                <li className="nav-item">
                  <label htmlFor="page-2">
                    <h4>Status</h4>
                  </label>
                </li>
                <li className="nav-item">
                  <label htmlFor="page-3">
                    <h4>Projects</h4>
                  </label>
                </li>
                <li className="nav-item">
                  <label htmlFor="page-4">
                    <h4>Contact</h4>
                  </label>
                </li>
              </ul>
            </nav>

            {/* <!-- Pages --> */}
            <div className="pages">

              {/* <!-- Page 1: About --> */}
              <div className="row page">
                <section className="eight columns">
                  <h5>Hey,</h5>
                  <p>I'm a guy who's all about havin' <strong>fun</strong> and keepin' it <em>real</em>. I also like to mess around with programming languages and make things that are also <strong>fun</strong> and <em>real</em>. When not programming, I can be seen surfing along the CalihtmlFornia coastline or skiing the slopes of the Swiss Alps.</p>
                  <p>... Ok, ok, surfing the internet.</p>
                  <p>... and playing video games... I've never been skiing.</p>
                  <p>I live in an apartment in New Jersey with my girlfriend and we have two bunnies. Please enjoy my site.</p>
                </section>
              </div>

              {/* <!-- Page 2: Status --> */}
              <div className="row page">
                <section className="eight columns">
                  <h5>Currently,</h5>
                  <p>I work at NIKSUN as a junior software engineer. I'm developing a browser based application using various libraries like Angular, jQuery, React, and AmCharts.</p>
                </section>
              </div>

              {/* <!-- Page 3: Projects --> */}
              <div className="row page">
                <section className="eight columns">
                  <h5>Lately,</h5>
                  <p>I've been sharpening my web dev skills. I'll try to keep this section up to date, but htmlFor the most up to date inhtmlFormation you're probably better off checking my <a href="https://github.com/dbnapp/" target="_blank">github</a>.</p>

                  {/* <!-- Project 1: dbnapp.github.io --> */}
                  <section>
                    <h5>
                      <a href="https://dbnapp.github.io" target="_blank">
                        dbnapp.github.io
                      </a>

                    </h5>
                    <aside>
                      <a href="https://github.com/dbnapp/dbnapp.github.io" target="_blank">
                        Code here
                      </a>
                    </aside>
                    <p>It's my site! Tada! I wasn't trying to do anything too ambitious with it. I really just wanted a place where I could give a little description about myself and show off other projects. The only main goals I had were:</p>
                    <ul>
                      <li>Make site</li>
                      <li>Keep it simple, responsive</li>
                      <li>Showcase other github projects</li>
                      <li>Learn more css stuff</li>
                    </ul>
                    <p>For simple responsiveness I went with <a href="http://getskeleton.com/" target="_blank">Skeleton</a> as it really gave me the minimal css. As you can see the css on this site is... pretty <label  className="joke-link" htmlFor="joke-alert"><span>bare bones</span></label>. I actually placed a challenge on myself to see what kind of site I could make using only HTML and CSS. I figured it would be a good chance to learn fancy CSS tricks. The only JS I used was a gulpfile so I could use SASS and Browser-Sync. It was a nice opportunity to familiarize myself with <a href="http://gulpjs.com/" target="_blank">Gulp</a> (and later bring it into my project at work).</p>
                  </section>
                </section>
              </div>

              {/* <!-- Page 4: Contact --> */}
              <div className="row page">
                <section className="eight columns">
                  <h5>Let's talk!</h5>
                  <address>
                    <a href="mailto:dbnapp@gmail.com">dbnapp@gmail.com</a>
                  </address>
                </section>
              </div>
            </div>
            {/* <!-- end pages --> */}

          </div>
        </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('app')
);
