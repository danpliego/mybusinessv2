// eslint-disable-next-line
import React from "react";

import Layout from "../components/layout";
import * as Comp from "../components/layoutComponents";
import SEO from "../components/seo";
import HeroImage from "../images/landing/heroimage.png";
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



const IndexPage = () => (
  <Layout>
    <SEO title="Landing-prueba" keywords={[`gatsby`, `application`, `react`]} />
    
    <Comp.BannerContainer>
      <Comp.BannerImage>
        <img src={HeroImage} />
      </Comp.BannerImage>
      <Comp.BannerContent>
        <h1 className="extended-medium">
        Convierte tu tienda en una cadena de tiendas. Usa MyBusiness POS
        </h1>
        
        <Comp.TextCenter>
          <Comp.ButtonWhite to="/tienda-virtual/my-business">
            Comprar ahora
          </Comp.ButtonWhite>
        </Comp.TextCenter>
        

      </Comp.BannerContent>
    </Comp.BannerContainer>

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
                  <h2 className="extended-medium" >Control de Sucursales.</h2>
                  <p>
                    Te proporcionamos las ventas e inventarios reales de tus
                    tiendas.
                  </p>  
                </Column50Mobile>

                <Comp.Column padded>
                  <iframe
                    width="400"
                    height="200"
                    src="https://www.youtube.com/embed/j500GzCS8j0"
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