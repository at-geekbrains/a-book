import React from 'react';

import vk from '../../assets/img/icon-vk.svg';
import fb from '../../assets/img/icon-fb.svg';
import insta from '../../assets/img/icon-insta.svg';

import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
			<div className="footer-copyright">
				<p>© 2019 "A-Book"</p>
				<p>Все права защищены</p>
			</div>
			<div className="footer-social">
				<ul className="social-list list-hiden">
					<li>
						<a href="#" className="social-button">
							{/* <span className="visually-hidden">Вконтакте</span> */}
							<img src={vk} alt="Вконтакте" />
						</a>
					</li>
					<li>
						<a href="#" className="social-button">
							{/* <span className="visually-hidden">Фейсбук</span> */}
							<img src={fb} alt="Фейсбук" />
						</a>
					</li>
					<li>
						<a href="#" className="social-button">
							{/* <span className="visually-hidden">Инстаграм</span> */}
							<img src={insta} alt="Инстаграм" />
						</a>
					</li>
				</ul>
			</div>
		</footer>
  );
};

export default Footer;