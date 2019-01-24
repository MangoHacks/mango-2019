import React from "react";
import { BeatLoader } from "react-spinners";

import Mango from "../shared/Mango";
import { RegBlobTop, RegBlobBottom } from "../Icons";

import registerService from "../../services/register";

class Carnival extends React.Component {
  state = { loading: false };

  submit = async e => {
    e.preventDefault();

    const form = new FormData(e.target);

    let values = [...form.values()];
    let fields = {};
    [...form.keys()].forEach((key, i) => {
      fields[key] = values[i];
    });

    try {
      this.setState({ loading: true });
      await registerService.interview(fields, "carnival");

      this.props.history.push({ pathname: "/interview-response" });
    } catch (e) {
      this.setState({ loading: false, resume: "Upload resume" });
      alert(e);
    }
  };

  render() {
    const { resume, loading } = this.state;

    return (
      <React.Fragment>
        <RegBlobTop className="reg-blob" />
        <RegBlobBottom className="reg-blob-bottom" />
        <Mango className="register-mango" color="white" />
        <div className="registration-card">
          {loading && (
            <div className="loading">
              <h2>Prepping something sweet..</h2>
              <p className="text-muted">One sec 😬..</p>
              <BeatLoader color="#FF4E4E" />
            </div>
          )}

          {loading || (
            <React.Fragment>
              <h1>
                Interview with <br />
                Carnival🚢
              </h1>
              <form onSubmit={this.submit}>
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">
                    Email&nbsp;
                    <span className="text-muted">
                      <small>required</small>
                    </span>
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="form-control"
                    aria-describedby="email"
                    placeholder="foo@bar.com"
                    autoComplete="off"
                  />
                </div>

                {/* Button */}
                <div className="form-group">
                  <button type="submit">Ready!</button>
                </div>
              </form>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Carnival;
