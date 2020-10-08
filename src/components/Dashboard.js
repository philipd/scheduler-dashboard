import React, { Component } from "react";
import Loading from "components/Loading";
import Panel from "components/Panel";
import classnames from "classnames";

class Dashboard extends Component {
  state = {
    loading: false,
    focused: null,
  };

  selectPanel(id) {
    this.setState(prev => ({focused: prev.focused !== null ? null : id }));
  }

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
    });

    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <main className={dashboardClasses}>
        {data
          .filter((x) => this.state.focused ? x.id === this.state.focused : true)
          .map((x) => (
            <Panel onSelect={event => this.selectPanel(x.id)} key={x.id} label={x.label} value={x.value} />
          ))}
      </main>
    );
  }
}

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6,
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm",
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday",
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3",
  },
];

export default Dashboard;
