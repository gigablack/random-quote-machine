import  React, {Component} from 'react'
import {Typography, Grid,Button,Paper} from '@material-ui/core'
import {} from '@material-ui/icons'

class QuoteBox extends Component {

    render(){
        return (
            <div id='quote-box' style={{height:'100%'}}>
                <Grid container justify='space-evenly' direction='row' alignItems='center' style={{height:'inherit'}}>
                    <Grid item xs={12} style={{marginTop:50}}>
                        <Typography variant='h6' style={{marginLeft:50,marginRight:50}} id='text'>
                            If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='overline' align='right' style={{marginRight:50}}>
                            Henry David Thoreau
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                       <Grid container>
                        <Grid item xs={6}>
                            <Grid container justify='space-around'>
                                <Grid item xs={4}>
                                    <Button variant='contained' color='primary'>
                                        twitter
                                    </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button variant='contained' color='primary'>
                                        github
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container justify='flex-end'>
                                <Grid item xs={5}>
                                    <Button color='primary' variant='contained'>
                                        New Quote
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                       </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default QuoteBox