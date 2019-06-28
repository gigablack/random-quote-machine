import  React, {Component} from 'react'
import {Typography, Grid,Button} from '@material-ui/core'
import axios from 'axios'

class QuoteBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            quote: {
                text: '',
                author: ''
            }
        }
    }

    componentDidMount(){
        this.fetchQuote()
    }

    componentDidUpdate(){
        
    }

    fetchQuote = async () => {
        try{
            this.setState({
                quote: {
                    text: '',
                    author: ''
                }
            })
            const newQuote = await axios.post('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
            this.setState({
                quote: {
                    text: newQuote.data.quoteText,
                    author: newQuote.data.quoteAuthor
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }
    render(){
        const { author, text} = this.state.quote
        return (
            <div id='quote-box' style={{height:'100%'}}>
                <Grid container justify='space-evenly' direction='row' alignItems='center' style={{height:'inherit'}}>
                    <Grid item xs={12} style={{marginTop:50}}>
                        <Typography variant='h6' style={{marginLeft:50,marginRight:50}} id='text'>
                            {text ? text : 'loading Quote...'}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='overline' align='right' style={{marginRight:50}} id='author'>
                            {author ? author : 'loading Author...'}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                       <Grid container>
                        <Grid item xs={6}>
                            <Grid container justify='space-around'>
                                <Grid item xs={4}>
                                   <a id='tweet-quote' href='https://twitter.com/intent/tweet' target='_blank' rel="noopener noreferrer" style={{textDecoration:'none'}}>
                                    <Button variant='contained' color='primary'>
                                        <i className='fab fa-twitter fa-2x'></i>
                                    </Button>
                                   </a>
                                </Grid>
                                <Grid item xs={4}>
                                    <a href='https://github.com/gigablack' target='_blank' rel="noopener noreferrer" style={{textDecoration:'none'}}>
                                        <Button variant='contained' color='primary'>
                                            <i className='fab fa-github-alt fa-2x'></i>
                                        </Button>
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container justify='flex-end'>
                                <Grid item xs={5}>
                                    <Button color='primary' variant='contained' id='new-quote' onClick={this.fetchQuote}>
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
