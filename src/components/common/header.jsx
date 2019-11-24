import React, { Component } from 'react';
class Header extends Component {
    state = {  }
    render() { 
        //style="float:right"
        return ( 
            <div className="header">
                <ul className='headerul'>
  <li className="headerli"><a><b>Defect Tracker</b></a></li>
  <li className="headerli"><a class="active">About</a></li>
</ul>
            </div>
         );
    }
}
 
export default Header;