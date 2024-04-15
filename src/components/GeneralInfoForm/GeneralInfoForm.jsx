import { useEffect, useState } from "react";
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
import axios from "axios";

export const GeneralInfoForm = () => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);
  const fetchData = async () => {
    const userData = localStorage.getItem("user");

    if (userData) {
      const parsedUserData = JSON.parse(userData);

      setUser(parsedUserData);
      setUserLoaded(true);

      setName(parsedUserData?.name || "");
      setCellphone(parsedUserData?.cellphone || "");
      setBirthday(parsedUserData?.birthday || "");
      setGender(parsedUserData?.gender || "");
      setEmail(parsedUserData?.email || "");
      setProfessionalProfile(parsedUserData?.professionalProfile || "");
      setAddress(parsedUserData?.address || "");
      setCity(parsedUserData?.city || "");
      setState(parsedUserData?.state || "");
      setPostalCode(parsedUserData?.postalCode || "");
    }
  };

  const [name, setName] = useState(user.name || "");
  const [cellphone, setCellphone] = useState(user.cellphone || "");
  const [birthday, setBirthday] = useState(user.birthday || "");
  const [gender, setGender] = useState(user.gender || "");
  const [email, setEmail] = useState(user.email || "");
  const [professionalProfile, setProfessionalProfile] = useState(
    user.professionalProfile || ""
  );
  const [address, setAddress] = useState(user.address || "");
  const [city, setCity] = useState(user.city || "");
  const [state, setState] = useState(user.state || "");
  const [postalCode, setPostalCode] = useState(user.postalCode || "");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      name,
      cellphone,
      birthday,
      gender,
      email,
      professionalProfile,
      address,
      city,
      state,
      postalCode,
    } = event.target.elements;
    const res = await axios.put(`http://127.0.0.1:8000/api/users/${user._id}`, {
      name: name.value,
      cellphone: cellphone.value,
      birthday: birthday.value,
      gender: gender.value,
      email: email.value,
      professionalProfile: professionalProfile.value,
      address: address.value,
      city: city.value,
      state: state.value,
      postalCode: postalCode.value,
    });
    console.log(res.data);
  };

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Información General</h5>
        {userLoaded ? (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="name">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingrese su nombre completo"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="cellphone">
                  <Form.Label>Número de celular</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="3178551051"
                    name="cellphone"
                    value={cellphone}
                    onChange={(e) => setCellphone(e.target.value)}
                  />
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
                          name="birthday"
                          value={
                            birthday
                              ? moment(birthday).format("MM/DD/YYYY")
                              : ""
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
                  <Form.Select
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
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
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    name="professionalProfile"
                    value={professionalProfile}
                    onChange={(e) => setProfessionalProfile(e.target.value)}
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
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={4} className="mb-3">
                <Form.Group id="city">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ciudad"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col sm={4} className="mb-3">
                <Form.Group className="mb-2" id="state">
                  <Form.Label>Departamento</Form.Label>
                  <Form.Select
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
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
                  <Form.Control
                    required
                    type="text"
                    placeholder="050010"
                    name="postalCode"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="mt-3">
              <Button variant="primary" type="submit">
                Actualizar información
              </Button>
            </div>
          </Form>
        ) : (
          <p>Cargando...</p>
        )}
      </Card.Body>
    </Card>
  );
};
