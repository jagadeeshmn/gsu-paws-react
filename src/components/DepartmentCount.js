import React,{Component} from "react";
import ProgramCount from "./ProgramCount";


class DepartmentCount extends Component{
    constructor(props){
        super(props);
        this.state={
            showAccept:false,
            showReject:false,
            showPending:false,
            acceptCount:0,
            rejectCount:0,
            pendingCount:0,
        }
    }
    componentDidMount(){
        // console.log(this.props.item);

        // console.log(Object.keys(this.props.item)[0]);
        if(typeof this.props.item[Object.keys(this.props.item)[0]].ACCEPT !== 'undefined'){
            this.setState({
                showAccept : true,
                acceptCount:this.props.item[Object.keys(this.props.item)[0]].ACCEPT
            })
        }
        if(typeof this.props.item[Object.keys(this.props.item)[0]].REJECT !== 'undefined'){
            this.setState({
                showReject : true,
                rejectCount:this.props.item[Object.keys(this.props.item)[0]].REJECT
            })
        }
        if(typeof this.props.item[Object.keys(this.props.item)[0]].PENDING !== 'undefined'){
            this.setState({
                showPending : true,
                pendingCount:this.props.item[Object.keys(this.props.item)[0]].PENDING
                
            })
        }
    }
    render(){
        const acceptDisplayStyle=this.state.showAccept?{}:{display:'none'}
        const rejectDisplayStyle=this.state.showReject?{}:{display:'none'}
        const pendingDisplayStyle=this.state.showPending?{}:{display:'none'}
        // console.log(this.state);
        return(
            <div>
                {Object.keys(this.props.item).map(()=>
                    <ProgramCount item={this.props.item} />
                )}
                {/* <h3>PROGRAM: {Object.keys(this.props.item)[0]}</h3>
                <p style={acceptDisplayStyle}>ACCEPTED: {this.state.acceptCount}</p>
                <p style={rejectDisplayStyle}>REJECTED: {this.state.rejectCount}</p>
                <p style={pendingDisplayStyle}>PENDING: {this.state.pendingCount}</p> */}
            </div>
            
            
        )
    }
}

export default DepartmentCount
