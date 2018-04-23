import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {requestApiData} from "./actions";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            apiData: {}
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();

        const payload = {username: this.state.username, email: this.state.email, password: this.state.password};
        this.props.requestApiData(payload)

    }

    handleUsernameChange(event) {
        event.preventDefault();
        this.setState({username: event.target.value})
    }

    handleEmailChange(event) {
        event.preventDefault();
        this.setState({email: event.target.value})
    }

    handlePasswordChange(event) {
        event.preventDefault();
        this.setState({password: event.target.value})
    }

    welcome(x) {
        if (x) {
            return `Welcome ${x.username}, Signup Successful`;
        }
        else {
            return "";
        }
    }

    render() {

        const apiResults = this.props.data;
        const apiData = apiResults.data;

        return (
            <div className="textBoxes">

                <form className="textBox" onSubmit={this.handleSubmit}>
                    <h1>Username </h1>

                    <input type="text" name="Username" onChange={this.handleUsernameChange}/>


                    <h1>Email</h1>

                    <input type="text" name="email" onChange={this.handleEmailChange}/>

                    <h1>Password</h1>

                    <input type="text" name="email" onChange={this.handlePasswordChange}/>

                    <div>
                        <input type="submit" value="Sign Up"/>
                    </div>

                </form>

                <h1>
                    {this.welcome(apiData)}
                </h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
            data: state.data
        }
    );

const mapDispatchToProps = dispatch =>
    bindActionCreators({requestApiData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);