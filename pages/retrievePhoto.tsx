import { GetServerSideProps } from 'next'
import React from 'react'

const retrievePhoto = () => {
  return (
    <div>retrievePhoto</div>
  )
}

const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key: any, value: any) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

export default retrievePhoto

export const getServerSideProps: GetServerSideProps = async ({req}) => {

    const data = req
    console.log(JSON.stringify(data, getCircularReplacer()));
    return {
        props: {
            
        }
    }
}