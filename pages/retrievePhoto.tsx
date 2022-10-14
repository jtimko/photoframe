import { GetServerSideProps } from 'next'
import React from 'react'

const retrievePhoto = () => {
  return (
    <div>retrievePhoto</div>
  )
}

export default retrievePhoto

export const getServerSideProps: GetServerSideProps = async ({req}) => {

    const data = req
    console.log(JSON.stringify(data));
    return {
        props: {
            
        }
    }
}