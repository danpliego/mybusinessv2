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
import * as Components from "../../components/layoutComponents";
import SEO from "../../components/seo";
import VideoCard from "../../components/VideoCard";
import styled from "styled-components";

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
    <Components.Container>
      <VideoSectionTitle>Instalación</VideoSectionTitle>
      <Components.Row padded mobile wrap="wrap">
        <VideoCard
          title="Instalación en único equipo"
          link="RlVoreexVeI"
          image={CursoInstalacion}
          buttonText="Ver video"
        />
      </Components.Row>
      <VideoSectionTitle>Configuración</VideoSectionTitle>
      <Components.Row padded mobile wrap="wrap">
        <VideoCard
          title="Registro de la licencia en linea"
          link="7sFDgPnN0-A"
          image={Registro}
          buttonText="Ver video"
        />
        <VideoCard
          title="Resolicitud de registro"
          link="www.youtube.com"
          image={Resolisitud}
          buttonText="Ver video"
        />
        <VideoCard
          title="Cómo acceder al sistema"
          link="iXIHT5yiLhE"
          image={AccederSistema}
          buttonText="Ver video"
        />
      </Components.Row>
      <VideoSectionTitle>Alta de catálogos</VideoSectionTitle>
      <Components.Row padded mobile wrap="wrap">
        <VideoCard
          title="Alta rápida"
          link="5B7GAH6LxGs"
          image={AltaRapida}
          buttonText="Ver video"
        />
        <VideoCard
          title="Alta de proveedores"
          link="Wx8VxGEiLIU"
          image={AltaProvedores}
          buttonText="Ver video"
        />
      </Components.Row>
      <VideoSectionTitle>Módulo de Punto de Venta</VideoSectionTitle>
      <Components.Row padded mobile wrap="wrap">
        <VideoCard
          title="Búsqueda de productos"
          link="e2yiG-ihK14"
          image={BusquedaProductos}
          buttonText="Ver video"
        />
        <VideoCard
          title="Inicial del día"
          link="gScFEIaO7gU"
          image={IniciaDia}
          buttonText="Ver video"
        />
        <VideoCard
          title="Cómo vender y cobrar"
          link="kRxWnDCyPhw"
          image={ComoVender}
          buttonText="Ver video"
        />
        <VideoCard
          title="Corte parcial X"
          link="96BLpUh_0X8"
          image={CorteX}
          buttonText="Ver video"
        />
        <VideoCard
          title="Corte Total Z"
          link="1jb1krsr0mM"
          image={CorteZ}
          buttonText="Ver video"
        />
        <VideoCard
          title="Retiro de dinero"
          link="tuFNBCwhNzY"
          image={RetiroDinero}
          buttonText="Ver video"
        />
        <VideoCard
          title="Factura de cierre"
          link="4_9AecOpkAw"
          image={FacturaCierre}
          buttonText="Ver video"
        />
      </Components.Row>
      <VideoSectionTitle>Control de inventarios</VideoSectionTitle>
      <Components.Row padded mobile wrap="wrap">
        <VideoCard
          title="Compras"
          link="V7XJdbGgOBY"
          image={Compras}
          buttonText="Ver video"
        />
      </Components.Row>
      <VideoSectionTitle>Reportes</VideoSectionTitle>
      <Components.Row padded mobile wrap="wrap">
        <VideoCard
          title="Reporte de existencias"
          link="VJp3gNadhRw"
          image={ReporteExistencia}
          buttonText="Ver video"
        />
        <VideoCard
          title="Reporte de kárdex"
          link="M4gRBiQPvrU"
          image={ReporteKardex}
          buttonText="Ver video"
        />
        <VideoCard
          title="Reporte de ventas por articulo"
          link="yy0R_QHySsk"
          image={ReporteArticulo}
          buttonText="Ver video"
        />
      </Components.Row>
      <VideoSectionTitle>Servicios electronicos</VideoSectionTitle>
      <Components.Row padded mobile wrap="wrap">
        <VideoCard
          title="Instalación de tiempo aire versiones anteriores"
          link="hZk1cP1GF-k"
          image={RecagasServicios}
          buttonText="Ver video"
        />
      </Components.Row>
    </Components.Container>
  </Layout>
);

const VideoSectionTitle = styled.h5`
  margin: 3rem 0 1rem;
  border-bottom: 1px solid #141943;
  padding-bottom: 1rem;
`;

export default IndexPage;
