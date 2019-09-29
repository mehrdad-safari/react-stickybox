import React, { useState } from "react";
import "./StickyBox.css";

const StickyBox = props => {

  const [showBox, setShowBox] = useState(true);
  const xClass = props.className || '';

  const getPosition = () => {
    const position = props.position.split("-");
    let boxPostion = {};

    if (position[0] === "center") boxPostion.top = "50%";
    if (position[1] === "center") boxPostion.right = "50%";

    position.map((p, index) => {
      switch (p) {
        case "top":
          boxPostion.top = "0px";
          break;

        case "bottom":
          boxPostion.bottom = "0px";
          break;

        case "left":
          boxPostion.left = "0px";
          break;

        case "right":
          boxPostion.right = "0px";
          break;

        case "center":
          break;

        default:
          boxPostion.right = "0px";
          boxPostion.top = "0px";
          break;
      }
    });

    return boxPostion;
  };

  const closeBtnHandler =(e) => {
    e.preventDefault();
    setShowBox(!showBox);
  }

  const addStyle = () => {
    let style = {};
    style.width = props.width ? props.width : "40%";
    style.backgroundColor = props.bgColor ? props.bgColor : "#f5f5f5";
    style.color = props.textColor ? props.textColor : "#000";
    style = props.position ? { ...style, ...getPosition() } : style;

    return style;
  };


  const addHeadStyle = () => {

    const headStyle = {};
    headStyle.backgroundColor = props.header.bgColor ? props.header.bgColor : "#FF704D";
    headStyle.color = props.header.textColor ? props.header.textColor : "#FFF";
     
    return headStyle;
  };


  if (showBox) {
    return (
      <div className={`stickyboxcontainer ${  xClass  } `} style={ addStyle() }>
        <div className="box" style={{ backgroundColor : addStyle().backgroundColor }}>
          { props.closeBtn === 'show' && (
            <span
              className="close-button"
              onClick={ (e) => closeBtnHandler(e) }
            >
              &#10006;
            </span>
          )}
           { console.log(props.header) }
          {props.header && props.header.title && <h3 style={ addHeadStyle() }> { props.header.title } </h3> }
          { props.children }
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default StickyBox;
