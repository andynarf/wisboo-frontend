import React from "react";
import "./Uploader.css";

export default class Uploader extends React.Component {
  componentWillMount() {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = `//fast.wistia.com/assets/external/api.js`;
    script1.async = true;

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    window.wistiaInit = function (W) {
        window.wistiaUploader = new W.Uploader({
          accessToken: "abc9e4b7df3cae9eead2386f034a756568fcfcaad3cf053142c1d20a9acfc244",
          dropIn: "wistia_uploader",
          projectId: "hq41ttfjz3",
        });
      }
      
    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }

  render() {
    return (
      <div className="video__contained">
        <div
          className={`wistia_embed wistia_async_${this.props.id} videoFoam=true`}
        />
      </div>
    );
  }
}
