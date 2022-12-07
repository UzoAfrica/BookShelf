import React from 'react';
import { ThemeContext } from '../Context/ThemeContext';

function Book(){
    return (
    <ThemeContext.Consumer>
        {
            (contextTheme)=>{
                const {isDarkMood, light, dark} = contextTheme;
                const theme = isDarkMood ? dark: light
                return(
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-items">
                            <a href="#" className= " portfolio-link" dark-toogle= 'modal'>
                                <div className="portfolio-hover" style={{
                                    backgroundColor:theme.hover
                                }}
                                
                                >
                                    <div className= "portfolio-hover-content">
                                        <i className="fas fas-plus faaa-3x"></i>{" "}

                                    </div>
                                </div>
                                <img className = "img-fluid w-100" src="" alt="Book Image" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">
                                    {this.props.title}
                                </div>
                                <div className="portfolio-caption-subheading text-muted">
                                    {this.props.author}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    </ThemeContext.Consumer>
    );
}

export default Book;