import { GetServerSidePropsContext } from 'next'
import React from 'react'

const retrievePhoto = () => {
  return (
    <div>retrievePhoto</div>
  )
}

export default retrievePhoto

export async function getServerSideProps(ctx: GetServerSidePropsContext | undefined) {
    const data = ctx?.req;

    console.log(JSON.stringify(data));
    return {
        props: {
            
        }
    }
}