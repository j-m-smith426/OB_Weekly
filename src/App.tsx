import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardContent, Grid, List, ListItem, Typography } from '@material-ui/core';
import '@fontsource/roboto';

const items = [
  {
    title: 'Item 1',
    description: 'The almighty Item #1, the first of it\'s kind'
  },
  {
    title: 'Item 2',
    description: 'The almighty Item #2, the second of it\'s kind'
  },
  {
    title: 'Item 3',
    description: 'The almighty Item #3, the middle child'
  },{
    title: 'Item 4',
    description: 'The almighty Item #4, living in the back'
  },{
    title: 'Item 5',
    description: 'The almighty Item #5, the last of it\'s kind'
  },
]


function App()
{
  const [selected, setSelected] = useState<number>();

  return (
    <Grid container>
      <Grid item xs={6}>
        <List>
          {items.map((item, index) => (
            <ListItem button selected={selected === index} onClick={() => setSelected(index)} >
            {item.title}
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            {selected !== undefined && (
              <Fragment>
                <Typography variant="h5">
                  {items[selected].title}
                </Typography>
                <Typography variant="subtitle1" >
                  {items[selected].description}
                </Typography>
              </Fragment>
          )}
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
}

export default App;
