import React from 'react'
import { Link } from 'react-router-dom'


const MembersCard =(props)=>{

  return(
    <div className='membersCard'>
    <Link  to={"profile/"+props.data.sys.id} className="cardLink">
      <img src={`${props.data.fields.image.fields.file.url}?fm=webp&w=200&h=200` } alt=''/>
      <p>{props.data.fields.name}</p>
    </Link>
    </div>
  )
}

export default MembersCard