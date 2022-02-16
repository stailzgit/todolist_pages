import React from 'react';
import style from "./About.module.css"

const About = () => {
    return (
        <div className={style.AboutWrap}>
            <div className={style.About}>
                <h1 className={style.Header}>Тестовое задание Todolist</h1>

                <div className={style.Description}>
                    <ul className={style.DescriptionList}>
                        <li>Создание, изменение и удаление todos (изменение по двойному клику по тексту todo)</li>
                        <li>Данные для списка запрашиваются с удаленного ресурса</li>
                        <li>NavBar со ссылками на главную, todolist и лого</li>
                        <li>Реализована пагинация между страницами без перезагрузки</li>
                        <li>Использованы: React, Redux, TypeScript, React Router, Axios</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
