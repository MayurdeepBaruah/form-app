import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
function ProductCategory(){
    const categories=[{"label":"Men's","image":"16.webp"},{"label":"Women's","image":"17.webp"},{"label":"Kid's","image":"19.webp"}]
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
        <div className="container">
            <div className="row">
                <div className="column4">
                <Card sx={{ maxWidth: 345 }}>
            <CardHeader
            />
            <div className='category-container'>
            {categories.map(function(category,b){
                return <CardMedia
                  component="img"
                  height="194"
                  image={"/images/"+ category.image}
                  alt={category.image}
                  key={b}
                />
              })}
            </div>
           <CardContent>
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                </CardContent>
            </Collapse>
            </Card>
                </div>
                <div className="column4">
                    wwfawdawd
                </div>
                <div className="column4">
                    awdawdawda
                    </div>
            </div>
        </div>
    )
}
export default ProductCategory;