import React from "react";
import './Video.css'

export default class Video extends React.Component {
  

  componentWillMount() {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = `https://fast.wistia.com/embed/medias/${this.props.id}.jsonp`;
    script1.async = true;

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;


    document.body.appendChild(script1);
    document.body.appendChild(script2);


  }

  render() {
    console.log(this.props.color)
    return (
        <div className='video__contained'>
            <div className= {`wistia_embed wistia_async_${this.props.id} playerColor=${this.props.color} videoFoam=true`}/>
        </div>
    );
  }
}
