import { useState } from "react";
import { Card, Form, Button, Col, Row } from "@themesberg/react-bootstrap";

const ProcessForm = () => {
  const [formData, setFormData] = useState({
    description: "",
    skills: "",
    date: "",
    job: "",
    stages: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStageChange = (e, index) => {
    const { name, value } = e.target;
    const updatedStages = [...formData.stages];
    updatedStages[index][name] = value;
    setFormData({
      ...formData,
      stages: updatedStages,
    });
  };

  const handleAddStage = () => {
    setFormData({
      ...formData,
      stages: [...formData.stages, {}],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Crear Proceso</h5>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descripción del proceso"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Skills</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Skills necesarias"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Cargo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Cargo asociado"
                  name="job"
                  value={formData.job}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          {formData.stages.map((stage, index) => (
            <div key={index}>
              <h6 className="my-3">Etapa {index + 1}</h6>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Título de la Etapa</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={`Título de la Etapa ${index + 1}`}
                      name={`titleStage${index}`}
                      value={stage.title}
                      onChange={(e) => handleStageChange(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Fecha de Etapa</Form.Label>
                    <Form.Control
                      type="date"
                      name={`dateStage${index}`}
                      value={stage.date}
                      onChange={(e) => handleStageChange(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Descripción de Etapa</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={`Descripción de la Etapa ${index + 1}`}
                      name={`descriptionStage${index}`}
                      value={stage.description}
                      onChange={(e) => handleStageChange(e, index)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          ))}
          <Button variant="primary" onClick={handleAddStage}>
            Añadir Etapa
          </Button>{" "}
          <Button variant="success" type="submit">
            Enviar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ProcessForm;
