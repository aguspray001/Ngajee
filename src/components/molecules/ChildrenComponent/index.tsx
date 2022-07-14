import React from 'react'

const ChildrenComponent = ({action, value}:{action?: ()=> void, value:any}) => {
  console.log("children rendered")
  return (
    <button onClick={action}>{value.toString()}</button>
  )
}

export default React.memo(ChildrenComponent)