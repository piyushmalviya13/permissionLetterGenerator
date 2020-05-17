import React from "react";
import axios from "axios";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Card, CardBody } from "reactstrap";
import { Button } from "reactstrap";
import Box from "@material-ui/core/Box";
import DatePicker from "react-datepicker";
import Row from "react-bootstrap/Row";
import TimePicker from "react-time-picker";
import Alert from "react-bootstrap/Alert";

class NewEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      eventDate: new Date(),
      time: "10:00",
      venue: "",
      audience: "",
      topic: "",
      requirement: false,
      materialsRequired: "",
      email: "",
      message: "",
      show: false,
    };
  }

  onTimeChange = (time) => this.setState({ time });

  onchange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDateChange = (date) => {
    this.setState({
      date: date,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      requirement: !this.requirement,
    });
  };

  convertDate = (val) => {
    var dd = val.getDate();
    var mm = val.getMonth() + 1;
    var yy = val.getFullYear();
    //console.log(dd + "/" + mm + "/" + yy);
    return dd + "/" + mm + "/" + yy;
  };

  onsubmit = (e) => {
    e.preventDefault();

    const convertedDate = this.convertDate(this.state.eventDate);

    //console.log(this.state);
    var data = this.state;
    //console.log(data);
    data.date = convertedDate;
    delete data["eventDate"];
    delete data["message"];
    //var dataJson = JSON.stringify(data);
    console.log(data);
    axios
      .post(
        "http://applicationsgsits.pythonanywhere.com/application_generator",
        data
      )
      .then((response) => {
        console.log(response);
        this.setState({
          message: "Application generated",
          show: true,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          message: "Error",
        });
      });
  };

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <Alert show={this.state.show} variant="success">
              <Alert.Heading>{this.state.message}</Alert.Heading>
            </Alert>
            <Form>
              <FormGroup>
                <Row>
                  <Box pl={2} pt={1} pr={4}>
                    <h6>
                      <b>Event Date</b>
                    </h6>
                  </Box>

                  <DatePicker
                    selected={this.state.eventDate}
                    onChange={(eventDate) => this.handleDateChange(eventDate)}
                    dateFormat="MMMM d, yyyy"
                  />
                </Row>

                <br></br>

                <Row>
                  <Box pl={2} pt={1} pr={4}>
                    <h6>
                      <b>Event Time</b>
                    </h6>
                  </Box>

                  <TimePicker
                    onChange={this.onTimeChange}
                    value={this.state.time}
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
                {/* <Label check>
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
                <br></br> */}
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Email ID"
                  value={this.state.email}
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
            Generate Application
          </Button>
        </Box>
      </div>
    );
  }
}

export default NewEvent;
