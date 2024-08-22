import React, {  useState } from 'react'

const WorkItem = ({item, openModal}) => {

 


  return (
   <div className="work_card" onClick={(e) => { e.preventDefault(); openModal(); }} key={item.id}>
    <img src={item.image} className='work_img' alt="" />
    <h3 className="work_title">{item.title} </h3>
    <a   onClick={(e) => { e.preventDefault(); openModal(); }} className="work_button">Demo <i className="bx bx-right-arrow-alt work_button-icon"></i></a>
   </div>
  )
}

export default WorkItem