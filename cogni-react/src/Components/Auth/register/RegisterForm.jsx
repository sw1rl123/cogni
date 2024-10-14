import React from 'react';
import { useState, useEffect } from 'react';
import { ReactComponent as LogoSvg } from './img/logo.svg';
import './RegisterForm.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function RegisterForm() {
    const [formStep, setFormStep] = React.useState(0);

    const completeFormStep = () => {
        setFormStep(cur => cur + 1)
    };

  return (
    <div className='login__wrapper'>
        <div className='login__blur'>
            <div className='login__ball'></div>
            <div className='login__ball'></div>
            <div className='login__ball'></div>
            <div className='login__ball'></div>
        </div>
        
        <form action="" className='login__form loginform'>
            {formStep === 0 &&  (<section>
                <h1 className='loginform__header'>Регистрация</h1>
                <input type="text" placeholder='Имя Фамилия' className='loginform__input'/>
                <input type="text" placeholder='Введите e-mail' className='loginform__input'/>
                <input type="password" placeholder='Придумайте пароль' className='loginform__input'/>
                <input type="password" placeholder='Подтвердите пароль' className='loginform__input'/>
                <label for="agreeRadio" className='loginform__label'><input type="radio" className='loginform__radio' id="agreeRadio"/><p>Согласен на обработку персональных данных <a href="" className='loginform__agree'>Пользовательское соглашение</a></p></label>
                <button onClick={completeFormStep} type="button" className='loginform__button'>Продолжить</button>
                <p className='loginform__desc'>Уже есть аккаунт?</p>
                <Link to="/login" className='loginform__link color-green'>Войти</Link>
            </section>
            )}

            {formStep === 1 &&  (<section>
                <h1 className='loginform__header'>Введите свой тип <br/> личности</h1>
                <input type="text" placeholder='Ваш MBTI' className='loginform__input'/>
                <Link to="/profile" type="button" className='loginform__button'>Зарегистрироваться</Link>
                <p className='loginform__text'>или</p>
                <button className='loginform__button-other'>Пройти тест <br/> и узнать свой тип</button>
            </section>
            )}
        </form>
       
        <div className='login__info info'>
            <LogoSvg className='info__logo'/>
            <p className='info__logoText'>COGNI</p>
            <a href="" className='info__link'>О сервисе</a>
        </div>
    </div>
  );
};

export default RegisterForm;
