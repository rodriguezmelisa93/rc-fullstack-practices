import React from 'react';
import Axios from 'axios';

export class MemeGenerator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemes: [],
            textTop: "",
            textBottom: ""
            
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
async componentDidMount(){
    const response = await Axios.get("https://api.imgflip.com/get_memes");
    const memes = response.data.data.memes;
    this.setState({allMemes: memes});


}

handleSubmit(event){
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * this.state.allMemes.length);
    const newMeme= this.state.allMemes[randomIndex].url;
    this.setState({ randomImg: newMeme});
}
handleChange(event){
   const { name, value } = event.target;
if(name === "top-input"){
    this.setState({textTop:value});

}
else if (name === "bottom-input"){
    this.setState({textBottom:value});

}
}

render(){
    return(
        <>
        <form className="meme-form" onSubmit={this.handleSubmit}>
            <input type="text" name="top-input" placeholder="texto de arriba" onChange={this.handleChange} />
            <input type="text" name="bottom-input" placeholder="texto de abajo" onChange={this.handleChange}/>
            <button>Change Meme</button>
        </form>
     <div className="meme">
         <img src={this.state.randomImg}/>
         <h2 className="top">{this.state.textTop} </h2>
         <h2 className="bottom">{this.state.textBottom} </h2>
        
     </div>
         </>   
    )
}
}