import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>teste- role</title>
        <meta property="og:title" content="teste- role" />
      </Helmet>
      <section className="home-hero">
        <div className="home-container1">
          <img
            alt="image"
            src="/external/_rsb5851-enhanced-nr-1500h.jpg"
            loading="eager"
            className="home-image"
          />
          <header data-thq="thq-navbar" className="home-navbar">
            <div className="home-container2">
              <img
                alt="image"
                src="/external/rzl_fundo-escuro-_redondo_-_2_.svg"
                className="home-branding"
              />
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <div className="home-hamburger">
                <img alt="image" src="/hamburger.svg" className="home-icon" />
              </div>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav"
              >
                <div className="home-container3">
                  <img
                    alt="image"
                    src="/external/rzl_fundo-escuro-_redondo_-_2_.svg"
                    className="home-image1"
                  />
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon01">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav1"
                >
                  <Link to="/" className="home-navlink">
                    Nossa história
                  </Link>
                  <Link to="/" className="home-navlink1">
                    Grupo no WhatsApp
                  </Link>
                  <Link to="/bailedossonhos-22-10" className="home-navlink2">
                    Fotos
                  </Link>
                </nav>
                <div className="home-container4"></div>
              </div>
              <div className="home-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon03"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon05"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon07"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
          <div className="home-hero-content">
            <div className="home-header-container">
              <div className="home-header">
                <h1 className="home-heading">
                  <span>Conheça a nossa</span>
                  <br></br>
                  <span className="home-text02">comunidade!</span>
                  <br></br>
                </h1>
              </div>
              <p className="home-caption">
                O seu novo refúgio para dançar Zouk Brasileiro em Lisboa e
                Conectar-se!
              </p>
            </div>
            <button className="home-button button">
              <span>
                <span>Nossa história</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="home-note">
        <h2 className="home-caption01">
          Descubra a energia contagiante do Rolê Zouk em Lisboa. Um espaço
          seguro e acolhedor, para iniciar e/ou aperfeiçoar a sua dança na
          capital portuguesa!
        </h2>
      </section>
      <section className="home-slider">
        <div className="home-header01">
          <h2 className="home-heading1">
            <span>Acompanhe as fotos dos nossos últimos </span>
            <span className="home-text08">eventos.</span>
          </h2>
        </div>
        <div className="home-selector">
          <p className="home-caption02">
            Saiba qual a diferença entre cada evento e se surpreenda!
          </p>
          <div className="home-slide-titles">
            <div className="slide-title">
              <span>
                <span>Baile dos sonhos</span>
                <br></br>
              </span>
            </div>
            <div className="slide-title slide-title-active">
              <span>Sociais</span>
            </div>
            <div className="slide-title">
              <span>Festas</span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-slides">
        <div className="home-slider1 slider blaze-slider">
          <div className="home-slider-container blaze-container">
            <div className="home-slider-track-container blaze-track-container">
              <div className="home-slider-track blaze-track">
                <div data-role="current-banner" className="home-slide banner">
                  <div className="home-content">
                    <div className="home-header02">
                      <h3 className="home-heading2">Baile dos sonhos</h3>
                      <p className="home-caption03">
                        Este baile é uma co-produção entre o Rolê Zouk, Espaço
                        Baião e o Palácio do Grilo.
                      </p>
                    </div>
                    <div className="home-more">
                      <span className="home-caption04">Saiba mais</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon09">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="home-slide1 banner">
                  <div className="home-content01">
                    <div className="home-header03">
                      <h3 className="home-heading3">Sociais</h3>
                      <p className="home-caption05">
                        As nossas sociais acontecem esporadicamente de acordo
                        com a disponibilidade e desejo da comunidade.
                      </p>
                    </div>
                    <div className="home-more1">
                      <span className="home-caption06">Saiba mais</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon11">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="home-slide2 banner">
                  <div className="home-content02">
                    <div className="home-header04">
                      <h3 className="home-heading4">Festas</h3>
                      <p className="home-caption07">
                        As nossas festas são organizadas pelas responsáveis do
                        Rolê Zouk e são divulgadas com antecedência.
                      </p>
                    </div>
                    <div className="home-more2">
                      <span className="home-caption08">Saiba mais</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon13">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  data-role="current-banner"
                  className="home-slide3 banner"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container6">
            <Script
              html={`<script>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <section className="home-get-started">
        <div className="home-header-container1">
          <div className="home-header05">
            <h2 className="home-heading5">
              <span className="home-text14">
                Faça parte do nosso grupo no WhatsApp e fique por dentro das
                nossas atualizações!
              </span>
              <br></br>
            </h2>
            <p className="home-caption09">
              Através do link poderá fazer o pedido que será revisado pelos
              nossos administradores.
            </p>
          </div>
          <div className="home-button1">
            <a
              href="https://chat.whatsapp.com/IjpLXYSgEhk1oefhZ0A2vL"
              target="_blank"
              rel="noreferrer noopener"
              className="home-button2 button"
            >
              <span className="home-text16">Grupo no WhatsApp</span>
            </a>
          </div>
        </div>
        <img
          alt="image"
          src="/external/whatsapp%20image%202023-11-20%20at%2023.39.06-800w.jpeg"
          className="home-image2"
        />
      </section>
      <section className="home-objectives">
        <div className="home-content03">
          <span className="home-text17">Objetivos</span>
          <div className="home-objectives-list">
            <div className="objective">
              <h3 className="home-text18">Growth</h3>
              <p className="home-text19">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="objective home-objective1">
              <h3 className="home-text20">Develop</h3>
              <p className="home-text21">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="objective home-objective2">
              <h3 className="home-text22">Optimize</h3>
              <p className="home-text23">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-growth">
        <div className="home-content04">
          <div className="home-header06">
            <h2 className="home-heading6">
              <span>
                A nossa
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text25">história.</span>
              <br></br>
            </h2>
            <p className="home-caption10">
              <span className="home-text27">
                Tudo começou através de encontros...
              </span>
              <br></br>
              <br></br>
              <span>
                Há anos atrás, no dia 24 de julho de 2021, Pietra Serina, uma
                apaixonada pela dança zouk brasileiro, teve uma ideia que viria
                a transformar a cena de dança em Lisboa. Enquanto estava de
                passagem pela cidade, ela decidiu criar um grupo no WhatsApp
                reunindo todos os amigos locais que compartilhavam sua paixão
                pelo zouk. Assim nascia o embrião do que viria a ser conhecido
                como &quot;Role Zouk Lisboa&quot;.
              </span>
              <br className="home-text31"></br>
              <br></br>
              <br className="home-text33"></br>
              <br></br>
              <span>
                Inicialmente composto por apenas 10 participantes, o grupo
                rapidamente evoluiu para algo muito mais significativo. O que
                começou como encontros descompromissados transformou-se em uma
                comunidade vibrante e acolhedora. A cada encontro, a energia
                contagiante da dança e a amizade que florescia entre os
                participantes tornaram-se o coração pulsante do Role Zouk.
              </span>
              <br className="home-text36"></br>
              <br></br>
              <br className="home-text38"></br>
              <br></br>
              <span>
                Com o tempo, Pietra, infelizmente, partiu, mas seu legado foi
                continuado por entusiastas dedicadas: Mayara Vasques e Carla
                Rendall. Estas líderes apaixonadas, que estiveram presentes
                desde o início, assumiram a responsabilidade de guiar o Role
                Zouk para novos horizontes. Seu compromisso não apenas com a
                dança, mas também com a criação de um ambiente acolhedor para
                todos, independentemente do nível de habilidade, deu forma à
                identidade única do Role Zouk Lisboa.
              </span>
              <br className="home-text41"></br>
              <br></br>
              <br className="home-text43"></br>
              <br></br>
              <span>
                O que começou como encontros espontâneos logo se expandiu para
                incluir bailes e eventos regulares na cidade. O Role Zouk
                tornou-se mais do que apenas uma comunidade de dançarinos; era
                uma família unida pela música e pelo movimento. Os
                &quot;roles&quot; transformaram-se em momentos esperados, onde a
                alegria da dança encontrava-se com a camaradagem duradoura.
              </span>
              <br className="home-text46"></br>
              <br></br>
              <br className="home-text48"></br>
              <br></br>
              <span>
                Hoje, o Role Zouk Lisboa é mais do que um grupo de dança; é um
                projeto em constante evolução que continua a unir pessoas
                através da dança e da amizade. Que essa jornada continue a
                inspirar, cativar e fortalecer laços, proporcionando a todos que
                participam uma experiência única de celebração da vida, da
                música e da dança. O Role Zouk Lisboa - onde a paixão pela dança
                transcende os passos e se transforma em uma jornada coletiva de
                alegria e amizade.
              </span>
            </p>
          </div>
          <div className="home-header07"></div>
        </div>
      </section>
      <section className="home-customer">
        <div className="home-header08">
          <h2 className="home-heading7">
            <span>Testemunhos dos nossos </span>
            <br className="home-text52"></br>
            <span className="home-text53">dançantes!</span>
            <br></br>
          </h2>
        </div>
        <div className="home-quotes">
          <div className="home-quote">
            <p className="home-quote1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author">
              <span className="home-name">Joanna Smith</span>
              <span className="home-location">Briville</span>
            </div>
          </div>
          <div className="home-quote2">
            <p className="home-quote3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author1">
              <span className="home-name1">Joanna Smith</span>
              <span className="home-location1">Briville</span>
            </div>
          </div>
          <div className="home-quote4">
            <p className="home-quote5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author2">
              <span className="home-name2">Joanna Smith</span>
              <span className="home-location2">Briville</span>
            </div>
          </div>
          <div className="home-quote6">
            <p className="home-quote7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author3">
              <span className="home-name3">Joanna Smith</span>
              <span className="home-location3">Briville</span>
            </div>
          </div>
        </div>
        <div className="home-controls">
          <button className="home-previous button">
            <svg viewBox="0 0 1024 1024" className="home-icon15">
              <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
            </svg>
          </button>
          <button className="home-next button">
            <svg viewBox="0 0 1024 1024" className="home-icon17">
              <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </button>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-header09">
          <h2 className="home-heading8">
            <span className="home-text55">Dúvidas</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="home-content05">
          <div className="home-column">
            <div className="home-element">
              <h3 className="home-header10">Os encontros são pagos?</h3>
              <p className="home-content06">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-element1">
              <h3 className="home-header11">Dão aulas?</h3>
              <p className="home-content07">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="home-element2">
              <h3 className="home-header12">Como posso acompanhá-los?</h3>
              <p className="home-content08">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="home-column1">
            <div className="home-element3">
              <h3 className="home-header13">
                Qual a frequência dos encontros?
              </h3>
              <p className="home-content09">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="home-element4">
              <h3 className="home-header14">
                Quem não dança também pode participar?
              </h3>
              <p className="home-content10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-element5">
              <h3 className="home-header15">O que acontece nas sociais?</h3>
              <p className="home-content11">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content12">
          <div className="home-main">
            <div className="home-branding1">
              <img
                alt="image"
                src="/external/rzl_fundo-escuro-_redondo_-_2_.svg"
                className="home-image3"
              />
              <span className="home-text57">O seu Rolê de Zouk em Lisboa!</span>
            </div>
            <div className="home-links">
              <div className="home-column2">
                <span className="home-header16">Projeto</span>
                <div className="home-list">
                  <Link to="/" className="home-navlink3">
                    Sobre
                  </Link>
                  <Link to="/" className="home-navlink4">
                    Encontros
                  </Link>
                  <Link to="/" className="home-navlink5">
                    Contatos
                  </Link>
                </div>
              </div>
              <div className="home-column3">
                <span className="home-header17">Social</span>
                <div className="home-list1">
                  <Link to="/" className="home-navlink6">
                    Instagram
                  </Link>
                  <Link to="/" className="home-navlink7">
                    WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <span className="home-text58">
              © 2023 Rolê Zouk Lisboa - All rights reserved
            </span>
            <button data-role="scroll-top" className="home-button3 button">
              <img alt="image" src="/arrow.svg" className="home-image4" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="home-container8">
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
