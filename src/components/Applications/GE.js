import React from "react";
import { BeatLoader } from "react-spinners";

import Mango from "../shared/Mango";
import { RegBlobTop, RegBlobBottom } from "../Icons";

import registerService from "../../services/register";

class Ge extends React.Component {
  state = { resume: "Upload resume", loading: false };

  validateResume = file => file.type === "application/pdf";

  submit = async e => {
    e.preventDefault();

    const form = new FormData(e.target);

    const resume = form.get("resume");

    const isValidResume = this.validateResume(resume);

    let values = [...form.values()];
    let fields = {};
    [...form.keys()].forEach((key, i) => {
      fields[key] = values[i];
    });

    try {
      if (!isValidResume) throw "Resume required (PDF's only)";
      if (resume.size == 0) throw "Resume required.";

      this.setState({ loading: true });
      await registerService.interview(fields, "ge");

      this.props.history.push({ pathname: "/interview-response" });
    } catch (e) {
      this.setState({ loading: false, resume: "Upload resume" });
      alert("You are not a registered hacker!");
    }
  };

  updateFile = e => this.setState({ resume: e.target.files[0].name });

  render() {
    const { resume, loading } = this.state;

    return (
      <React.Fragment>
        <RegBlobTop
          className="reg-blob"
          topColor="#FFF212"
          bottomColor="#FFAB22"
        />
        <RegBlobBottom
          className="reg-blob-bottom"
          topColor="#FFAB22"
          bottomColor="#FFF212"
        />
        <Mango className="register-mango" color="white" />
        <div className="registration-card">
          {loading && (
            <div className="loading">
              <h2>Prepping something sweet..</h2>
              <p className="text-muted">One sec 😬..</p>
              <BeatLoader color="#FFE22D" />
            </div>
          )}

          {loading || (
            <React.Fragment>
              <h1>
                Interview with <br />
                General Electric 🔋
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
                  <button type="submit" style={{ backgroundColor: "#FFE22D" }}>
                    Ready!
                  </button>
                </div>
              </form>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Ge;
