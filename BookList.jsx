import React from "react";
import Book from "./Book";
import { ThemeContext } from "../Context/ThemeContext";
import { BookContext } from "../Context/ContentContext";

class BookList extends Component{
    render(){
        return(
            <ThemeContext.Consumer>
                {(contextTheme)=>(
                        <BookContext.Consumer>
                            {(contextBook)=>{
                                const {Books} = contextBook;
                                const {changeTheme, isDarkMood, dark, light} = contextTheme;
                                const theme = isDarkMood? dark: light;
                                return(
                                    <section
                                    className = "page-section"
                                    style= {{
                                        backgroundColor: theme.bg,
                                        color: theme.color,
                                    }}
                                    id ="portfolio"
                                    >
                                        < div className ="container">
                                        <div className="text-right">
                                            <button className="btn btn-danger" onClick={changeTheme} >
                                                Change Theme {" "}
                                            </button>
                                        </div>

                                        <div className= "text-center">
                                            <h2 className="section-heading text-Uppercase">
                                                BookShelf
                                            </h2>
                                            <h3>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                 Autem, omnis sit. Et dolore fuga dicta voluptas!
                                            </h3>
                                            </div>
                                            <div className="row">
                                                <Book />
                                        </div>
                                        </div>
                                    </section>
                                );
                            }}
                        </BookContext.Consumer>
                    )}
            </ThemeContext.Consumer>
        );
    }
}