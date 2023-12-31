import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as noteActions from "../../redux/actions/noteActions";

import alertify from "alertifyjs";
import { Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardGroup,
  Col,
} from "reactstrap";

class NoteList extends Component {
  componentDidMount() {
    this.props.actions.getNotes();
  }
  makeNoteDone = (note) => {
    this.props.actions.makeNoteDone(note);
    alertify.success(note.title + " eklendi.");
  };
  render() {
    console.log("Notes");
    console.log(this.props.notes);
    return (
      <div>
        <h3>
          <Badge color="success">{this.props.currentCategory.name}</Badge>
        </h3>
        <CardGroup>
          {this.props.notes.map((note) => ( // props.notes olarak güncellendi
            <Col xs="4" key={note.id}>
              <Card
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                <CardBody>
                  <CardTitle>
                    <Link to={"/savenote/" + note.id}>{note.title}</Link>
                  </CardTitle>
                  <CardText>{note.content}</CardText>
                  <Button onClick={() => this.makeNoteDone(note)} color="info">
                    Done
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    notes: state.noteListReducer, // state.noteListReducer olarak güncellendi
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getNotes: bindActionCreators(noteActions.getNotes, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
