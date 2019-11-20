import React from "react";

import Header from "./components/Header";
import FiltersContainer from "./components/FiltersContainer";
import TableContainer from "./components/TableContainer";
import ErrorBox from "./components/ErrorBox";

import API_KEY from "./misc/API_KEY";
import URL from "./misc/URL";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      errorMessage: "",
      trains: [],
      intervalID: 0,
      filters: {
        lineColorFilter: "noFilter",
        carCountFilter: "noFilter",
        serviceTypeFilter: "noFilter"
      }
    };
  }

  componentDidMount() {
    this.trainsFetch();
    // make sure fetch is clean before setInterval
    let intervalID = setInterval(this.trainsFetch, 5000);

    this.setState({
      intervalID
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  trainsFetch = () => {
    let options = {
      headers: {
        api_key: API_KEY
      }
    };

    fetch(URL, options)
      .then(responseObj => responseObj.json())
      .then(trainData => {
        if (trainData.statusCode === 403) {
          clearInterval(this.state.intervalID);
          this.setState({
            errorMessage: trainData.message
          });
        }
        let sortedTrains = trainData["TrainPositions"].sort((a, b) => {
          return parseInt(a.TrainId) - parseInt(b.TrainId);
        });

        this.setState({
          trains: sortedTrains
        });
      });
  };

  handleFilterChange = (newValue, filter) => {
    let stateFiltersCopy = { ...this.state.filters };
    stateFiltersCopy[filter] = newValue;

    this.setState({
      filters: stateFiltersCopy
    });
  };

  filteredTrains = () => {
    const {
      lineColorFilter,
      carCountFilter,
      serviceTypeFilter
    } = this.state.filters;

    let outputArray = [...this.state.trains];

    if (lineColorFilter !== "noFilter") {
      outputArray = outputArray.filter(trainObj => {
        return trainObj.LineCode === lineColorFilter;
      });
    }

    if (carCountFilter !== "noFilter") {
      outputArray = outputArray.filter(trainObj => {
        return trainObj.CarCount === carCountFilter;
      });
    }

    if (serviceTypeFilter !== "noFilter") {
      outputArray = outputArray.filter(trainObj => {
        return trainObj.ServiceType === serviceTypeFilter;
      });
    }

    return outputArray;
  };

  render() {
    return (
      <div>
        <Header />
        <FiltersContainer handleFilterChange={this.handleFilterChange} />
        <TableContainer trains={this.filteredTrains()} />
        {this.state.errorMessage.length > 0 ? (
          <ErrorBox message={this.state.errorMessage} />
        ) : null}
      </div>
    );
  }
}

export default App;
//## As a user I'd like to be able to see all the trains!
//## As a user I'd like to be able to filter by train line color.
//## As a user I'd like to be able to filter by different service types.
//## As a user I'd like to be able to filter by car count.
//## As a user I'd like to be able to visually distinguish trains on different colored lines from each other.
//## As a user I'd like to be able to visually distinguish between different car counts.
//## As a user I'd like to be able to distinguish trains by different service types.
//As a user I'd like to see the page automatically update as the trains' positions update.
