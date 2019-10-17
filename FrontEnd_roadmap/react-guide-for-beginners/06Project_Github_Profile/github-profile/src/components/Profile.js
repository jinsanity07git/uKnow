import React, {Component } from 'react';



class Profile extends Component{  

    componentDidMount(){
        let header = new Headers({"Content-Type": "application/json", "Authorization": "token eff71bf5c7b3e7231a3ee7386873696a219233f2"  })
        fetch('https://api.github.com/users/jinsanity07git',{
            method: 'GET',
            headers: header
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({
                jsonList :json
            });
          })
            .catch(error => {
                console.log(error)
            })

    }
render(){
    return (
        <div >
    <p>Profile </p>

        </div>
    );
    }
}
export default Profile;
