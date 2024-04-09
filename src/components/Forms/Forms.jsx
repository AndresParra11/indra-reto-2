import { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
} from "@themesberg/react-bootstrap";

export const GeneralInfoForm = () => {
  const [birthday, setBirthday] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Información General</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="name">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Ingrese su nombre completo"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="cellphone">
                <Form.Label>Número de celular</Form.Label>
                <Form.Control required type="text" placeholder="3178551051" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="birthday">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setBirthday}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={
                          birthday ? moment(birthday).format("MM/DD/YYYY") : ""
                        }
                        placeholder="mm/dd/yyyy"
                        onFocus={openCalendar}
                        onChange={() => {}}
                      />
                    </InputGroup>
                  )}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Género</Form.Label>
                <Form.Select defaultValue="0">
                  <option value="0">Género</option>
                  <option value="1">Mujer</option>
                  <option value="2">Hombre</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="email">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="name@company.com"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="professionalProfile">
                <Form.Label>Perfil Profesional</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Ingrese su perfil profesional"
                />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="my-4">Dirección de residencia</h5>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Dirección de residencia</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Ingrese su dirección de residencia"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={4} className="mb-3">
              <Form.Group id="city">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control required type="text" placeholder="Ciudad" />
              </Form.Group>
            </Col>
            <Col sm={4} className="mb-3">
              <Form.Group className="mb-2">
                <Form.Label>Departamento</Form.Label>
                <Form.Select id="state" defaultValue="0">
                  <option value="0">Departamento</option>
                  <option value="AM">Amazonas</option>
                  <option value="ANT">Antioquia</option>
                  <option value="ARA">Arauca</option>
                  <option value="ATL">Atlántico</option>
                  <option value="BOL">Bolívar</option>
                  <option value="BOY">Boyacá</option>
                  <option value="CAL">Caldas</option>
                  <option value="CAQ">Caquetá</option>
                  <option value="CAS">Casanare</option>
                  <option value="CAU">Cauca</option>
                  <option value="CES">Cesar</option>
                  <option value="CHO">Chocó</option>
                  <option value="CUN">Cundinamarca</option>
                  <option value="COR">Córdoba</option>
                  <option value="GUA">Guainía</option>
                  <option value="GUV">Guaviare</option>
                  <option value="HUI">Huila</option>
                  <option value="GUV">Guaviare</option>
                  <option value="LAG">La Guajira</option>
                  <option value="MAG">Magdalena</option>
                  <option value="MET">Meta</option>
                  <option value="NAR">Nariño</option>
                  <option value="NDS">Norte de Santander</option>
                  <option value="PUT">Putumayo</option>
                  <option value="QUI">Quindío</option>
                  <option value="RIS">Risaralda</option>
                  <option value="SAP">San Andrés y Providencia</option>
                  <option value="SAN">Santander</option>
                  <option value="SUC">Sucre</option>
                  <option value="TOL">Tolima</option>
                  <option value="VAC">Valle del Cauca</option>
                  <option value="VAU">Vaupés</option>
                  <option value="VID">Vichada</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group id="postalCode">
                <Form.Label>Código Postal</Form.Label>
                <Form.Control required type="text" placeholder="050010" />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
            <Button variant="primary" type="submit">
              Actualizar información
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
