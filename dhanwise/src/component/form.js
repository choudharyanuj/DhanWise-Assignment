import React, { Component } from 'react'
import './form.css'
export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            mobile: '',
            active_flag :0,
            inactive_falg : 1
        }
    }
    handleChange =(e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value
        })
        let temp = e.target.value

        if(temp.length < 10) {
            this.setState({
                active_flag:0,
                inactive_falg:1
            })
        }
        else if(Number(temp[0] > 5 && temp.length == 10)) {
            this.setState({
                active_flag:1,
                inactive_falg:0
            })
        }
        else if(temp.length == 10 && Number(temp[0]) < 6){
            this.setState({
                active_flag:0,
                inactive_falg:0
            })
        }
    } 
    render() {
        return (
            <div>
                <center>
                    <form className="main">
                        <div>
                            <div {...this.state.inactive_falg ? {className: "span1"} : {...this.state.active_flag ? {className:"span1"}:{className: "span2"}}}>
                                <div className="inputWithIcon">
                                    <div>
                                        <input  placeholder="Enter 10 Digit Mobile No" name="mobile"  maxLength="10" onChange={this.handleChange} pattern="[0-9]"></input>    
                                    </div>
                                    <div>
                                        <p aria-hidden="true">+91</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            this.state.inactive_falg ?
                            <button disabled className="inactive">Send OTP</button>
                            : this.state.active_flag ?
                            <button className="active">Send OTP</button>:
                            <button className="error">Enter Valid Mobile Number</button>
                        }
                    </form>
                </center>
            </div>
        )
    }
}
