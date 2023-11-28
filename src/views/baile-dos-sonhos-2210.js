import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import GalleryCard3 from '../components/gallery-card3'
import './baile-dos-sonhos-2210.css'

const BaileDosSonhos2210 = (props) => {
  return (
    <div className="baile-dos-sonhos2210-container">
      <Helmet>
        <title>baile dos sonhos 22/10</title>
        <meta property="og:title" content="baile dos sonhos 22/10" />
      </Helmet>
      <header data-thq="thq-navbar" className="baile-dos-sonhos2210-navbar">
        <div className="baile-dos-sonhos2210-container1">
          <img
            alt="image"
            src="/external/rzl_fundo-escuro-_redondo_-_2_.svg"
            className="baile-dos-sonhos2210-branding"
          />
        </div>
        <div
          data-thq="thq-burger-menu"
          className="baile-dos-sonhos2210-burger-menu"
        >
          <div className="baile-dos-sonhos2210-hamburger">
            <img
              alt="image"
              src="/hamburger.svg"
              className="baile-dos-sonhos2210-icon"
            />
          </div>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="baile-dos-sonhos2210-mobile-menu"
        >
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="baile-dos-sonhos2210-nav"
          >
            <div className="baile-dos-sonhos2210-container2">
              <img
                alt="image"
                src="/logo.svg"
                className="baile-dos-sonhos2210-image"
              />
              <div
                data-thq="thq-close-menu"
                className="baile-dos-sonhos2210-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="baile-dos-sonhos2210-icon1"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="baile-dos-sonhos2210-nav1"
            >
              <span className="baile-dos-sonhos2210-text">About</span>
              <span className="baile-dos-sonhos2210-text1">Features</span>
              <span className="baile-dos-sonhos2210-text2">Pricing</span>
              <span className="baile-dos-sonhos2210-text3">Team</span>
              <span className="baile-dos-sonhos2210-text4">Blog</span>
            </nav>
            <div className="baile-dos-sonhos2210-container3">
              <button className="baile-dos-sonhos2210-login button">
                Login
              </button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="baile-dos-sonhos2210-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="baile-dos-sonhos2210-icon3"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="baile-dos-sonhos2210-icon5"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="baile-dos-sonhos2210-icon7"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="baile-dos-sonhos2210-gallery">
        <h1 className="baile-dos-sonhos2210-text5">Baile dos sonhos</h1>
        <span className="baile-dos-sonhos2210-text6">
          Dia 22/10/2023 - Palácio do Grilo
        </span>
        <div className="baile-dos-sonhos2210-container4">
          <GalleryCard3 rootClassName="rootClassName"></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName1"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName3"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName2"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName4"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName5"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName6"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName7"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName8"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName9"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc218ZW58MHx8fHwxNjI2NDQ1NjU3&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName10"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://images.unsplash.com/photo-1472157510410-64a053cbc39f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName11"
          ></GalleryCard3>
        </div>
      </div>
      <div className="baile-dos-sonhos2210-footer">
        <div className="baile-dos-sonhos2210-content">
          <div className="baile-dos-sonhos2210-main">
            <div className="baile-dos-sonhos2210-branding1">
              <img
                alt="image"
                src="/external/rzl_fundo-escuro-_redondo_-_2_.svg"
                className="baile-dos-sonhos2210-image1"
              />
              <span className="baile-dos-sonhos2210-text7">
                O seu Rolê de Zouk em Lisboa!
              </span>
            </div>
            <div className="baile-dos-sonhos2210-links">
              <div className="baile-dos-sonhos2210-column">
                <span className="baile-dos-sonhos2210-header">Projeto</span>
                <div className="baile-dos-sonhos2210-list">
                  <Link to="/" className="baile-dos-sonhos2210-navlink">
                    Sobre
                  </Link>
                  <Link to="/" className="baile-dos-sonhos2210-navlink1">
                    Encontros
                  </Link>
                  <Link to="/" className="baile-dos-sonhos2210-navlink2">
                    Contatos
                  </Link>
                </div>
              </div>
              <div className="baile-dos-sonhos2210-column1">
                <span className="baile-dos-sonhos2210-header1">Social</span>
                <div className="baile-dos-sonhos2210-list1">
                  <Link to="/" className="baile-dos-sonhos2210-navlink3">
                    Instagram
                  </Link>
                  <Link to="/" className="baile-dos-sonhos2210-navlink4">
                    WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="baile-dos-sonhos2210-bottom">
            <span className="baile-dos-sonhos2210-text8">
              © 2023 Rolê Zouk Lisboa - All rights reserved
            </span>
            <button
              data-role="scroll-top"
              className="baile-dos-sonhos2210-button button"
            >
              <img
                alt="image"
                src="/arrow.svg"
                className="baile-dos-sonhos2210-image2"
              />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="baile-dos-sonhos2210-container6">
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

export default BaileDosSonhos2210
