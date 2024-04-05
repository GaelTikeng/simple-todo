import React from 'react'
import styled from "@emotion/styled";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

interface Props {
  text: string
}

function SingleTodo({text}: Props) {
  const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 5px 0;
    &:hover {
      transform: translateY(2px);
      cursor: pointer;
    }
  `
  const TwoIcons = styled.div`
    display: flex;
    gap: 1rem;
    margin: auto 0;
  `

  return (
    <StyledContent>
      <p>{text}</p>
      <TwoIcons>
        <FiEdit className='icon' size={25}/>
        <RiDeleteBin5Fill className='icon' size={25}/>
      </TwoIcons>
    </StyledContent>
  )
}

export default SingleTodo