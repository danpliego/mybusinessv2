// eslint-disable-next-line
import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";
import HeroImage from "../images/landing/heroimage.png";
import SecondHeroImage from "../images/landing/heroimage-2.png";
import BoletinBanner from "../components/boletinBanner";
import ayuda from "../images/landing/mybusinesspos-te-ayuda.png";
import rapidez from "../images/landing/rapidez.png";
import control from "../images/landing/control.png";
import inventario from "../images/landing/inventario.png";
import flexibilidad from "../images/landing/flexibilidad.png";
import conectividad from "../images/landing/conectividad.png";
import competitividad from "../images/landing/competitividad.png";
import libertad from "../images/landing/libertad.png";
import styled from "styled-components";
import { theme } from "../components/theme";
import Slider from "infinite-react-carousel";



const IndexPage = () => (
  <Layout>
    <SEO title="Abarrotes" keywords={[`gatsby`, `application`, `react`]} />

    <Comp.Container>
      <CarouselContainer>
        <div>
          <Slider autoplay>
            <div>
              <img src={HeroImage} />
              <div className="carousel-content">
                <h1 className="extended-medium">
                Convierte tu tienda en una cadena de tiendas. Usa MyBusiness POS
                </h1>
                <Comp.TextCenter>
                  <Comp.ButtonWhite to="/tienda-virtual/my-business">
                    Comprar ahora
                  </Comp.ButtonWhite>
                </Comp.TextCenter>
              </div>
            </div>
            <div>
              <img src={SecondHeroImage} />
              <div className="carousel-content">
                <h1 className="extended-medium">
                  No le tengas miedo a los tiburones. Conviértete en tiburón. Usa MyBusiness POS.
                </h1>
                <Comp.TextCenter>
                  <Comp.ButtonWhite to="/tienda-virtual/my-business">
                    Comprar ahora
                  </Comp.ButtonWhite>
                </Comp.TextCenter>
              </div>
            </div>
          </Slider>
        </div>
      </CarouselContainer>

  </Comp.Container>

    <div style={{ background: "#F5F1EB" }}>
      <Comp.Container mb1>
        <Comp.Width75>
          <h1 className="extended-medium" style={{ marginBottom: "1rem", textAlign: "center" }}>
          MyBusiness POS te ayuda a:
          </h1>
          <Comp.TextCenter>
              <img src={ayuda} width="621px" />
          </Comp.TextCenter>
        </Comp.Width75>
      </Comp.Container>

      <Comp.Width75>
        <Comp.Row mobile>
          <Comp.Column flex={1}>
            <Comp.mb3>
              <Comp.TextCenter>                    
                <img src={rapidez} width="75px" />
                  <h5>Rapidez</h5>
                  <p>
                  En el cobro para tus clientes.
                  </p>
              </Comp.TextCenter>
            </Comp.mb3>
          </Comp.Column>

          <Comp.Column padded flex={1}>
            <Comp.mb3>
              <Comp.TextCenter>
                <img src={control} width="75px" />
                <h5>Control de ventas</h5>
                <p>
                Precisión en tus cortes de caja.
                </p>
              </Comp.TextCenter>
            </Comp.mb3>
          </Comp.Column>
            
          <Comp.Column padded flex={1}>
            <Comp.mb3>
              <Comp.TextCenter>
                <img src={inventario} width="75px" />
                <h5>Control de Inventarios</h5>
                <p>
                Conocemos lo que es el ”robo hormiga” y cómo ayudarte a evitarlo
                </p>
              </Comp.TextCenter>
            </Comp.mb3>    
          </Comp.Column>

        </Comp.Row>
        
        <Comp.Row mobile>
          <Comp.Column padded>
            <Comp.mb3>
              <Comp.TextCenter>                    
                <img src={flexibilidad} width="75px" />
                  <h5>Flexibilidad</h5>
                  <p>
                  Hasta 10 listas de precios por producto, precios por volumen y por su presentación.
                  </p>
              </Comp.TextCenter>
            </Comp.mb3>
          </Comp.Column>
        
          <Comp.Column padded>
            <Comp.mb3>
              <Comp.TextCenter>
                <img src={conectividad} width="75px" />
                <h5>Conectividad</h5>
                <p>
                Con básculas y estiquetadoras de difersas marcas
                </p>
              </Comp.TextCenter>
            </Comp.mb3>
          </Comp.Column>

          <Comp.Column padded>
            <Comp.mb3>
              <Comp.TextCenter>
                <img src={competitividad} width="75px" />
                <h5>Competitividad</h5>
                <p>
                Puedes venderle a tus clientes tiempo aire electrónico y pago de servicios (luz, agua, teléfono, etc.)
                </p>
              </Comp.TextCenter>
            </Comp.mb3>
          </Comp.Column>
        </Comp.Row>

        <Comp.Row mobile justifyContent="center">
          <Column33Mobile padded>
            <Comp.mb3>
              <Comp.TextCenter>
                <img src={libertad} width="75px" />
                <h5>Libertad</h5>
                <p>
                El control te dará más tiempo libre para tu familia/amigas o para abrir más tiendas.
                </p>
              </Comp.TextCenter>
            </Comp.mb3>
          </Column33Mobile>
      </Comp.Row>
    </Comp.Width75>

  
  

    </div>

    <div style={{ background: "#fff" }}>
      <Comp.Container>
          <Comp.Width75>
              <h1 className="extended-medium" style={{ marginBottom: "3rem", textAlign: "center" }}>
                Video Testimonial
              </h1>
            <Comp.Row mobile justifyContent="center">
              <Column50Mobile padded>
                  <h2 className="extended-medium" >¡51,489 abarroteras usan nuestro software!</h2>
                  <p>
                  Si tienes una pequeña abarrotera, te ayudamos a controlar y luego ¡a crecer!
                  </p>
                  <Comp.ButtonPrimary to="/tienda-virtual/my-business">
                    Comprar ahora
                  </Comp.ButtonPrimary>
                </Column50Mobile>

                <Comp.Column padded>
                  <iframe
                    width="400"
                    height="200"
                    src="https://www.youtube.com/watch?v=R8JeeXp0tbE"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </Comp.Column>
              </Comp.Row>
          </Comp.Width75>

      </Comp.Container>
    </div>


    <div style={{ background: "#F3FBFC" }}>
      <Comp.Container>
        <Comp.Width75>
          <Comp.Row mobile justifyContent="center">
            <Column60Mobile paddeds>
              <h5 style={{ marginBottom: "2rem", textAlign: "center" }}>
                Si requieres más información, <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+527223945363?text=Me%20interesa%20My%20BusinessPOS%20para%20mi%20corporativo">contacta a un agente directamente por Whatsapp</a>
              </h5>
              
              <Comp.TextCenter>
                <Comp.ButtonWhats target="_blank" rel="noopener noreferrer" href="https://wa.me/+527223945363?text=Me%20interesa%20My%20BusinessPOS%20para%20mi%20corporativo">
                  Contactar agente.
                </Comp.ButtonWhats>
              </Comp.TextCenter>      
            </Column60Mobile>
          </Comp.Row>
        </Comp.Width75>
      </Comp.Container>

    </div>

    <BoletinBanner />
  </Layout>
);

export default IndexPage;

const Column50Mobile = styled(Comp.Column)`
  @media ${theme.breakpoint.upFromMobile} {
    width: 50%;
  }
`;
const Column60Mobile = styled(Comp.Column)`
  @media ${theme.breakpoint.upFromMobile} {
    width: 60%;
  }
`;
const Column33Mobile = styled(Comp.Column)`
  @media ${theme.breakpoint.upFromMobile} {
    width: 33%;
  }
`;

const CarouselContainer = styled.div`
width: 100%;
height: 500px;
z-index: 10000;
top: 15%;
position: relative;

> div {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    position: absolute;
  }

  .carousel-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    color: #fff;
    width: 100%;
    padding: 10vw;

    h1 {
      color: #fff;
    }
  }

  h3,
  h6 {
    color: #fff;
    max-width: 70%;
    margin: 1rem auto;
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  }

  .carousel-arrow {
    color: #000 !important;
    background: #fff;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    top: 4  0% !important;

    &:before {
      font-size: 1rem;
      display: block;
      background: none;
      padding-top: 9px;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  .carousel-next {
    right: 2rem;
    top: 13rem;
  }

  .carousel-prev {
    left: 2rem;
    top: 13rem;
  }

  .carousel-next:before {
    content: ">";
  }

  .carousel-prev:before {
    content: "<";
  }

  @media ${theme.breakpoint.onlyMobile} {
    h3 {
      font-size: 1rem;
    }

    .carousel-arrow {
      color: #000 !important;
      background: #fff;
      width: 2rem;
      height: 2rem;

      &:before {
        font-size: 0.8rem;
      }

      &.carousel-next {
        right: 1rem;
      }

      &.carousel-prev {
        left: 1rem;
      }
    }
  }

  @media ${theme.breakpoint.upFromMobile} {
    top: 30%;
  }
`;