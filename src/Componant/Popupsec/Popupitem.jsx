import React from 'react'
import './Popup.jsx'
const Popupitem = (props) => {
  return (
    <div className="confirm-modal1">
          <div className="confirm-content1">
            <p>
              {props.msg}
            </p>
          </div>
    </div>
  )
}

export default Popupitem
