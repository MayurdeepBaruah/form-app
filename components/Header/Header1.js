import Dropdown from "./Dropdown.js";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
function Header1(){
    const pages=["Men's","Women's","Kid's"]
    return(
            <div className="row">
                <div className="column4">
                    Fashi.
                </div>
                <div className="column4">
                    <div className="row">
                        <div className="column4">
                            
                            <Dropdown pages1={pages} prop2={"Mayurdeep"}/>
                        </div>
                        <div className="column4">
                            <input type="text" name="search" id="search" placeholder="What do you need ?"/>
                        </div>
                        <div className="column2">
                            <SearchIcon/>
                        </div>
                    </div>
                </div>
                <div className="column4">
                <div className="row">
                        <div className="column6">
                             <FavoriteIcon/><ShoppingCartIcon />
                        </div>
                        <div className="column6">
                            <Button variant="outlined">LOG IN</Button>
                        </div>
                    </div>
                </div>
            </div>
  
    )
}
export default Header1;