import React from 'react'
import Uploader from '../components/Uploader'
import {Helmet} from "react-helmet";


export default function Upload() {
    return (
        <div>
            Upload
            <Uploader></Uploader>

            <div id='uploaded-video' className='uploaded-video__container'>

                hello
            </div>
        </div>
    )
}
