import React from "react";
import { Typography, Button } from "antd";
import "./category.css";

const { Text } = Typography;

export const Category = () => {
  return (
    <div className="categoryBox">
      <div className="categoryTitle">
        <Text className="title">New Book</Text>
        <Text className="description">Find all new books</Text>
        <Button size="middle">Explore</Button>
      </div>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/001/486/411/small/open-book-icon-free-vector.jpg"
        alt=""
        className="bookImg"
      />
    </div>
  );
};
