import React , {useState} from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Collapse, Button } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  services,
  enterpreneurship,
  education,
  programmingSkills,
  designTools,
  xrTools,
} from "../../content_option";

export const About = () => {
  const [openProgramming, setOpenProgramming] = useState(false);
  const [openDesignTools, setOpenDesignTools] = useState(false);
  const [openXRTools, setOpenXRTools] = useState(false);

  return (
    <HelmetProvider>
      
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {education.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline (4 Years Exp.)</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Enterpreneurship</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {enterpreneurship.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
                {/* Skills Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">

            
            {/* Programming & Web Development */}
            <div>
              <Button className="skill-category"
                onClick={() => setOpenProgramming(!openProgramming)}
                aria-controls="programming-collapse"
                aria-expanded={openProgramming}
                
              >
                Programming & Web Development
              </Button>
              <Collapse in={openProgramming}>
                <div id="programming-collapse">
                  {programmingSkills.map((skill, i) => (
                    <div key={i}>
                      <h3 className="progress-title">{skill.name}</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: `${skill.value}%` }}
                        >
                          <div className="progress-value">{skill.value}%</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Collapse>
            </div>

            {/* 3D Design Tools */}
            <div>
              <Button
                onClick={() => setOpenDesignTools(!openDesignTools)}
                aria-controls="design-collapse"
                aria-expanded={openDesignTools}
                variant="link"
                className="category-button"
              >
                3D Design Tools
              </Button>
              <Collapse in={openDesignTools}>
                <div id="design-collapse">
                  {designTools.map((skill, i) => (
                    <div key={i}>
                      <h3 className="progress-title">{skill.name}</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: `${skill.value}%` }}
                        >
                          <div className="progress-value">{skill.value}%</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Collapse>
            </div>

            {/* XR & Virtual Design Platforms */}
            <div>
              <Button
                onClick={() => setOpenXRTools(!openXRTools)}
                aria-controls="xr-collapse"
                aria-expanded={openXRTools}
                variant="link"
                className="category-button"
              >
                XR & Virtual Design Platforms
              </Button>
              <Collapse in={openXRTools}>
                <div id="xr-collapse">
                  {xrTools.map((skill, i) => (
                    <div key={i}>
                      <h3 className="progress-title">{skill.name}</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: `${skill.value}%` }}
                        >
                          <div className="progress-value">{skill.value}%</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Collapse>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Interested in</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
      
    </HelmetProvider>
  );
};
