import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings170506Navigator from '../features/Settings170506/navigator';
import UserProfile170499Navigator from '../features/UserProfile170499/navigator';
import Settings170498Navigator from '../features/Settings170498/navigator';
import Settings170496Navigator from '../features/Settings170496/navigator';
import SignIn2170494Navigator from '../features/SignIn2170494/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings170506: { screen: Settings170506Navigator },
UserProfile170499: { screen: UserProfile170499Navigator },
Settings170498: { screen: Settings170498Navigator },
Settings170496: { screen: Settings170496Navigator },
SignIn2170494: { screen: SignIn2170494Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
