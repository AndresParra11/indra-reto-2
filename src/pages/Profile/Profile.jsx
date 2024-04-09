import { Col, Row } from "@themesberg/react-bootstrap";
import {
  ChoosePhotoWidget,
  ProfileCardWidget,
} from "../../components/Widgets/Widgets";
import { GeneralInfoForm } from "../../components/Forms/Forms";
import Sidebar from "../../components/Sidebar/Sidebar";

import Profile3 from "../../assets/img/team/profile-picture-3.jpg";

export default function Profile() {
  return (
    <div className="content">
      <Sidebar />
      <Row>
        <Col xs={12}>
          <ChoosePhotoWidget
            title="Escoge tu foto de perfil"
            photo={Profile3}
          />
        </Col>
        <Col xs={12} xl={8}>
          <GeneralInfoForm />
        </Col>
        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ProfileCardWidget />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
