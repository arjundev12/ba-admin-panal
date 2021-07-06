import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        {/* <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">CoreUI</a> */}
        <span className="ml-1">  Atpl & 2021 Reserved</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        {/* <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">Winklix pvt ltd</a> */}
        <a  target="_blank" rel="noopener noreferrer">winklix internet pvt ltd</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
