import React from "react";
import { Category } from "../../components/category/Category";
import { Col, Row } from "antd";

export const Home = () => {
  return (
    <>
      <Row gutter={16}>
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
    </>
  );
};
