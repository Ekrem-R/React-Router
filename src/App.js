import React from 'react';
import PersonelList from './components/PersonelList';
import SearchBar from './components/SearchBar';
import AddPersonel from './components/AddPersonel';
//import EditMovie from './EditMovie';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {

    state = {
        employees: [],
        searchQuery: ""
    }

    componentDidMount() {
        this.getEmployees();
    }

    async getEmployees() {
        const response = await axios.get("http://localhost:3002/comments");
        this.setState({ employees: response.data })
    }

   

    


    // DELETE MOVIE
   

    // SEARCH MOVIE
    searchPersonel = (event) => {
        this.setState({ searchQuery: event.target.value })
    }


    // ADD MOVIE
    addPersonel = async (employee) => {
        await axios.post(`http://localhost:3002/employees/`, employee)
        this.setState(state => ({
            employees: state.employees.concat([employee])
        }))

        this.getEmployees();
    }

      

    render() {

        let filteredEmployees = this.state.employees.filter(
            (employee) => {
                return employee.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        ).sort((a, b) => {
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
        });

        return (
            <Router>

                <div className="container">

                    <Switch>


                        <Route path="/" exact render={() => (
                            <React.Fragment>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <SearchBar searchPersonelProp={this.searchPersonel} />
                                    </div>
                                </div>


                                <PersonelList
                                    employees={filteredEmployees}
                                   

                                />
                            </React.Fragment>
                        )}>

                        </Route>

                        <Route path="/add" render={({ history }) => (

                            <AddPersonel

                                onAddPersonel={(employee) => {
                                    this.addPersonel(employee)
                                    history.push("/")
                                }
                                }

                            />

                        )}>

                        </Route>

                      

                    </Switch>
                </div>

            </Router>
        )

    }


}

export default App;