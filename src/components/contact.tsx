import React, { useState, ChangeEvent, FormEvent } from "react";
import "../styles/contact.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../data";
import { Container, Row, Col, Alert } from "react-bootstrap";

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
    showAlert: false,
    showError: false,
  });

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setFormData((prev) => ({ ...prev, showError: true }));
      return;
    }

    setFormData({
      email: "",
      name: "",
      message: "",
      showAlert: true,
      showError: false,
    });

    // Simulate a "success" action by reloading the page after showing the alert
    setTimeout(() => window.location.reload(), 2000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value, showError: false }));
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              variant="success"
              className={`rounded-0 co_alert ${formData.showAlert ? "d-block" : "d-none"}`}
            >
              <p className="my-0">Email sent successfully!</p>
            </Alert>
            <Alert
              variant="danger"
              className={`rounded-0 co_alert ${formData.showError ? "d-block" : "d-none"}`}
            >
              <p className="my-0">Please enter a valid email address.</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong> <a href="mailto:your_email@example.com">your_email@example.com</a>
            </address>
            <p>Feel free to reach out to me for any inquiries or collaborations.</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
