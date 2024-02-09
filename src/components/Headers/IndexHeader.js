import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "../Headers/IndexHeader.css"

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: "url(" + require("assets/img/background.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Jomolhari Bhutan</h1>
              {/* <Typography 
              fontSize={{ sm: "17px", md: "18px", lg: "4rem" }}
              fontFamily={"Times New Roma"}
            >
             Jomolhari Bhutan
            </Typography> */}
            </div>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
