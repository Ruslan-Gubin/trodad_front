
ENV
***
BACKEND_URL=https://backend
PORT_PROD=3101
PORT_DEV=3001
LOADER=babel || LOADER=ts
***

ПЕРЕМЕННЫЕ .env
***
1.добавляем в .env BACKEND_URL=https://backend...
2.добавляем в функцию  ./config/build/variables/
3.декларируем переменную в ./global.d.ts
в приложение получить console.log(BACKEND_URL)
***

ШРИФТЫ
***
@font-face {
  font-family: 'Geometria';
  font-style: normal;
  font-weight: normal;
  src:
    url('../../public/fonts/Geometria-Bold.ttf') format('ttf'),
    url('../../public/fonts/Geometria-Bold.ttf') format('woff');
}

body {
  font-family: Geometria;
}
***

favicon.ico
***
просто добавить файл favicon.ico в ./public
***

IMAGES
***
import defphoto from '../../public/assets/defphoto.jpg';
<img src={defphoto} alt="Deft foto" />
***

SVG
***
import CloseSvs from '../../public/assets/close.svg';
<CloseSvs fill='red' width={50} height={50} color='black' opacity={0.8} />
***

React
***
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.3"
***

Store  
***
    "zustand": "^4.5.2"

создание стора:
const initState: UserInitState = {
  users: [],
  currentUser: null,
  currenUsertId: null,
  currentCount: 0,
  loading: false,
  roles: [],
  loadingSubmit: false,
};
export const userStore = createStore({ initState });

управление стором
userStore.setState({ currentUser });  положить
const userList = userStore.getState().users;   получить

в компоненте подписываемся на изменения:
const users = userStore((state) => state.users);

***


React material пакеты 
***
    "@emotion/react": "^11.11.3",
    "@emotion/styled": "^11.11.0",
    "@mui/material": "^5.15.6",
***

Остальные вспомогательные пакеты
 ***
    "react-email-editor": "^1.7.9",   редактор почты
 ***


***
пример использования фильтра для таблицы
   const filterOptions: FilterOption[] = [
        { label: 'Почта', field: 'email', type: 'text' },
        { label: 'Дата до', field: 'dateTo', type: 'date' },
        { label: 'Custom select', field: 'any_select', type: 'select',
            selectOption: [
                { value: 'value1', label: 'label1' },
                { value: 'value2', label: 'label2' },
                { value: 'value3', label: 'label3' },
            ]
        },
    ]

    <TableHeaderActions 
    children={
    <FilterTable
    onSubminSearch={onSubminSearch}
    onCancelSearch={onCancelSearch}
    filterOptions={filterOptions}
    />  
***
