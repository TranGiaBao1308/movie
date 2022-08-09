import React, { Component } from "react";

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import { useSelector } from "react-redux";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
export default function Spinner() {
  let loading = useSelector((state) => state.spinner.loading);
  return loading ? (
    <div
      id="spinner"
      className="fixed w-screen h-screen bg-black z-200 flex items-center justify-center"
    >
      <ClipLoader color={"#ffffff"} loading={true} css={override} size={150} />
    </div>
  ) : (
    <></>
  );
}
