import 'react-native-gesture-handler';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {Navigator} from './presentation/navigator/Navigator';
import {PropsWithChildren, useContext} from 'react';
import {ThemeContext, ThemeProvider} from './presentation/context/ThemeContext';

const AppState = ({children}: PropsWithChildren) => {
  // const {  } = useContext(ThemeContext)

  return (
    <NavigationContainer theme={DarkTheme}>
      <ThemeProvider>{children}</ThemeProvider>
    </NavigationContainer>
  );
};

export const ComponentsApp = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};
