import Header1 from "../components/Header/Header1.js"
import NavBar  from "../components/Header/NavBar.js"
import ProductCategory from "../components/ProductCategory/ProductCategory.js" 
import ProductCategoryMen from "../components/ProductCategory/ProductCategoryMen.js"
import SpecialOffer from "../components/SpecialOffer/SpecialOffer.js"
import ProductCategoryWomen from "../components/ProductCategory/ProductCategoryWomen.js"
import BlogsHeader from "../components/Blogs/BlogsHeader.js"
function MyApp(){
    return(
        <div className="container">
            <Header1/>
            <NavBar/>
            <ProductCategory/>
            <ProductCategoryMen/>
            <SpecialOffer/>
            <ProductCategoryWomen/>
            <BlogsHeader/>
        </div>
    )
}
export default MyApp