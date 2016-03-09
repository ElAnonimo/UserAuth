<h1>
<a href="http://sailsjs.org"><img alt="Sails.js logo" src="http://balderdashy.github.io/sails/images/logo.png" title="Sails.js"/></a>
</h1>

### [Website](http://sailsjs.org/)  &nbsp; [Getting Started](http://sailsjs.org/get-started) &nbsp;  [Docs](http://sailsjs.org/documentation)  &nbsp; [Submit Issue](https://github.com/balderdashy/sails/blob/master/README.md#issue-submission)

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/balderdashy/sails?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM version](https://badge.fury.io/js/sails.svg)](http://badge.fury.io/js/sails)

# Описание
Система создания и аутентификации пользователя, созданная с использованием Sails. Система использует полный MEAN стек. Аутентификация и шифрование по алгоритму BCrypt осуществлены при помощи модуля Node-machine Passwords.

### Технологии
* Sails
* MongoDB на облачной БД MongoLab
* Node-machine Passwords
* Node-machine Gravatar
* CSS
* Foundation
* Angular-toastr для всплывающих сообщений
* Grunt

### Установка модулей
`npm install`

Для соединения с MongoDB установите модуль sails-mongo: `npm install sails-mongo --save`

### Запуск приложения
`sails lift`

В меню выберите опцию 2.

Приложение будет доступно по адресу `http://localhost:1337`
