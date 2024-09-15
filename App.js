import React from 'react';
import { Provider } from 'react-redux';
import DrawerNavigator from './components/routes';
import Store from './screens/store'; // Kiểm tra nếu Store.js nằm trong thư mục screens

const App = () => {
    return (
        <Provider store={Store}>
            <DrawerNavigator />
        </Provider>
    );
}

export default App;
