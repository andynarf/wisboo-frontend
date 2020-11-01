import React from "react";
import "./Uploader.css";
import Helmet from 'react-helmet';

export default class Uploader extends React.Component {
  componentWillMount() {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
    // const script3 = document.createElement("script");

  //   function wait(ms){
  //     var start = new Date().getTime();
  //     var end = start;
  //     while(end < start + ms) {
  //       end = new Date().getTime();
  //    }
  //  }
   
   

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
            wistiaUploader.setFileName('myfile');
          },
            embedCodeOptions: {
              playerColor: "F93377",},

        });
        console.log(window.wistiaUploader);
        window.wistiaUploader.bind("uploadprogress", function (file, progress) {
          console.log(Math.round(progress * 100) + "% uploaded");
        });
    });
    `);
    

    script2.appendChild(scriptText);

    // const scriptText2 = document.createTextNode(`
    // wistiaUploader.bind('uploadsuccess', function(file, media) {
    //   console.log('The uploadsuccess event fires when the upload completes successfully, and provides the Media object:\n',  media);
    // });
    // `)
    // script3.appendChild(scriptText2);


    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // document.body.appendChild(script3);
    

  }


  componentDidUpdate(){
    console.log('actualize componente')
  }

  // uploader () {
  //   window.wistiaUploader.bind('uploadsuccess', function(file, media) {
  //     console.log("The upload succeeded. Here's the media object!", media);
  //   });
  // }
  
  render() {
    // this.uploader()


    return (
      <div id='mydiv' className="video__contained">
        <Helmet>
        <link rel="stylesheet" href="//fast.wistia.com/assets/external/uploader.css" />
        </Helmet>
        <div id="wistia_uploader"></div>
      </div>
    );
  }
}
