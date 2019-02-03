import React,{Component} from "react";

class HomePage extends Component{
    constructor(props){
        super(props)
        this.state={
			term:""
		}
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
		const {name, value} = event.target
		this.setState({[name]: value})
	}

	handleSubmit(event){
		console.log(this.state.term);
		var self = this;
		self.props.history.push
           (
             {
            pathname: '/AddDropCourses',
            state: {term: this.state.term}
            }
           );
    }
    
    componentDidMount(){
        
    }
    render(){
        return(
            <div>
                <h1>Welcome</h1>
                <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Select Semester</h2>
                    Select a Semester: <select value={this.state.term} onChange={this.handleChange} name="term">
                    <option value="">---Select Semester---</option>
                    <option value="FA">FALL</option>
                    <option value="SU">SUMMER</option>
                    <option value="SP">SPRING</option>
                    </select><br /><br />
                    <button>Submit</button>
                </form>	
                </div>
            </div>
        )
    }
}
export default HomePage;
