import React from "react";
import { BeatLoader } from "react-spinners";

import { RegBlobTop, RegBlobBottom } from "../Icons";
import Mango from "../shared/Mango";

import registerService from "../../services/register";

class Mentor extends React.Component {
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
      await registerService.mentor(fields);
      this.props.history.push({ pathname: "/mentorresponse" });
    } catch (e) {
      this.setState({ loading: false });
      alert(e);
    }
  };

  render() {
    const { loading } = this.state;
    return (
      <React.Fragment>
        <RegBlobTop
          className="reg-blob"
          topColor="#17E0E9"
          bottomColor="#36EC6B"
        />
        <RegBlobBottom
          className="reg-blob-bottom"
          topColor="#36EC6B"
          bottomColor="#17E0E9"
        />
        <Mango className="register-mango" color="white" />

        <div className="registration-card">
          {loading && (
            <div className="loading">
              <h2>Prepping something sweet..</h2>
              <p className="text-muted">One sec 😬..</p>
              <BeatLoader color="#56F7A1" />
            </div>
          )}
          {loading || (
            <React.Fragment>
              <h1>Mentor 🧁</h1>

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

                {/* title */}
                <div className="form-group">
                  <label htmlFor="title">
                    Sweet Skills:&nbsp;
                    <span className="text-muted">
                      <small>required</small>
                    </span>
                  </label>
                  <textarea
                    required
                    name="skills"
                    type="text"
                    className="form-control"
                    aria-describedby="skills"
                    placeholder="I play CSGO with my TV turned off 🙅🏻‍♂️."
                    autoComplete="off"
                    rows="5"
                    columns="10"
                  />
                </div>
                {/* Button */}
                <div className="form-group">
                  <button type="submit" style={{ backgroundColor: "#56F7A1" }}>
                    Sign me up!
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

export default Mentor;
