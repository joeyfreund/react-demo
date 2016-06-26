import React from 'react';
import { Link } from 'react-router'


export default class App extends React.Component {

	render(){
		return (
			<div>
				<div class="nav" style={{marginBottom: 48}}>
					<Link to="/">Home</Link> 
					&nbsp; | &nbsp; 
			    	<Link to="/catalog">Catalog</Link>
		    	</div>

			    { /* This might be important */}
			    {this.props.children}

		  	</div>
		);
	}
}
