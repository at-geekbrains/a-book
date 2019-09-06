import React from 'react';
import { Link } from 'react-router-dom';

import './LoginForm.css';

const LoginForm = () => {
  return (
      <section className="form auth">
				{/* <h2 className="visually-hidden">Авторизация</h2> */}
				<form className="form-auth">
					<div className="form-group">
						{/* <label className="visually-hidden" for="exampleInputEmail1">E-mail</label> */}
						<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
					</div>
					<div className="form-group">
						{/* <label className="visually-hidden" for="exampleInputPassword1">Password</label> */}
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" />
					</div>
					{/* при нажатии кнопки 'регистрация' добавляется это поле и кнопка "сохранить",кнопки "войти" и "регистрация" скрываются */}
					{/* <div className="form-group visually-hidden">
						<label className="visually-hidden" for="exampleInputPassword2">Password</label>
						<input type="password" className="form-control" id="exampleInputPassword2" placeholder="Enter the password again" />
					</div> */}
					<div className="form-group form-check">
						<input type="checkbox" className="form-check-input" id="exampleCheck1" />
						<label className="form-check-label" for="exampleCheck1">Запомнить пароль</label>
					</div>
					<div className="user-navigation">
						<ul className="list-hiden user-navigation">
							<li className="user-navigation-item mr-3">
                <button type="submit" className="btn btn-secondary">Войти</button>
              </li>
							<li className="user-navigation-item">
                <Link 
                  className="btn btn-secondary" 
                  to="/registration">
                    Регистрация
                </Link>
              </li>
							{/* <li><button type="submit" classNameName="btn btn-secondary visually-hidden">Сохранить</button></li> */}
						</ul>
					</div>
				</form>
			</section>
  );
};

export default LoginForm;