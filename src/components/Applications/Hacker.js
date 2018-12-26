import React from "react";
import { BeatLoader } from "react-spinners";

import Mango from "../shared/Mango";
import { RegBlobTop, RegBlobBottom } from "../Icons";

import registerService from "../../services/register";

import schools from "../../assets/data/schools.json";
import majors from "../../assets/data/majors.json";

class Hacker extends React.Component {
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
      await registerService.hacker(fields);

      this.props.history.push({ pathname: "/hackerresponse" });
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
              <h1>Register</h1>
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

                {/* School */}
                <div className="form-group">
                  <label htmlFor="school">
                    School&nbsp;
                    <span className="text-muted">
                      <small>required</small>
                    </span>
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    list="schools"
                    name="school"
                    placeholder="Hogwarts School of Witchcraft and Wizardry"
                    autoComplete="off"
                  />
                  <datalist id="schools">
                    {schools.map(({ institution }, i) => (
                      <option key={i} value={institution} />
                    ))}
                  </datalist>
                </div>

                {/* Major */}
                <div className="form-group">
                  <label htmlFor="major">
                    Major&nbsp;
                    <span className="text-muted">
                      <small>required</small>
                    </span>
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    list="majors"
                    name="major"
                    placeholder="Underwater basket weaving"
                    autoComplete="off"
                  />
                  <datalist id="majors">
                    {majors.map(({ major }, i) => (
                      <option key={i} value={major} />
                    ))}
                  </datalist>
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

                {/* Gender */}
                <div className="form-group">
                  <label htmlFor="gender">
                    Gender&nbsp;
                    <span className="text-muted">
                      <small>required</small>
                    </span>
                  </label>
                  <select required className="form-control" name="gender">
                    <option key="MALE" value="MALE">
                      Male
                    </option>
                    <option key="FEMALE" value="FEMALE">
                      Female
                    </option>
                    <option key="OTHER" value="OTHER">
                      Other
                    </option>
                    <option key="NORESPONSE" value="NORESPONSE">
                      No response
                    </option>
                  </select>
                </div>

                {/* Shirt Size */}
                <div className="form-group">
                  <label htmlFor="shirtSize">
                    Shirt Size&nbsp;
                    <span className="text-muted">
                      <small>required</small>
                    </span>
                  </label>
                  <select required className="form-control" name="shirtSize">
                    <option key="SMALL" value="SMALL">
                      Small
                    </option>
                    <option key="MEDIUM" value="MEDIUM">
                      Medium
                    </option>
                    <option key="LARGE" value="LARGE">
                      Large
                    </option>
                    <option key="XLARGE" value="XLARGE">
                      X-Large
                    </option>
                  </select>
                </div>

                {/* Dietary Restriction*/}
                <div className="form-group">
                  <label htmlFor="diet">Dietary Restrictions</label>
                  <input
                    type="text"
                    name="diet"
                    className="form-control"
                    aria-describedby="diet"
                    placeholder="List any dietary restrictions.."
                    autoComplete="off"
                  />
                </div>

                {/* MLH Code of Conduct */}
                <div className="form-group mlh-cc text-muted">
                  <input required type="checkbox" name="mlh" value="AGREE" />
                  &nbsp;
                  <small>
                    I authorize you to share my application/registration
                    information for event administration, ranking, MLH
                    administration, pre- and post-event informational e-mails,
                    and occasional messages about hackathons in-line with the
                    MLH Privacy Policy. I further I agree to the terms of both
                    the MLH&nbsp;
                    <a
                      href="https://github.com/MLH/mlh-policies/blob/master/prize-terms-and-conditions/contest-terms.md"
                      target="_blank"
                      style={{ color: "#ff4e4a" }}
                    >
                      Contest Terms and Conditions
                    </a>{" "}
                    and the MLH &nbsp;
                    <a
                      href="https://mlh.io/privacy"
                      target="_blank"
                      style={{ color: "#ff4e4a" }}
                    >
                      Privacy Policy.
                    </a>
                  </small>
                </div>

                {/* Button */}
                <div className="form-group">
                  <button type="submit">Sign me up!</button>
                </div>
              </form>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Hacker;
