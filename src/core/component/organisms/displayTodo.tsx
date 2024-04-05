import React from 'react'
import styled from "@emotion/styled"
import dynamic from 'next/dynamic'


export const fakeData: string[] = [
  "Hello good morning",
  "How are you doing",
  "I am doing great",
  "What is your name?"
]

const SingleTodo = dynamic(() => import('../molecules/singleTodo'), {ssr: false})

function DisplayTodo() {

  const TodoWrapper = styled.main`
    margin-top: 50px;
  `

  return (
    <TodoWrapper>
      {fakeData?.map((item, index) => (
        <SingleTodo key={index} text={item}/>
      )) }
    </TodoWrapper>
  )
}

export default DisplayTodo