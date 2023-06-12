import React from "react";
import { Typography, Button } from 'antd'
import './category.css'

const { Text } = Typography;

export const Category = () => {
  return (
    <div className="categoryBox">
      <div>
        <Text className="title">New Book</Text>
        <Text className="description">Find all new books</Text>
      </div>
      <Button className="exploreButton">Explore</Button>
      <img src="" alt="" className="bookImg" />
    </div>
  );
};
