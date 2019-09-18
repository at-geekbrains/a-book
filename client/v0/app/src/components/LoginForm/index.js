import React from 'react';
import { Link } from 'react-router-dom';

import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';

import './LoginForm.css';

const LoginFormik = ({ 
	values, 
	setSubmitting,
	errors, 
	touched 
}) => {
  return (
      <section className="form auth">
				<Form 
					className="form-auth">
					<div className="form-group mb-4">
						<Field 
							name="email"
							type="email"
							className={classNames("form-control-book", {'form-control-required' : touched.email && errors.email})}
							// className="form-control" 
							placeholder="Enter Email" />
							{touched.email && errors.email && <p className="form-group-text-required">{errors.email}</p>}
					</div>
					<div className="form-group mb-4">
						<Field 
							name="password"
							type="password" 
							className={classNames("form-control-book", {'form-control-required' : touched.password && errors.password})} 
							placeholder="Enter password" />
							{touched.password && errors.password && <p className="form-group-text-required">{errors.password}</p>}
					</div>
					<div className="form-group form-check">
						<label className="form-check-label" for="exampleCheck1">
							<Field 
								type="checkbox"
								name="newsletter"
								checked={values.newsletter} 
								className="form-check-input" 
								id="exampleCheck1" />
							Запомнить пароль
						</label>
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
						</ul>
					</div>
				</Form>
			</section>
  );
};

const LoginForm = withFormik({
	mapPropsToValues( {email, password, newsletter} ) {
		return {
			email: email || '',
			password: password || '',
			newsletter: newsletter || false,
		}
	},
	validationSchema: Yup.object().shape({
		email: Yup.string().email('Ошибка').required('Введите email'),
		password: Yup.string().min(9, "Не меньше 9 симвлов!").required('Введите пароль')
	}),
	handleSubmit: (values, {setSubmitting}) => {
		console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(LoginFormik);

export default LoginForm;
