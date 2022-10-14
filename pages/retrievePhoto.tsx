import { GetServerSideProps } from 'next';
import React from 'react';
import twilio from 'twilio';

const retrievePhoto = () => {
  return (
    <div>retrievePhoto</div>
  )
}

export default retrievePhoto

export const getServerSideProps: GetServerSideProps = async ({req}) => {

    
    return {
        props: {
            
        }
    }
}