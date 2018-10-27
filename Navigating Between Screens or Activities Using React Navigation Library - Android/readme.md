#Navigating Between Screens or Activities Using React Navigation Library - Android

Post Link : https://www.skptricks.com/2018/10/navigating-between-screens-or-activity-in-react-navigation.html

This tutorial explains how to move or navigate from one screen to another using React Navigation Library in react native application. In a web browser, you can link to different pages using an anchor (<a>) tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack.

Similarly, React Navigation's stack navigator provides a way for your app to transition between screens and manage navigation history.React Navigation is that React Navigation's stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack.

Before we start the tutorial, we need to aware of some important function, which we required during the page navigation from one screen to another. So Lets get started :

createStackNavigator  : createStackNavigator is a function that takes a route configuration object and an options object and returns a React component. Basically here we are maintaining the route information for different screen or activity.
navigation prop : The navigation prop is available to all screen components, that helps for screen navigation.
this.props.navigation.navigate('RouteName') : pushes a new route to the stack navigator if it's not already in the stack, otherwise it jumps to that screen and pops the already open screen.
this.props.navigation.push('RouteName') : pushes a new route to the stack navigator even if already present in the stack.
this.props.navigation.goBack() : when you switch to new window using stack navigator, then it will automatically enabled the back button in header bar.(On Android, the hardware back button just works as expected.) Also you can do the same programmatically by calling the goBack() function.
this.props.navigation.popToTop() : This function helps to switch back to the home or first screen of your react native application.

<a href="https://www.skptricks.com/2018/10/navigating-between-screens-or-activity-in-react-navigation.html" > Navigating Between Screens or Activities Using React Navigation Library - Android </a>

<img src="https://4.bp.blogspot.com/-B9MF3Fh4MLk/W9SGCQfXp6I/AAAAAAAACEE/8RVlcQsDkoAmLiy1PYhd74zoWHENGI_iACLcBGAs/s640/na.png" />
