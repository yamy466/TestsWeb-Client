import { Component } from "react";

class QuestionTypes extends Component {
    state = {Temp: ""}

    render() {
        return (
        <div>
            <form>
                <select>
                    <option value="Open Question"/>
                </select>
            </form>
        </div>
        );
    }
}
export default QuestionTypes