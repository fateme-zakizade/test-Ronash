import React, { Component } from 'react';
import { Card,Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {PlayMusic} from "./playMusic";
import {editDataFunction} from "../editData/editData"

class ShowCard extends Component{
    constructor(props)
    {
        super(props);
        const {title,description}=props.cardShow;
        this.state={
            title:title,
            description:description,
            edit:false,
        }
    }

    ////////////////////////////////////////////////////////


    editSave=()=>{
        const {edit,title,description}=this.state;
        const {index}=this.props;
        if(edit)
        {
            
            this.props.dispatch(editDataFunction({description,title,index}));
        }
        this.setState({edit:!edit});
    }


    ///////////////////////////////////////////////////////////////


    changeInput=({target:{value,name}})=>{
        this.setState({[name]:value});

    }
    //////////////////////////////////////////////////////////
    render(){
       
        const {title,description,edit}=this.state;
        const {code,sound,image}=this.props.cardShow;
        return (<div>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                       <Card.Title>{edit? <input name="title"  value={title} onChange={this.changeInput} style={{border:"solid rgb(88, 102, 165) 1px"}}/> : title}</Card.Title>
                       <Card.Text>{edit? <textarea row={5} name="description" value={description} onChange={this.changeInput}  style={{width:"100%",border:"solid rgb(88, 102, 165) 1px"}}/> : description}</Card.Text>
                          {code===2 ? <PlayMusic   sound={sound}  /> : ""}
                    </Card.Body>
                    {code===0 ? <Card.Img variant="bottom" src={image} />  : ""}
  
                    <Button variant="secondary" onClick={this.editSave} className="my-3 mx-auto w-50" >{edit ? "Save" : "Edit"} </Button>
                   </Card>
                </div>)

    }
    
}


function mapStateToProps(state) {
    return { };
  }
  
  export default connect(mapStateToProps)(ShowCard);