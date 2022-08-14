// import React from "react";
// import axios from "axios";

// class about extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         tagline: "",
//         description: "",
//       };
//       // console.log(this.setState.category)
//     }
  
//     // this method set the value of revealed to true on button click
//     checkAnswer() {
//       this.setState({ revealed: true });
//     }
  
//     componentDidMount() {
//       axios({
//         url: "http://127.0.0.1:8000/api/about",
//         method: "GET",
//       }).then((res) => {
//         // console.log("hello", res.data.results[0]);
//         this.setState({
//           tagline: res.data[0].tagline,
//           description: res.data[0].description,
//         });
//       });
//     }
  
//     render() {
//       //load Questions state variable
//       const { tagline } = this.state;
//       const { description } = this.state;
      
  
//       return (
//         // <div id="ques-ans">
//         //   <div> {category}</div>
//         //   <h2> {question}</h2>
//         // </div>
//         tagline,
//         description
//       );
//     }
//   }
//   export default about;
  