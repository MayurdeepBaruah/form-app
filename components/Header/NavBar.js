import Dropdown from "./Dropdown"
function NavBar(){
    const navbar=["HOME","BLOG","SHOP","CONTACT"]
    const pages=["Shopping Cart","Checkout","FAQ","Register","Login"]
    return(
        <div className="row navbar">
            {
            navbar.map(function(a,b){
                return <div className="column2">
                {a}
            </div>
            })
            
        }
        <div className="column2">
            
               <Dropdown pages1={pages}/> 
            </div>
        </div>
        
           
    )
}
export default NavBar