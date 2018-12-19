import React from 'react'
import './style.scss';

export default ()=>(
		<nav className="navbar">
			<div className="container">
				<div className="navbar-menu">
					<div className="columns">
						<span className="column">
							<a
								className="button is-info"
								href="/about"
							>
								<span>Career</span>
							</a>
						</span>
            <span className="column">
							<a
								className="button is-info"
								href="/about"
							>
								<span>About</span>
							</a>
						</span>
					</div>
				</div>
			</div>
		</nav>
)