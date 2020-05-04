import React from "react";
import axios from "axios";
import { Form, FormGroup, Input } from "reactstrap";
import { Card, CardBody } from "reactstrap";
import { Button } from "reactstrap";
import Box from "@material-ui/core/Box";

class NewEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      time: "",
      venue: "",
      audience: "",
      topic: "",
    };
  }

  onchange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onsubmit = (e) => {
    e.preventDefault();
    var eventData = JSON.stringify(this.state);
    axios
      .post("http://127.0.0.1:5000/application_generator", eventData)
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
                <Input
                  type="text"
                  name="date"
                  placeholder="Event Date"
                  value={this.state.date}
                  onChange={this.onchange}
                />
                <br></br>
                <Input
                  type="text"
                  name="time"
                  placeholder="Event Time"
                  value={this.state.time}
                  onChange={this.onchange}
                />
                <br></br>
                <Input
                  type="text"
                  name="venue"
                  placeholder="Event Venue"
                  value={this.state.venue}
                  onChange={this.onchange}
                />
                <br></br>
                <Input
                  type="text"
                  name="audience"
                  placeholder="Event Audience"
                  value={this.state.audience}
                  onChange={this.onchange}
                />
                <br></br>
                <Input
                  type="text"
                  name="topic"
                  placeholder="Event Topic"
                  value={this.state.topic}
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
