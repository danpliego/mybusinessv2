// eslint-disable-next-line
import React from "react";
import ProductColumn from "../../components/ProductColumn";
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

const IndexPage = () => (
  <Layout>
    <SEO
      title="Cursos operativo"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Curso Operativo" />
    <div>
    <Components.Container>
        <Components.Width75>
          <h4 style={{ marginBottom: "2rem", textAlign: "center" }}>
            Nivel principieante.
          </h4>
        </Components.Width75>
      </Components.Container>
      <Components.Container>
        <Components.Width75>
          <h5 style={{ marginBottom: "2rem", borderBottom: "1px solid #141943", paddingBottom: "2rem" }}>
            Instalación
          </h5>
          <Components.Row padded mobile>
            <ProductColumn
              title="Instalación en único equipo (1)"
              link="https://www.youtube.com/watch?v=RlVoreexVeI&list=PLNwhWvS6gVefkWE8rXdUCU6BR75oD-TEU&index=52"
              image={CursoInstalacion}
              buttonText="Ver video"
            />
          </Components.Row>
          <h5 style={{ marginBottom: "2rem", borderBottom: "1px solid #141943", paddingBottom: "2rem" }}>
            Configuración
          </h5>
          <Components.Row padded mobile>
            <ProductColumn
              title="Registro de la licencia en linea (103)"
              link="https://youtu.be/7sFDgPnN0-A"
              image={Registro}
              buttonText="Ver video"
            />
            <ProductColumn
              title="Resolicitud de registro (104)"
              link="www.youtube.com"
              image={Resolisitud}
              buttonText="Ver video"
            />
            <ProductColumn
              title="Cómo acceder al sistema (2)"
              link="https://www.youtube.com/watch?v=iXIHT5yiLhE"
              image={AccederSistema}
              buttonText="Ver video"
            />
          </Components.Row>
          <h5 style={{ marginBottom: "2rem", borderBottom: "1px solid #141943", paddingBottom: "2rem" }}>
          Alta de catálogos
          </h5>
          <Components.Row padded mobile>
            <ProductColumn
              title="Alta rápida (3)"
              link="https://www.youtube.com/watch?v=5B7GAH6LxGs"
              image={AltaRapida}
              buttonText="Ver video"
            />
            <ProductColumn
              title="Alta de proveedores (8)"
              link="https://www.youtube.com/watch?v=Wx8VxGEiLIU"
              image={AltaProvedores}
              buttonText="Ver video"
            />
          </Components.Row>
          <h5 style={{ marginBottom: "2rem", borderBottom: "1px solid #141943", paddingBottom: "2rem" }}>
            Módulo de Punto de Venta
          </h5>
          <Components.Row padded mobile>
            <ProductColumn
              title="Búsqueda de productos (17) "
              link="https://www.youtube.com/watch?v=e2yiG-ihK14"
              image={BusquedaProductos}
              buttonText="Ver video"
            />
            <ProductColumn
              title="Inicial del día (18)"
              link="https://www.youtube.com/watch?v=gScFEIaO7gU"
              image={IniciaDia}
              buttonText="Ver video"
            />
            <ProductColumn
              title="Cómo vender y cobrar (14)"
              link="https://www.youtube.com/watch?v=kRxWnDCyPhw"
              image={ComoVender}
              buttonText="Ver video"
            />
            <ProductColumn
              title="Corte parcial X (65)"
              link="https://www.youtube.com/watch?v=96BLpUh_0X8"
              image={CorteX}
              buttonText="Ver video"
            />
          </Components.Row>
          <Components.Row padded mobile>
              <ProductColumn
              title="Corte Total Z (66)"
              link="https://www.youtube.com/watch?v=1jb1krsr0mM"
              image={CorteZ}
              buttonText="Ver video"
              />  
              <ProductColumn
              title="Retiro de dinero (20)"
              link="https://www.youtube.com/watch?v=tuFNBCwhNzY"
              image={RetiroDinero}
              buttonText="Ver video"
              />
              <ProductColumn
              title="Factura de cierre (41)"
              link="https://www.youtube.com/watch?v=4_9AecOpkAw"
              image={FacturaCierre}
              buttonText="Ver video"
              />
          </Components.Row>
          <h5 style={{ marginBottom: "2rem", borderBottom: "1px solid #141943", paddingBottom: "2rem" }}>
            Control de inventarios
          </h5>
          <Components.Row padded mobile>
            <ProductColumn
              title="Compras (33)"
              link="https://www.youtube.com/watch?v=V7XJdbGgOBY"
              image={Compras}
              buttonText="Ver video"
            />
          </Components.Row>
          <h5 style={{ marginBottom: "2rem", borderBottom: "1px solid #141943", paddingBottom: "2rem" }}>
            Reportes
          </h5>
          <Components.Row padded mobile>
            <ProductColumn
              title="Reporte de existencias (105)"
              link="https://youtu.be/VJp3gNadhRw"
              image={ReporteExistencia}
              buttonText="Ver video"
              />
              <ProductColumn
                title="Reporte de kárdex (106)"
                link="https://youtu.be/M4gRBiQPvrU"
                image={ReporteKardex}
                buttonText="Ver video"
              />
              <ProductColumn
                title="Reporte de ventas por articulo  (107)"
                link="https://youtu.be/yy0R_QHySsk"
                image={ReporteArticulo}
                buttonText="Ver video"
              />
            </Components.Row>
            <h5 style={{ marginBottom: "2rem", borderBottom: "1px solid #141943", paddingBottom: "2rem" }}>
            Servicios electronicos
            </h5>
          <Components.Row padded mobile>
            <ProductColumn
              title="Instalación de tiempo aire versiones anteriores"
              link="https://youtu.be/hZk1cP1GF-k"
              image={RecagasServicios}
              buttonText="Ver video"
            />
            </Components.Row>
          
        </Components.Width75>
      </Components.Container>
    </div>
  </Layout>
);

export default IndexPage;
