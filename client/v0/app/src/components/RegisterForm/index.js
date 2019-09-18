import React from 'react';
import { Link } from 'react-router-dom';

import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';

import './RegisterForm.css';

const RegisterFormik = ({ 
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
				<div className="form-group mb-4">
					<Field 
						// validate={confirmPassword}
						name="confirmPassword"
						type="password" 
						className={classNames("form-control-book", {'form-control-required' : touched.confirmPassword && errors.confirmPassword })} 
						placeholder="Enter password" />
						{touched.confirmPassword && errors.confirmPassword && <p className="form-group-text-required">{errors.confirmPassword}</p>}
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
						<li className="user-navigation-item mr-2">
							<Link 
								to="/login"
								className="btn btn-secondary">
									Войти
							</Link>
						</li>
						<li className="user-navigation-item mr-2">
							<Link 
								className="btn btn-secondary" 
								to="/registration">
									Регистрация
							</Link>
						</li>
						<li className="user-navigation-item">
							<button 
								type="submit" 
								className="btn btn-secondary">
									Сохранить
							</button>
						</li>
					</ul>
				</div>
			</Form>
		</section>
  );
};

const RegisterForm = withFormik({
	mapPropsToValues( {email, password, confirmPassword, newsletter} ) {
		return {
			email: email || '',
			password: password || '',
			confirmPassword: confirmPassword || '',
			newsletter: newsletter || false,
		}
	},
	validationSchema: Yup.object().shape({
		email: Yup.string().email('Ошибка').required('Введите email'),
		password: Yup.string()
								 .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, 'Пароль должен содержаит латинские буквы и цифры "Dd1')	
								 .min(9, "Не меньше 9 симвлов!")
								 .required('Введите пароль'),
		confirmPassword: Yup.string().required('Пароли не совпадают')//доделать надо
	}),
	handleSubmit: (values, {setSubmitting}) => {
		console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(RegisterFormik);

export default RegisterForm;