import React from "react";
import { BeatLoader } from "react-spinners";

import { RegBlobTop, RegBlobBottom } from "../Icons";
import Mango from "../shared/Mango";

import registerService from "../../services/register";

class Volunteer extends React.Component {
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
      await registerService.volunteer(fields);
      this.props.history.push({ pathname: "/volunteerresponse" });
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
              <h1>Volunteer 🎉</h1>

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
                {/* Button */}
                <div className="form-group">
                  <button type="submit" style={{ backgroundColor: "#FFE22D" }}>
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

export default Volunteer;
