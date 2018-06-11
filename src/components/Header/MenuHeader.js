import React from 'react'

/**
 * This function is not ready to use - it's brought over for the clearbrook template but
 * not fully converted.
 * 
 * @param {string} title - the header title 
 */
const MenuHeader = ({title}) => {
	return (
		<header id="header" class="clearfix">
			<div id="header-wrap">
				<div class="row">
					<div class="columns medium-12">
						<div id="primary-menu-trigger"><i class="fa fa-bars"></i></div>

						<div id="logo">
							<a href="index.html" class="standard-logo" data-dark-logo="images/frio-logo-dark.png">
								<img src="images/frio-logo.png" alt="Frio Logo" />
							</a>
						</div>

						<nav id="primary-menu">
							<ul class="menu">
								<li><a href="#" data-href="#wrapper"><div>Home</div></a></li>
								<li><a href="#" data-href="#about-section"><div>About</div></a></li>
								<li><a href="#" data-href="#services-section"><div>Services</div></a></li>
								<li><a href="#" data-href="#work-section"><div>Works</div></a></li>
								<li><a href="blog.html"><div>Blog</div></a></li>
								<li><a href="#" data-href="#contact-section"><div>Contact</div></a></li>
							</ul>							
						</nav>

					</div>
				</div>
			</div>	
		</header>
	)
}

export default MenuHeader

