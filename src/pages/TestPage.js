import React from 'react'
import axios from 'axios'

export default function TestPage() {




   

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://serene-peak-85680.herokuapp.com/videos", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

    // const testURL = 'https://serene-peak-85680.herokuapp.com/videos';
	// const myInit = {
	// 	method: 'HEAD',
	// 	mode: 'no-cors',
	// };

	// const myRequest = new Request(testURL, myInit);

	// fetch(myRequest).then(function(response) {
	// 	return response;
	// }).then(function(response) {
	// 	console.log(response);
	// }).catch(function(e){
	// 	console.log(e);
	// });


    // async function getData() {
    //     try {
    //       const response = await axios.get('https://serene-peak-85680.herokuapp.com/videos', {mode: 'no-cors'});
    //       console.log(response);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }




// async function postData () {

//     try{
//         let result = await fetch(`https://serene-peak-85680.herokuapp.com/videos?videoid=dsf23beE&title=${this.props.title}&color=${this.props.color}`,{
//             method: 'post',
//             mode: 'no-cors',
       
//         })
//         console.log(result)

//     } catch(e) {
//         console.log(e)
//     }
//     fetch("https://serene-peak-85680.herokuapp.com/videos", { 
//         method : 'GET',
//         headers: {
//             'Access-Control-Allow-Origin': 'http://localhost:3000/test',
//             'Content-Type': 'application/json',
//             'Accept' : 'application.json',
//         }
//      } )
//       .then((response) => response.json())
//       .then((data) => console.log(data));
// }

    return (
        <div>
            <button onClick={() =>{}}>press me to post</button>
        </div>
    )
}
