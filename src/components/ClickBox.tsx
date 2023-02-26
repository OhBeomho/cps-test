import React, { useCallback, useEffect, useState } from "react"
import styled from "styled-components"

interface ClickBoxProps {
  time: number
}

export default function (props: ClickBoxProps) {
  const [finish, setFinish] = useState(false)
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(props.time)
  const [interval_, setInterval_] = useState<any>()
  const [timeout_, setTimeout_] = useState<any>()

  const onClick = useCallback(() => {
    if (count === 0) {
      const interval = setInterval(() => setTime((oldValue) => oldValue - 1), 1000)
      const timeout = setTimeout(() => {
        alert("측정이 끝났습니다. 결과를 확인하세요.")

        setFinish(true)

        clearInterval(interval)

        setInterval_(null)
        setTimeout_(null)
      }, 1000 * props.time)

      setInterval_(interval)
      setTimeout_(timeout)
    }

    setCount(count + 1)
  }, [count, props.time])

  useEffect(() => {
    clearInterval(interval_)
    clearTimeout(timeout_)

    setInterval_(null)
    setTimeout_(null)
    setTime(props.time)
    setCount(0)
    setFinish(false)
  }, [props.time])

  const restart = () => {
    setFinish(false)
    setTime(props.time)
    setCount(0)
  }

  return finish ? (
    <ClickBox onClick={restart}>
      <h2>{count / props.time}CPS</h2>
      <p>여기를 눌러 다시 시작할 수 있습니다.</p>
    </ClickBox>
  ) : (
    <ClickBox onClick={onClick}>
      {count ? (
        <div style={{ textAlign: "center" }}>
          <h2>{count}</h2>
          <p>
            남은 시간: <b>{time}초</b>
          </p>
        </div>
      ) : (
        "여기를 눌러 시작하세요."
      )}
    </ClickBox>
  )
}

const ClickBox = styled.div`
  width: 90vw;
  height: 80vh;
  max-width: 700px;
  max-height: 500px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
  user-select: none;
  transition: all 0.1s;
  margin: 20px 0;

  &:active {
    transform: scale(105%);
    background-color: rgba(0, 0, 0, 0.1);
  }
`
