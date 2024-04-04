"use client"
import Image from "next/image";
import React from "react"
import styled from "@emotion/styled"

export default function Home() {
  const StyledPage = styled.div`
    min-height: 100vh;
    background-color; #f7f8fc
  `
  return (
    <StyledPage>
      <div>
        <h1>Todo list with firebase</h1>
        <p>Deploy<span>-&gt;</span></p>
      </div>
    </StyledPage>
  );
}
