import { StackNavigator, TabNavigator } from 'react-navigation';
import Main from 'pages/main';

const Routes = StackNavigator({
  Main: { screen: Main }
})

export default Routes;
