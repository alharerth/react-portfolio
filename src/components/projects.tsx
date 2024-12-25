import React from "react";
import "../styles/projects.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../data";

interface PortfolioItem {
  img: string;
  description: string;
  link: string;
}

export const Portfolio: React.FC = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">PROJECTS</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data: PortfolioItem, i: number) => (
            <div key={i} className="po_item">
              <img src={data.img} alt={`Project ${i + 1}`} />
              <div className="content">
                <p>{data.description}</p>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
