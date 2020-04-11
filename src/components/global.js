import React, {Component} from 'react';
import Gallery from './gallery'
import { library } from '@fortawesome/fontawesome-svg-core';
import {FormGroup, FormControl, InputGroup} from 'react-bootstrap';
import { faCheckSquare, faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';

class Global extends Component{

    constructor(props){
        super(props);
        this.state = {
            query:'',
            items: []
        }
    }

    search(){
        const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`;
        fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            let {items} = json;
            this.setState({items});
        });
    }

   render(){
       return(
       <div className="Global">
           <h2>Books Explorer</h2>
           <FormGroup>
               <InputGroup>
                    <FormControl 
                    type="text" 
                    placeholder="Search For A Book. (By Name, ISBN, Author)" 
                    onChange={event => this.setState({query: event.target.value})} 
                    onKeyPress={event => {
                        if (event.key === 'Enter'){
                            this.search();
                        }
                    }}
                    />
                    <InputGroup.Append onClick={() => this.search()}>
                    <InputGroup.Text className="cursor">Search</InputGroup.Text>
                    </InputGroup.Append>
               </InputGroup>
           </FormGroup>
           <Gallery items={this.state.items}/>
       </div>
       
       )
   }
}

export default Global;