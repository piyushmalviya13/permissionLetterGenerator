import React from "react";
import axios from "axios";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Card, CardBody } from "reactstrap";
import { Button } from "reactstrap";
import Box from "@material-ui/core/Box";
import DatePicker from "react-datepicker";
import Row from "react-bootstrap/Row";

class NewEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      venue: "",
      audience: "",
      topic: "",
      requirement: false,
      materialsRequired: "",
    };
  }

  onchange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = (date) => {
    this.setState({
      date: date,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      requirement: !this.requirement,
    });
  };
  onsubmit = (e) => {
    e.preventDefault();

    //console.log(this.state);
    axios
      .post("http://127.0.0.1:5000/application_generator", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <Form>
              <FormGroup>
                <Row>
                  <Box pl={2} pt={1} pr={4}>
                    <h6>
                      <b>Event Date and Time</b>
                    </h6>
                  </Box>

                  <DatePicker
                    selected={this.state.date}
                    onChange={(date) => this.handleChange(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                  />
                </Row>

                <br></br>

                <Input
                  type="text"
                  name="venue"
                  placeholder="Enter Venue"
                  value={this.state.venue}
                  onChange={this.onchange}
                />
                <br></br>
                <Input
                  type="text"
                  name="audience"
                  placeholder="Enter Audience"
                  value={this.state.audience}
                  onChange={this.onchange}
                />
                <br></br>
                <Input
                  type="text"
                  name="topic"
                  placeholder="Enter Topic"
                  value={this.state.topic}
                  onChange={this.onchange}
                />
                <br></br>
                <Label check>
                  <Input type="checkbox" onChange={this.handleCheckbox} /> Extra
                  Requirements
                </Label>
                <br></br>
                <br></br>
                <Input
                  type="text"
                  name="materialsRequired"
                  placeholder="Enter Requirements"
                  value={this.state.materialsRequired}
                  onChange={this.onchange}
                />
                <br></br>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
        <br></br>

        <Box mx="auto" p={1}>
          <Button size="lg" color="secondary" onClick={this.onsubmit}>
            Add Task
          </Button>
        </Box>
      </div>
    );
  }
}

export default NewEvent;
