import React from "react";
import { BeatLoader } from "react-spinners";

import { RegBlobTop, RegBlobBottom } from "../Icons";
import Mango from "../shared/Mango";

import registerService from "../../services/register";

class Workshop extends React.Component {
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
      await registerService.workshop(fields);
      this.props.history.push({ pathname: "/workshopresponse" });
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
              <h1>Workshop 🍰</h1>

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
                    Workshop Title:&nbsp;
                    <span className="text-muted">
                      <small>required</small>
                    </span>
                  </label>
                  <input
                    required
                    name="title"
                    type="text"
                    className="form-control"
                    aria-describedby="title"
                    placeholder="intro to Machine Learning with CSS."
                    autoComplete="off"
                  />
                </div>
                {/* title */}
                <div className="form-group">
                  <label htmlFor="title">
                    📝Workshop Description:&nbsp;
                    <span className="text-muted">
                      <small>required</small>
                    </span>
                  </label>
                  <textarea
                    required
                    name="description"
                    type="text"
                    className="form-control"
                    aria-describedby="description"
                    placeholder="I will show attendees how to train an ML Model using a turing complete language such as CSS 🖍."
                    autoComplete="off"
                    rows="5"
                    columns="10"
                  />
                </div>
                {/* Button */}
                <div className="form-group">
                  <button type="submit" style={{ backgroundColor: "#577CFF" }}>
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

export default Workshop;
