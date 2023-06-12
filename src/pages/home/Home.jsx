import React from "react";
import { Category } from "../../components/category/Category";
import { Col, Row } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

export const Home = () => {
  return (
    <>
      <div style={{ padding: "64px 64px 0" }}>
        <Row gutter={48}>
          <Col className="gutter-row" span={6}>
            <Category />
          </Col>
          <Col className="gutter-row" span={6}>
            <Category />
          </Col>
          <Col className="gutter-row" span={6}>
            <Category />
          </Col>
          <Col className="gutter-row" span={6}>
            <Category />
          </Col>
        </Row>
      </div>
      <div style={{ padding: "64px 128px 0" }}>
        <Title level={5} style={{ textAlign: "center", margin: 0 }}>
          BOOKS GALLERY
        </Title>
        <Title level={3} style={{ textAlign: "center", margin: '0 0 32px' }}>
          Popular Books
        </Title>
        <Row gutter={64}>
          <Col className="gutter-row" span={8}>
            <div
              style={{
                height: "250px",
                width: "200px",
                border: "1px solid #000",
                margin: "0 68px",
              }}
            ></div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div
              style={{
                height: "250px",
                width: "200px",
                border: "1px solid #000",
                margin: "0 68px",
              }}
            ></div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div
              style={{
                height: "250px",
                width: "200px",
                border: "1px solid #000",
                margin: "0 72px",
              }}
            ></div>
          </Col>
        </Row>
      </div>
    </>
  );
};
