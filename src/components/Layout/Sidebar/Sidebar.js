import React, { Component } from "react";
import { Drawer } from "@material-ui/core";

class Sidebar extends Component {
	state = {};
	render() {
		return (
			<div>
				<Drawer open variant="permanent">
					Hi
				</Drawer>
			</div>
		);
	}
}

export default Sidebar;
