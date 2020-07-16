import React from "react";
import { DatePicker } from 'antd';


const {  Carousel  } = antd;

ReactDOM.render(
  <Carousel autoplay>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>,
  mountNode,
);