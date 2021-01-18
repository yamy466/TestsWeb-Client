import { Component } from "react";

// jsx class component
class QuestionsForm extends Component {
  state = { title: "", errors: {}, questionBody: "" };

  titleChanged = (e) => {
    this.setState({ title: e.currentTarget.value, errors: {} });
  };

  bodyChanged = (e) => {
    this.setState({questionBody: e.currentTarget.value, errors: {}})
  }

  submitQuestion = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    const questionToAdd = { Title: this.state.title, questionBody: this.state.questionBody };
    this.props.onAddQuestion(questionToAdd);
    this.setState({ title: "", questionBody: ""});
  };

  validate = () => {
    const errors = {};
    if (this.state.title.trim() === "") errors.title = "Title is required.";
    if (this.state.questionBody.trim() === "") errors.content = "Content is required.";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  render() {
    const { title, errors, questionBody } = this.state;
    return (
      <div>
        <form onSubmit={this.submitQuestion}>
          <div className="form-group space">
            <label htmlFor="title">Title: </label>
            <input
              value={title}
              onChange={this.titleChanged}
              id="title"
              type="text"
              className="input form-control"
            />
            {errors.title && (
              <div className="alert alert-danger">{errors.title}</div>
            )}
          </div>
          <div className="form-group space">
          <label htmlFor="Content">Content: </label>
            <textarea value={questionBody} 
            onChange={this.bodyChanged}
            id="Content"
            type="text"/>
            {errors.content && (
              <div className="alert alert-danger">{errors.content}</div>
            )}
          </div>
          <button className="btn btn-primary btn-sm">Add question</button>
        </form>
      </div>
    );
  }
}

export default QuestionsForm;
