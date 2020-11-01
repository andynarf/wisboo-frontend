import React from "react";
import "./Uploader.css";
import Helmet from 'react-helmet';

export default class Uploader extends React.Component {
  componentWillMount() {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
   
    script1.src = `//fast.wistia.com/assets/external/api.js`;
    script1.async = true;

    const scriptText = document.createTextNode(`
      window._wapiq = window._wapiq || [];
      _wapiq.push(function(W) {
        window.wistiaUploader = new W.Uploader({
          accessToken: "abc9e4b7df3cae9eead2386f034a756568fcfcaad3cf053142c1d20a9acfc244",
          dropIn: "wistia_uploader",
          projectId: "hq41ttfjz3",
          beforeUpload: function() {
            wistiaUploader.setFileName('${this.props.title}');
          },
            embedCodeOptions: {
              playerColor: "${this.props.color}",
            },

        });
        console.log(window.wistiaUploader);
        window.wistiaUploader.bind("uploadprogress", function (file, progress) {
          console.log(Math.round(progress * 100) + "% uploaded");
        });
    });
    `);
    

    script2.appendChild(scriptText);

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    

  }


  componentDidUpdate(){

    console.log('actualize componente')

    const script2 = document.createElement("script");

    const scriptText = document.createTextNode(`
    window._wapiq = window._wapiq || [];
    _wapiq.push(function(W) {
      window.wistiaUploader = new W.Uploader({
        accessToken: "abc9e4b7df3cae9eead2386f034a756568fcfcaad3cf053142c1d20a9acfc244",
        dropIn: "wistia_uploader",
        projectId: "hq41ttfjz3",
        beforeUpload: function() {
          wistiaUploader.setFileName('${this.props.title}');
        },
          embedCodeOptions: {
            playerColor: "${this.props.color}",
          },

      });
      console.log(window.wistiaUploader);
      window.wistiaUploader.bind("uploadprogress", function (file, progress) {
        console.log(Math.round(progress * 100) + "% uploaded");
      });
  });
  `);
  

  script2.appendChild(scriptText);

  document.body.appendChild(script2);
  }


  
  render() {


    return (
      <div id='mydiv' className="video__contained">
        <Helmet>
        <link rel="stylesheet" href="//fast.wistia.com/assets/external/uploader.css" />
        </Helmet>
        <div id="wistia_uploader"></div>
        <button onClick={() => {console.log(this.props.title)}}> test </button>
      </div>
    );
  }
}
