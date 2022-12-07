import React, { Component, createContext } from 'react';

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
    state = {
        isDarkMood : true,
        dark: {
            bg : "#222222",
            color: "rgba(239, 83, 80, 1)",
            hover: "rgba(239, 83, 80, 1)",

        },
        light :{
            bg: "#ecf0f1",
            color: "#222222",
            hover: "rgba(255, 193, , 0.8)",
        },
    };
        changeTheme = ()=>{
            this.setState({
                isDarkMood: !this.state.isDarkMood,
            });
       
    }
    render() {
        return 
            <div> 
                <ThemeContextProvider 
                value= {{...this.state , changeTheme: this.changeTheme}}
                >
                    {this.props.children}
                </ThemeContextProvider>
            </div>;
    }
}

export default ThemeContextProvider;