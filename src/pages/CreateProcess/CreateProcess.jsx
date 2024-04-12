import Sidebar from "../../components/Sidebar/Sidebar";
import { Col, Row } from "@themesberg/react-bootstrap";
import CreateProcessForm from "../../components/CreateProcessForm/CreateProcessForm";

const CreateProcess = () => {
  return (
    <div className="content">
      <Sidebar />
      <Row>
        <Col xs={12} xl={8}>
          <CreateProcessForm />
        </Col>
      </Row>
    </div>
  );
};

export default CreateProcess;
