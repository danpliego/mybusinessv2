// eslint-disable-next-line
import React from "react";
import Layout from "../../components/layout";
import SectionTitle from "../../components/sectionTitle";
import CursoInstalacion from "../../images/curso-operativo/principiante/1.png";
import Registro from "../../images/curso-operativo/principiante/2.png";
import Resolisitud from "../../images/curso-operativo/principiante/3.png";
import AccederSistema from "../../images/curso-operativo/principiante/4.png";
import AltaRapida from "../../images/curso-operativo/principiante/5.png";
import AltaProvedores from "../../images/curso-operativo/principiante/6.png";
import BusquedaProductos from "../../images/curso-operativo/principiante/7.png";
import IniciaDia from "../../images/curso-operativo/principiante/8.png";
import ComoVender from "../../images/curso-operativo/principiante/9.png";
import CorteX from "../../images/curso-operativo/principiante/10.png";
import CorteZ from "../../images/curso-operativo/principiante/11.png";
import RetiroDinero from "../../images/curso-operativo/principiante/12.png";
import FacturaCierre from "../../images/curso-operativo/principiante/13.png";
import Compras from "../../images/curso-operativo/principiante/14.png";
import ReporteExistencia from "../../images/curso-operativo/principiante/15.png";
import ReporteKardex from "../../images/curso-operativo/principiante/16.png";
import ReporteArticulo from "../../images/curso-operativo/principiante/18.png";
import RecagasServicios from "../../images/curso-operativo/principiante/19.png";
import CursoSection from "../../components/cursoSection";
import SEO from "../../components/seo";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "../../components/layoutComponents";
import styled from "styled-components";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const instalacion = [
  {
    title: "Instalación en único equipo",
    link: "RlVoreexVeI",
    image: CursoInstalacion,
  },
];

const configuracion = [
  {
    title: "Registro de la licencia en linea",
    link: "7sFDgPnN0-A",
    image: Registro,
  },
  {
    title: "Resolicitud de registro",
    link: "buscame en excel",
    image: Resolisitud,
  },
  {
    title: "Cómo acceder al sistema",
    link: "iXIHT5yiLhE",
    image: AccederSistema,
  },
];

const catalogos = [
  {
    title: "Alta rápida",
    link: "5B7GAH6LxGs",
    image: AltaRapida,
  },
  {
    title: "Alta de proveedores",
    link: "Wx8VxGEiLIU",
    image: AltaProvedores,
  },
];

const puntoVenta = [
  {
    title: "Búsqueda de productos",
    link: "e2yiG-ihK14",
    image: BusquedaProductos,
  },
  {
    title: "Inicial del día",
    link: "gScFEIaO7gU",
    image: IniciaDia,
  },
  {
    title: "Cómo vender y cobrar",
    link: "kRxWnDCyPhw",
    image: ComoVender,
  },
  {
    title: "Corte parcial X",
    link: "96BLpUh_0X8",
    image: CorteX,
  },
  {
    title: "Corte Total Z",
    link: "1jb1krsr0mM",
    image: CorteZ,
  },
  {
    title: "Retiro de dinero",
    link: "tuFNBCwhNzY",
    image: RetiroDinero,
  },
  {
    title: "Factura de cierre",
    link: "4_9AecOpkAw",
    image: FacturaCierre,
  },
];

const controlDeInventario = [
  {
    title: "Compras",
    link: "V7XJdbGgOBY",
    image: Compras,
  },
];

const reportes = [
  {
    title: "Reporte de existencias",
    link: "VJp3gNadhRw",
    image: ReporteExistencia,
  },
  {
    title: "Reporte de kárdex",
    link: "M4gRBiQPvrU",
    image: ReporteKardex,
  },
  {
    title: "Reporte de ventas por artículo",
    link: "yy0R_QHySsk",
    image: ReporteArticulo,
  },
];

const serviciosElectronicos = [
  {
    title: "Instalación de tiempo aire versiones anteriores",
    link: "hZk1cP1GF-k",
    image: RecagasServicios,
  },
];

const IndexPage = () => (
  <Layout>
    <SEO
      title="MyBusiness POS v20 | Curso Operativo"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle
      name="MyBusiness POS v20 | Curso Operativo"
      subtitle="Nivel principiante"
    />
    <Container>
      <CarouselContainer>
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          autoPlay="none"
        >
          <CursoSection title="Instalación" videos={instalacion} />
          <CursoSection title="Configuración" videos={configuracion} />
          <CursoSection title="Alta de catálogos" videos={catalogos} />
          <CursoSection title="Punto de venta" videos={puntoVenta} />
          <CursoSection
            title="Control de inventarios"
            videos={controlDeInventario}
          />
          <CursoSection title="Reportes" videos={reportes} />
          <CursoSection
            title="Servicios electrónicos"
            videos={serviciosElectronicos}
          />
        </Carousel>
      </CarouselContainer>
    </Container>
  </Layout>
);

export const CarouselContainer = styled.div`
  .react-multiple-carousel__arrow {
    top: 30px;
    background: #a0d0d6;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    &:before {
      color: #000;
    }

    &:hover {
      background: #a0d0d6;
    }
  }
  .react-multiple-carousel__arrow--left {
    left: 10px;
  }
  react-multiple-carousel__arrow--right {
    right: 0;
  }
`;

export default IndexPage;
