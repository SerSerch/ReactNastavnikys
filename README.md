# ReactNastavnikys

## Методички
* Шпаргалка ES6 - [ссылка](https://docs.google.com/document/d/1y3cIC_yyq7MzPszybyTZm0P6crHud8PuSPXRAw2IOIo/edit?usp=sharing)
* Настройка среды разработки - [ссылка](https://docs.google.com/document/d/1zIRR2FaFLp2UUBXF81RHDnEyZAbBtkgWg5ZgIFrH4Bg/edit?usp=sharing)

## Первый запуск
* Для установки всех модулей запустите в командной строке или терминале `yarn` или `npm i`
* Для старта локального сервера из папки `src` запустите `npm start`
* Для старта локального сервера из папки `lesson1` запустите `npm run path lesson1`
* Для создания готового билда из папки `src` запустите `npm run build`
* Для создания готового билда из папки `lesson1` запустите `npm run buildPath lesson1`
* Для запуска `json-server` с БД `db.json` запустите в отдельном терминале `npm run json`
  (сервер будет доступен по адресу `localhost:3000` либо через настроенный webpack proxy `localhost:8080/api`)
* Все вышеперечисленные команды были созданы в файле `package.json`