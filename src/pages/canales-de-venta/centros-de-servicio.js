// eslint-disable-next-line
import React from "react";

import Layout from "../../components/layout";
import SectionTitle from "../../components/sectionTitle";

import HeroImage from "../../images/home/banner-image.png";
import * as Components from "../../components/layoutComponents";
import SEO from "../../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Centros de servicio"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <SectionTitle name="Centros de servicio" />
    <Components.BannerContainer>
      <Components.BannerImage>
        <img src={HeroImage} />
      </Components.BannerImage>
      <Components.Container>
        <Components.BannerBox>
          <div style={{ padding: "2rem" }}>
            <strong>
              Si requieres atención personalizada, comunicate con el centro de
              servicio más cercano a ti.
            </strong>
            <p className="font-sm body-l" style={{ marginBottom: "3rem" }}>
              * Algunos servicios ofrecidos por los centros autorizados de
              servicio pueden tener un costo
            </p>
            <table>
              <tr>
                <th width="20%">Zona de cobertura</th>
                <th>Nombre del centro</th>
                <th width="19%">Nombre del asesor</th>
                <th>Teléfono de contacto</th>
                <th>Correo de contacto</th>
              </tr>

              <tr>
                <td width="20%">
                  <strong>
                    Norte de Veracruz. <br />
                    Centro de Veracruz. <br />
                    Sierra norte de Puebla.
                    <br /> Toluca.
                  </strong>
                </td>
                <td>COMERCIAL ADUANAL AZTECA</td>
                <td>Joaquin Almaguer</td>
                <td>
                  Oficina Toluca: 722 196 2714 <br />
                  Movil Toluca: 722 358 1313 <br />
                  <br />
                  Oficina Veracruz: 229 489 6152 <br />
                  Movil Veracruz: 229 527 8292
                </td>
                <td>
                  <a href="mailto:asctoluca@hotmail.com">
                    asctoluca@hotmail.com
                  </a>{" "}
                  <br />
                  <a href="mailto:ascveracruz@hotmail.com">
                    ascveracruz@hotmail.com
                  </a>{" "}
                  <br />
                  <a href="mailto:ascpuebla@hotmail.com">
                    ascpuebla@hotmail.com
                  </a>
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <strong>
                    CDMX. Ecatepec. Coacalco. Satélite. Tultitlán.
                  </strong>
                </td>
                <td>
                  ZAVS INFORMÁTICA APLICADA{" "}
                  <a href="www.zavs-informatica.net">
                    www.zavs-informatica.net
                  </a>
                </td>
                <td>Santiago Galetto.</td>
                <td>
                  Oficina: 55 3028 3474 <br />
                  Móvil: 55 2999 6631
                </td>
                <td>
                  <a href="mailto:sgaletto@zavs-informatica.net">
                    sgaletto@zavs-informatica.net
                  </a>{" "}
                  <br />
                  <a href="mailto:mbpos.asesoria@gmail.com">
                    mbpos.asesoria@gmail.com
                  </a>{" "}
                  <br />
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <strong>
                    Centro, Sur y Oriente de CDMX. Nezahualcoyotl. Chalco.
                    Ixtapaluca. Iztapalapa. Los Reyes.
                  </strong>
                </td>
                <td>
                  SPECTRUM{" "}
                  <a href="www.spectrum-mexico.com/">
                    www.spectrum-mexico.com/
                  </a>
                </td>
                <td>Eduardo Martínez.</td>
                <td>Oficina: 55 5792 1294 y 55 2619 4279</td>
                <td>
                  <a href="mailto:contacto@spectrum.mx">contacto@spectrum.mx</a>{" "}
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <strong>Toluca. Zinacantepec. Metepec. Lerma.</strong>
                </td>
                <td>POSGO</td>
                <td>Rosa Maria Trevilla</td>
                <td>
                  Oficina: 722 232 4985 <br />
                  Móvil: 722 513 7079
                </td>
                <td>
                  <a href="mailto:ventas@posgo.net">ventas@posgo.net</a>{" "}
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <strong>Sonora. Sinaloa. Chihuahua. Baja California.</strong>
                </td>
                <td>SERVICIOS IT </td>
                <td>Jorge Villamil</td>
                <td>
                  Oficina: 662 213 0646 <br />
                  Móvil: 662 202 2925
                </td>
                <td>
                  <a href="mailto:jorge.villamil@serviciosit.com.mx">
                    jorge.villamil@serviciosit.com.mx
                  </a>{" "}
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <strong>Puebla. Tlaxcala.</strong>
                </td>
                <td>
                  JACHMER COMPUTACIÓN{" "}
                  <a href="http://www.jachmer.com">http://www.jachmer.com</a>
                </td>
                <td>Mercedes Ambriz Gonzalez</td>
                <td>
                  Oficina: 222 889 7448 <br />
                  Móvil: 222 585 0402 ó 222 513 5264
                </td>
                <td>
                  <a href="mailto:jachmer@hotmail.com">jachmer@hotmail.com</a>{" "}
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <strong>Michoacán. Guanajuato. Jalisco. Guerrero.</strong>
                </td>
                <td>INTEGRACIÓN TECNOLÓGICA </td>
                <td>Ingeniero Villicaña.</td>
                <td>
                  Oficina: 443 281 1644 ó 351 141 4320 <br />
                  Móvil: 443 146 7737
                </td>
                <td>
                  <a href="mailto:integracion.tecnologica@yahoo.com">
                    integracion.tecnologica@yahoo.com
                  </a>{" "}
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <strong>
                    Jalisco. Colima. Nayarit. Michoacán. Guanajuato.
                    Aguascalientes.{" "}
                  </strong>
                </td>
                <td>
                  CORPORACIÓN TECTRONIC S.A. DE C.V.{" "}
                  <a href="http://tectronic.com.mx/">
                    http://tectronic.com.mx/
                  </a>
                </td>
                <td>Ingeniero Oscar Acosta.</td>
                <td>
                  Oficina: 333 615 4411, 333 615 4511, 333 615 4611 <br />
                  Móvil: 33 1410 7702
                </td>
                <td>
                  <a href="mailto:sistemas@tectronic.com.mx">
                    sistemas@tectronic.com.mx
                  </a>{" "}
                  <br />
                  <a href="mailto:oscar@tectronic.com.mx">
                    oscar@tectronic.com.mx
                  </a>{" "}
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <strong>Pachuca. Hidalgo.</strong>
                </td>
                <td>GRUPO COMERCIAL NV</td>
                <td>Ingeniero Rodrigo Escobedo.</td>
                <td>Móvil: 55 5218 9629</td>
                <td>
                  <a href="mailto:gruponv2012@gmail.com">
                    gruponv2012@gmail.com
                  </a>{" "}
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <strong>Veracruz Centro.</strong>
                </td>
                <td>
                  CLUSTER SOLUCIONES{" "}
                  <a href="http://www.clustersoluciones.com">
                    http://www.clustersoluciones.com
                  </a>
                </td>
                <td>Erick Lagunes.</td>
                <td>
                  Oficina Córdoba: 271 712 2690
                  <br /> Móvil: 271 107 9299
                </td>
                <td>
                  <a href="mailto:contacto@clustersoluciones.com">
                    contacto@clustersoluciones.com
                  </a>{" "}
                  <br />
                  <a href="mailto:ericklagunes@clustersoluciones.com">
                    ericklagunes@clustersoluciones.com
                  </a>{" "}
                  <br />
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <strong>Jalisco. Michoacán. Colima.</strong>
                </td>
                <td>
                  SOLUCIONES POS.{" "}
                  <a href="http://www.soluciones-pos.com">
                    http://www.soluciones-pos.com
                  </a>
                  <br />
                  <a href="http://soporte.soluciones-pos.com">
                    http://soporte.soluciones-pos.com
                  </a>
                </td>
                <td>Jaime Campos Oregel.</td>
                <td>Oficina: 33 8421 1211</td>
                <td>
                  <a href="mailto:ventas@soluciones-pos.com">
                    ventas@soluciones-pos.com
                  </a>{" "}
                  <br />
                  <a href="mailto:proyectos@soluciones-pos.com">
                    proyectos@soluciones-pos.com
                  </a>{" "}
                  <br />
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <strong>Chetumal 100 km a la redonda.</strong>
                </td>
                <td>RAMSORE SYSTEMS</td>
                <td>LIC. Ramon Sosa Reyes</td>
                <td>Oficina: 983 102 1865</td>
                <td>
                  <a href="mailto:ramsore@gmail.com">ramsore@gmail.com</a>{" "}
                  <br />
                </td>
              </tr>

              <tr>
                <td width="20%">
                  <strong>Morelos</strong>
                </td>
                <td>
                  IDEATI TECNOLOGIA PARA COMERCIOS{" "}
                  <a href="https://ideati.mx/">https://ideati.mx/</a>
                </td>
                <td>Javier Pérez Arenas</td>
                <td>
                  Móvil: 735 351 1491
                  <br /> Oficina: 735 593 3228
                </td>
                <td>
                  <a href="mailto:contacto@ideati.mx ">contacto@ideati.mx </a>{" "}
                  <br />
                  <a href="mailto:ventas@ideati.mx ">ventas@ideati.mx </a>{" "}
                  <br />
                  <a href="mailto:soporte@ideati.mx ">
                    soporte@ideati.mx{" "}
                  </a>{" "}
                  <br />
                </td>
              </tr>
            </table>
          </div>
        </Components.BannerBox>
      </Components.Container>
    </Components.BannerContainer>
  </Layout>
);

export default IndexPage;
