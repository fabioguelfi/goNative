import { StackNavigator, TabNavigator } from 'react-navigation';
import React from 'react';
import Welcome from './pages/welcome';
import Repositories from './pages/repositories';
import Organizations from './pages/organizations';
import HeaderRight from './components/headerRight';
import { metrics } from './styles';

const createNavigator = (isLogged = false) => StackNavigator({
  Welcome: { screen: Welcome },
  User: {
    screen: TabNavigator({
      Repositories: { screen: Repositories },
      Organizations: { screen: Organizations },
    }),
  },
}, {
    initialRouteName: isLogged ? 'User' : 'Welcome',
    navigationOptions: {
      headerStyle: {
        paddingHorizontal: metrics.basePadding,
      },
      headerRight: <HeaderRight />
    }
  });

export default createNavigator;