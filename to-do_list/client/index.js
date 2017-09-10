import React from 'react';
import ReactDOM from 'react-dom';
var style = { 
	dispaly:'flex',
	justifyContent:'space-between'}
var color_display = {

    margin: '12px',
    height: '51px',
    display: 'flex',
    alignItems: 'center',    
    fontSize: '-webkit-xxx-large',
     textDecoration:'none',

}
var color_display_1 = {

    margin: '12px',
    height: '51px',
    display: 'flex',
    alignItems: 'center',    
    fontSize: '-webkit-xxx-large',
     textDecoration:'line-through',

}
var headingstyle = {
	    display: 'flex',
    justifyContent: 'space-between'
}
var inputstyle = {
	height:'50px',
	width:'800%',

}
var plusbutton = {
	height: '55px',
    width: '76px',
    borderRadius: '15px',
    backgroundColor: 'wheat',

}
 var contentdiv = {
 	position:'relative',
 	
 }
 var tickbutton= {
 	    position: 'absolute',
    left: '94%',
    height: '50px',
    width: '77px',
 }
 var datacontainer = {
 	
 	    display: 'flex'
 }

class Add extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rows:[],
			isToggleOn:true,
		}
		this.onRowAdd =  this.onRowAdd.bind(this);
		this.createRow =  this.createRow.bind(this);
	
		this.removeIt = this.removeIt.bind(this);
	}	
	createRow(){
		
		console.log("uouououououo");
		var a = this.props.filterText;
		if(a !==''){
			this.setState({
				
				rows: this.state.rows.concat([a]),
			
			});
		}
	this.props.onFilterTextInput('')	

	}
	removeIt(index){	
		console.log("nahi ho rha");
		this.setState({
			rows:  this.state.rows.filter((_, i) => i !== index)
		
	})

	 }
	  handleClick(e) {
	  			console.log(e.target.value);
	  			
	
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
	
	onRowAdd(e){

		this.props.onFilterTextInput(e.target.value);

		

	}
	
	render(){
		var box = [];
		var len = 1;

		return(
		<div>
			
			<div style = {headingstyle} > 	
				<div><input style = {inputstyle} type = "text" value = {this.props.filterText} onChange ={this.onRowAdd} /></div>
				<div><button style = {plusbutton} onClick = {this.createRow} >+</button> </div>
			</div>
			<div className = "heading" style = {headingstyle}>
				<div><h2>Task</h2></div>
				<div><h2>Status</h2></div>
					
			</div>
			<div className= "content_Div" style = {contentdiv}>
				
					{this.state.rows.map((task,i)=>(
						
							len++,
						box.push(<div className = "dataContianer" style = {datacontainer} ><p key = {i} onClick={this.handleClick.bind(this)}//How to use key if able to find out remove function will work
         style = {this.state.isToggleOn ? color_display : color_display_1}  value = {i} >{task.toString()}</p><button onClick = {this.removeIt} style = {tickbutton}>Remove</button></div>)

						
					))}	
					<div className = "data">
							{box}

				</div>
				<div>	
				

				</div>
				<div></div>
			</div>	
		</div>
		);
	}
}
class App extends React.Component {
	constructor(props){
		super(props);
    	this.state = {
      	filterText: '',

      	};
      	this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
      	

	}
	handleFilterTextInput(filterText){
		this.setState({
			filterText:filterText
		});
	}
	
  render() {
    return (

     <div style={{textAlign: 'center'}}>
        <h1>To-Do-List</h1>
        	<Add 	filterText = {this.state.filterText} 
        		 	onFilterTextInput = {this.handleFilterTextInput}  /> 
      </div>);
  }
}
ReactDOM.render(<App />, document.getElementById('root'));