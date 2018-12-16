import React from "react";

import Mango from "./shared/Mango";

import registerService from "../services/register";

class Register extends React.Component {
  state = { resume: "Upload resume" };

  submit = async e => {
    e.preventDefault();

    const form = new FormData(e.target);

    let values = [...form.values()];
    let fields = {};
    [...form.keys()].forEach((key, i) => {
      fields[key] = values[i];
    });

    try {
      const response = registerService.register(fields);
    } catch (e) {
      console.log(e);
    }
  };

  updateFile = e => this.setState({ resume: e.target.files[0].name });

  render() {
    const { resume } = this.state;
    return (
      <React.Fragment>
        <Mango className="register-mango" color="" />
        <div className="registration-card">
          <h1>Register</h1>
          <form onSubmit={this.submit}>
            {/* FirstName */}
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                required
                name="firstName"
                type="text"
                className="form-control"
                aria-describedby="firstName"
                placeholder="Mike"
                autoComplete="off"
              />
            </div>

            {/* LastName */}
            <div className="form-group">
              <label htmlFor="firstName">Last Name</label>
              <input
                required
                name="lastName"
                type="text"
                className="form-control"
                aria-describedby="lastName"
                placeholder="Swift"
                autoComplete="off"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
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
              <label htmlFor="school">School</label>
              <input
                required
                type="text"
                className="form-control"
                list="schools"
                name="school"
                placeholder="MLH Academy"
                autoComplete="off"
              />
              <datalist id="schools">
                <option value="Florida International University" />
              </datalist>
            </div>

            {/* Major */}
            <div className="form-group">
              <label htmlFor="major">Major</label>
              <input
                required
                type="text"
                className="form-control"
                list="majors"
                name="major"
                placeholder="Computer Science"
                autoComplete="off"
              />
              <datalist id="majors">
                <option value="Computer Science" />
              </datalist>
            </div>

            {/* LevelOfStudy */}
            <div className="form-group">
              <label htmlFor="levelOfStudy">Level of study</label>
              <select required className="form-control" name="levelOfStudy">
                <option key="FRESHMAN">Freshman</option>
                <option key="SOPHMORE">Sophmore</option>
                <option key="JUNIOR">JUNIOR</option>
                <option key="SENIOR">Senior</option>
              </select>
            </div>

            {/* resume*/}
            <div className="form-group">
              <label htmlFor="resume">Resume</label>
              {/* <input type="file" className="form-control" name="resume" /> */}
              <br />
              <label className="btn" style={{ backgroundColor: "#F6F8FA" }}>
                <i className="fa fa-file-text" />
                &nbsp; {resume}
                <input
                  accept="application/pdf, application/docx, application/msword"
                  type="file"
                  className="form-control"
                  style={{ display: "none" }}
                  name="resume"
                  onChange={e => this.updateFile(e)}
                />
              </label>
            </div>

            {/* Gender */}
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select required className="form-control" name="gender">
                <option key="MALE">Male</option>
                <option key="FEMALE">Female</option>
                <option key="OTHER">Other</option>
                <option key="NORESPONSE">No response</option>
              </select>
            </div>

            {/* Shirt Size */}
            <div className="form-group">
              <label htmlFor="shirtSize">Shirt Size</label>
              <select required className="form-control" name="shirtSize">
                <option key="SMALL">Small</option>
                <option key="MEDIUM">Medium</option>
                <option key="LARGE">Large</option>
                <option key="XLARGE">X-Large</option>
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
            <div className="form-group">
              <input required type="checkbox" name="mlh" value="AGREE" />
              &nbsp; I agree with&nbsp;
              <b>MLH</b>
              &nbsp;
              <a
                href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                target="_blank"
                className="mlh-link"
              >
                Code of Conduct.
              </a>
            </div>

            {/* Button */}
            <div className="form-group">
              <button type="submit">Sign me up!</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
