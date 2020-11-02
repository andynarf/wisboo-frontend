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
            playerColor: "${this.removeCharAt(this.props.color)}",
          },

      });
      wistiaUploader.bind('uploadsuccess', function(file, media) {

        async function postData () {

          try{
              let result = await fetch("https://serene-peak-85680.herokuapp.com/videos?videoid=" + media.id + "&title=${this.props.title}&color=${this.removeCharAt(this.props.color)}",{
                  method: 'post',
                  mode: 'no-cors',
             
              })
              console.log(result)
      
          } catch(e) {
              console.log(e)
          }
        }
        postData()
      

        
      });
     
  });
  `);
    

    script2.appendChild(scriptText);

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    

  }

  removeCharAt (string) {
    let tmp = string.split(''); // convert to an array
    tmp.splice(0 , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
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
            playerColor: "${this.removeCharAt(this.props.color)}",
          },

      });
      wistiaUploader.bind('uploadsuccess', function(file, media) {

        async function postData () {

          try{
              let result = await fetch("https://serene-peak-85680.herokuapp.com/videos?videoid=" + media.id + "&title=${this.props.title}&color=${this.removeCharAt(this.props.color)}",{
                  method: 'post',
                  mode: 'no-cors',
             
              })
              console.log(result)
      
          } catch(e) {
              console.log(e)
          }
        }
        postData()
      

        
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
