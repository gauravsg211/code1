import React ,{Component} from 'react';
import './Toolbar.css'
class toolbar extends Component{
    render()
    {
        return(
        <header className="toolbar">
            <nav className="toolbar_navigation">
            <div></div>
            <div className="toolbar_logo"><a href="/">The Logo</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">

                <ul>
                    <li><a href="/">hex</a></li>
                    <li><a href="/">User</a></li>
                    <li><a href="/">Policy</a></li>
                    <li><a href="/">Life style</a></li>
                    
                    

                
                </ul>
                
               

            </div>
            <input type="search" id="searchInput" name="searchInput" class="SearchInput-inline_6kayb3 input-search" value="Seach google" autocomplete="off" data-locator="searchbar" aria-label="" aria-owns="searchResultItemsContainer"></input>
            </nav>
            </header>
            

        );
    }
} 
export default toolbar;