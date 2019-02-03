import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

class AddDropCourses extends Component{
	constructor(props){
		super(props);
		this.state={
			courses:[],
			sid:'',
			sub1:false,
			sub2:false,
			sub3:false,
			sub4:false,
			sub5:false,
			sub6:false,
			sub7:false,
			sub8:false,
			sub9:false,
			sub10:false,
			sub11:false,
			sub12:false,
			sub13:false,
			sub14:false,
			sub15:false,
			sub16:false,
			sub17:false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		// console.log(event.target)
		const {name, value, type, checked} = event.target
		
		// // if(checked){
		// 	console.log(value)
		// 	console.log(checked)
		// 	this.setState({[name]: value})
		// 	console.log(this.state)	
		// }	
		if(checked){
			this.setState({[name]: value})
		}else{
			this.setState({[name]: false})
		}
		
	}

	componentDidMount()
	{
		var config = 
        {
            header: {'Access-Control-Allow-Origin': '*'}
		};
		var payload ={
			term:this.props.location.state.term
		}
		this.setState({
			sid:this.props.location.state.sid
		})
        axios.post('http://localhost:6001/get_all_courses', payload,config).then(res=>{
			console.log(res)
			this.setState({
                courses:res.data.data
			  });
			  
            // if(res.status === 200){
            //     NotificationManager.success('Applications Saved','Success');
            //     setTimeout(()=>{
            //         window.location.reload()

            //     },1000)
                
            // }
		})
		
		console.log(this.props);
	}
	
	handleSubmit(event){
	var crn=[]
	if(this.state.sub1!==false)
	crn.push(this.state.sub1)
	if(this.state.sub2!==false)
	crn.push(this.state.sub2)
	if(this.state.sub3!==false)
	crn.push(this.state.sub3)
	if(this.state.sub4!==false)
	crn.push(this.state.sub4)
	if(this.state.sub5!==false)
	crn.push(this.state.sub5)
	if(this.state.sub6!==false)
	crn.push(this.state.sub6)
	if(this.state.sub7!==false)
	crn.push(this.state.sub7)
	if(this.state.sub8!==false)
	crn.push(this.state.sub8)
	if(this.state.sub9!==false)
	crn.push(this.state.sub9)
	if(this.state.sub10!==false)
	crn.push(this.state.sub10)
	if(this.state.sub11!==false)
	crn.push(this.state.sub11)
	if(this.state.sub12!==false)
	crn.push(this.state.sub12)
	if(this.state.sub13!==false)
	crn.push(this.state.sub13)
	if(this.state.sub14!==false)
	crn.push(this.state.sub14)
	if(this.state.sub15!==false)
	crn.push(this.state.sub15)
	if(this.state.sub16!==false)
	crn.push(this.state.sub16)
	if(this.state.sub17!==false)
	crn.push(this.state.sub17)
	alert(crn);
	var payload = {
		"sid":"temp",
      "term":this.props.location.state.term,
      "grade":"I",
      "year":"2019",
      "crn":crn
    }
	console.log(payload);
	}

	render(){
		return(
			<div>
                <h1 className="text-center" color="info">Add/Drop Courses</h1>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course No</th>
                            <th>Course Prefix</th>
                            <th>Course CRN</th>
							<th>Course Title</th>
                            <th>Days</th>
                            <th>Start Time</th>
							<th>End Time</th>
                            <th>Instructor</th>
							<th>Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.courses.map(
                            (course,index)=>
                            <tr>
								<th scope="row"><input type="checkbox" name={course.crn} value={course.crn} checked={course.crn1} onChange={this.handleChange}/></th>
                                <td >{course.cno}</td>
                                <td>{course.cprefix}</td>
								<td>{course.crn}</td>
								<td >{course.ctitle}</td>
                                <td>{course.days}</td>
								<td>{course.starttime}</td>
								<td >{course.endtime}</td>
                                <td>{course.instructor}</td>
								<td>{course.room}</td>
                                {/* <td><NavLink to={`${application.aid}/application`} className="btn btn-info">View Application</NavLink></td> */}
                                
                            </tr>
                            )}
                    </tbody>
                </Table>
            </div>
			// <div>
			// <form>
			// <h2>Add Courses</h2>
			// <table border="1" width="100%">
			// <tr>
			// <th>Select</th>
			// <th>CRN</th>
			// <th>Course Prefix</th>
			// <th>Course Number</th>
			// <th>Course Name</th>
			// <th>Course Credits</th>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub1" value="10101" checked={this.state.sub1} onChange={this.handleChange}/></td>
			// <td>10101</td>
			// <td>CSC</td>
			// <td>1010</td>
			// <td>Computers and Applications</td>
			// <td>3</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub2" value="10102" checked={this.state.sub2} onChange={this.handleChange}/></td>
			// <td>10102</td>
			// <td>CSC</td>
			// <td>2010</td>
			// <td>Introduction to Computer Science</td>
			// <td>3</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub3" value="10103" checked={this.state.sub3} onChange={this.handleChange}/></td>
			// <td>10103</td>
			// <td>CSC</td>
			// <td>2310</td>
			// <td>Introduction to Programming in Java</td>
			// <td>3</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub4" value="10104" checked={this.state.sub4} onChange={this.handleChange}/></td>
			// <td>10104</td>
			// <td>CSC</td>
			// <td>2311</td>
			// <td>Introduction to Programming in C++</td>
			// <td>3</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub5" value="10105" checked={this.state.sub5} onChange={this.handleChange}/></td>
			// <td>10105</td>
			// <td>CSC</td>
			// <td>3410</td>
			// <td>Data Structures</td>
			// <td>3</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub6" value="10106" checked={this.state.sub6} onChange={this.handleChange}/></td>
			// <td>10106</td>
			// <td>CSC</td>
			// <td>3210</td>
			// <td>Computer Organization</td>
			// <td>3</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub7" value="10107" checked={this.state.sub7} onChange={this.handleChange}/></td>
			// <td>10107</td>
			// <td>CSC</td>
			// <td>3320</td>
			// <td>System Level Programming in Unix and C</td>
			// <td>3</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub8" value="10108" checked={this.state.sub8} onChange={this.handleChange}/></td>
			// <td>10108</td>
			// <td>MATH</td>
			// <td>2211</td>
			// <td>Calculus I</td>
			// <td>5</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub9" value="10109" checked={this.state.sub9} onChange={this.handleChange}/></td>
			// <td>10109</td>
			// <td>MATH</td>
			// <td>2212</td>
			// <td>Calculus II</td>
			// <td>5</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub10" value="10110" checked={this.state.sub10} onChange={this.handleChange}/></td>
			// <td>10110</td>
			// <td>MATH</td>
			// <td>2420</td>
			// <td>Discrete Mathematics</td>
			// <td>3</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub11" value="10111" checked={this.state.sub11} onChange={this.handleChange} /></td>
			// <td>10111</td>
			// <td>CSC</td>
			// <td>6220</td>
			// <td>Networks</td>
			// <td>4</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub12" value="10112" checked={this.state.sub12} onChange={this.handleChange} /></td>
			// <td>10112</td>
			// <td>CSC</td>
			// <td>8220</td>
			// <td>Advanced Networks</td>
			// <td>4</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub13" value="10113" checked={this.state.sub13} onChange={this.handleChange}/></td>
			// <td>10113</td>
			// <td>CSC</td>
			// <td>6710</td>
			// <td>Database</td>
			// <td>4</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub14" value="10114" checked={this.state.sub14} onChange={this.handleChange}/></td>
			// <td>10114</td>
			// <td>CSC</td>
			// <td>8710</td>
			// <td>Advanced Database</td>
			// <td>4</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub15" value="10115" checked={this.state.sub15} onChange={this.handleChange}/></td>
			// <td>10115</td>
			// <td>CSC</td>
			// <td>6820</td>
			// <td>Graphics</td>
			// <td>4</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub16" value="10116" checked={this.state.sub16} onChange={this.handleChange}/></td>
			// <td>10116</td>
			// <td>CSC</td>
			// <td>8820</td>
			// <td>Advanced Graphics</td>
			// <td>4</td>
			// </tr>
			// <tr>
			// <td><input type="checkbox" name="sub17" value="10117" checked={this.state.sub17} onChange={this.handleChange}/></td>
			// <td>10117</td>
			// <td>POLS</td>
			// <td>1200</td>
			// <td>Intro Political Sci</td>
			// <td>3</td>
			// </tr>
			// </table>
			// <br />
			// <button onClick={this.handleSubmit}>ADD Courses</button> <button>REMOVE Courses</button>
			// </form>
			// </div>
		)
	}
}

export default AddDropCourses