import React from "react";
import { BeatLoader } from "react-spinners";

import Mango from "../shared/Mango";
import { RegBlobTop, RegBlobBottom } from "../Icons";

import registerService from "../../services/register";

class Express extends React.Component {
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
      await registerService.interview(fields, "express");

      this.props.history.push({ pathname: "/interview-response" });
    } catch (e) {
      this.setState({ loading: false, resume: "Upload resume" });
      alert(e);
    }
  };

  updateFile = e => this.setState({ resume: e.target.files[0].name });

  render() {
    const { resume, loading } = this.state;

    return (
      <React.Fragment>
        <RegBlobTop
          className="reg-blob"
          topColor="#439DFF"
          bottomColor="#834CFF"
        />
        <RegBlobBottom
          className="reg-blob-bottom"
          topColor="#834CFF"
          bottomColor="#439DFF"
        />
        <Mango className="register-mango" color="white" />
        <div className="registration-card">
          {loading && (
            <div className="loading">
              <h2>Prepping something sweet..</h2>
              <p className="text-muted">One sec 😬..</p>
              <BeatLoader color="#834CFF" />
            </div>
          )}

          {loading || (
            <React.Fragment>
              <h1>
                Interview with <br />
                Express Scripts 🚀
              </h1>
              <form onSubmit={this.submit}>
                {/* FirstName */}
                <div className="form-group">
                  <label htmlFor="firstName">
                    First Name&nbsp;
                    <span className="text-muted">
                      <small>required</small>
                    </span>
                  </label>
                  <input
                    required
                    name="firstName"
                    type="text"
                    className="form-control"
                    aria-describedby="firstName"
                    placeholder="Harry"
                    autoComplete="off"
                  />
                </div>

                {/* LastName */}
                <div className="form-group">
                  <label htmlFor="firstName">
                    Last Name&nbsp;
                    <span className="text-muted">
                      <small>required</small>
                    </span>
                  </label>
                  <input
                    required
                    name="lastName"
                    type="text"
                    className="form-control"
                    aria-describedby="lastName"
                    placeholder="Potter"
                    autoComplete="off"
                  />
                </div>

                {/* LevelOfStudy */}
                <div className="form-group">
                  <label htmlFor="levelOfStudy">
                    Level of study&nbsp;
                    <span className="text-muted">
                      <small>required</small>
                    </span>
                  </label>
                  <select required className="form-control" name="levelOfStudy">
                    <option key="FRESHMAN" value="FRESHMAN">
                      Freshman
                    </option>
                    <option key="SOPHMORE" value="SOPHMORE">
                      Sophmore
                    </option>
                    <option key="JUNIOR" value="JUNIOR">
                      Junior
                    </option>
                    <option key="SENIOR" value="SENIOR">
                      Senior
                    </option>
                    <option key="OTHER" value="OTHER">
                      OTHER
                    </option>
                  </select>
                </div>

                {/* resume*/}
                <div className="form-group">
                  <label htmlFor="resume">
                    Resume&nbsp;
                    <span className="text-muted">
                      <small>required</small>
                    </span>
                  </label>
                  <br />
                  <label className="btn" style={{ backgroundColor: "#F6F8FA" }}>
                    <i className="fa fa-file-text" />
                    &nbsp; {resume}
                    <input
                      noValidate
                      accept="application/pdf, application/docx, application/msword"
                      type="file"
                      style={{ display: "none" }}
                      name="resume"
                      onChange={e => this.updateFile(e)}
                    />
                  </label>
                </div>

                {/* Button */}
                <div className="form-group">
                  <button type="submit" style={{ backgroundColor: "#577CFF" }}>
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

export default Express;
