"use client";
import Image from "next/image";
import React from "react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const DisplayTodo = dynamic(() => import ('@/core/component/organisms/displayTodo'), {ssr: false})

export default function Home() {
  const StyledPage = styled.div`
    min-height: 100vh;
    background-color: #fff;
    width: 70%;
    margin: 0 auto;
  `;
  const ButtonAndInput = styled.div`
    display: flex;
    gap: 1rem;
  `

  const TodoWrapper = styled.div`

  `

  // ADD TODO
  const addTodo = () => {
    console.log("add todo")
  }

  return (
    <StyledPage>
      <div>
        <h1>Todo list with firebase</h1>
        <ButtonAndInput>
          <input
            type="text"
            placeholder="Enter todo"
            className="input-field"
          />
          <button onClick={addTodo}>
            Add todo
          </button>
        </ButtonAndInput>
        <TodoWrapper>
          <DisplayTodo/>
        </TodoWrapper>
      </div>
    </StyledPage>
  );
}
