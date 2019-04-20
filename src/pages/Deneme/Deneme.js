
import React, {Component} from 'react';

import styles from './Deneme.css';

class Deneme extends Component{
  
  componentDidMount(){
    alert('merhaba');
  }


  render(){
    return (
      <div className={styles.normal}>
        <h1>Page Deneme</h1>
      </div>
    );
  }
 
}

export default Deneme;
