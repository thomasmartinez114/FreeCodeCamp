import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then(response => {
        this.setState({ exercises: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then(res => console.log(res.data));

    // filter will return elements if the element does not equal the element being deleted. So it will show undeleted ones
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    });
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className='table'>
          <thead className="thead-lig">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
  </div>
)
    );
  }
}
