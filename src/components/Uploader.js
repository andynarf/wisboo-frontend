import React from "react";
import "./Uploader.css";
import Helmet from 'react-helmet';

export default class Uploader extends React.Component {
  componentWillMount() {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = `//fast.wistia.com/assets/external/api.js`;
    script1.async = true;

    const scriptText = document.createTextNode(`window._wapiq = window._wapiq || [];
    _wapiq.push(function(W) {
      window.wistiaUploader = new W.Uploader({
        accessToken: "abc9e4b7df3cae9eead2386f034a756568fcfcaad3cf053142c1d20a9acfc244",
        dropIn: "wistia_uploader",
        projectId: "hq41ttfjz3",
        
        embedCodeOptions: {
          playerColor: "F93377",}
      });
    });
    `);

    script2.appendChild(scriptText);
    
    document.body.appendChild(script1);
    document.body.appendChild(script2);

  }

  render() {
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
