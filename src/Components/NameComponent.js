import React, {Component} from 'react';
import { render } from '@testing-library/react';

class NameComponent extends Component {
     
    constructor(props) {
        super(props);
        this.state = ({
          // date: new Date()
          name_displayed: 'First Name',
          title : 'Software Engineer'
        });
      }

  componentDidMount() {
    console.log('mounted');
  }

  componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      if(this.props.user_name!==nextProps.user_name) {
          if(nextProps.user_name.indexOf(' ')>=-1) {
              this.setState({
              name_displayed : 'Full name'
          })
        } else {
            this.setState({
                name_displayed : 'First name'
            })
      }
    }
  }
render() {

    const {user_name} = this.props; 
    const {name_displayed} = this.state; 

  return (
    <div>
        <p>{name_displayed}</p>
        <p>{user_name ? user_name : 'No user here.'}</p>
    </div>
  );
 }
}

export default NameComponent;
