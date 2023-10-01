import Image from "next/image"
import React from 'react';

interface ICard {
  title:string,
  description:string,
  image:string,
}


export default function Card({title,description,image}: ICard) {
  return(
  <>
    <div className="container text-left  ml-40 flex my-5">
      <Image
        src={image}
        alt="technovita_mission"
        width={50}
        height={50}

      />
      <div className="ml-2" >

      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
      </div>
    </div>
  </>
  )
}
