import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popover from '../uielements/popover';
import userpic from '../../image/user1.png';
import authAction from '../../redux/auth/actions';

const { logout } = authAction;

class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false,
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const content = (
      <div className="isoUserDropdownContent">
        <a className="isoDropdownLink">Settings</a>
        <a className="isoDropdownLink">Feedback</a>
        <a className="isoDropdownLink">Help</a>
        <a className="isoDropdownLink" onClick={this.props.logout}>Logout</a>
      </div>
    );

    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        overlayClassName="isoUserDropdown"
        arrowPointAtCenter={true}
      >
        <div className="isoImgWrapper">
          <img alt="user" src={userpic} />
          <span className="userActivity online" />
        </div>
      </Popover>
    );
  }
}
export default connect(null, { logout })(TopbarUser);
