import React from 'react';

interface ICard {
  title: string, 
  content: string,
}


export default function Card({ title, content }: ICard) {
  return (
    <>
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
    </>

    
  );
};
