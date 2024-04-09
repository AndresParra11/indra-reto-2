import { Row, Col } from "@themesberg/react-bootstrap";
import CodeEditor from "../CodeEditor/CodeEditor";
import PropTypes from "prop-types";

export default function Documentation(props) {
  const {
    title,
    description,
    example = null,
    imports = null,
    scope = {},
    maxHeight = null,
  } = props;

  return (
    <>
      <div className="pt-2">
        <Row>
          <Col xs={12}>
            <h2 className="fs-5">{title}</h2>
            {description}
          </Col>
        </Row>
      </div>

      <div className="pb-5">
        <Row className="mt-4">
          <Col xs={12}>
            <CodeEditor
              code={example}
              scope={scope}
              imports={imports}
              maxHeight={maxHeight}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

Documentation.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  example: PropTypes.string,
  imports: PropTypes.string,
  scope: PropTypes.object,
  maxHeight: PropTypes.number,
};
