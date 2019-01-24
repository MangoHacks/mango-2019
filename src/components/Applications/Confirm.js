import React from "react";
import { BeatLoader } from "react-spinners";

import Mango from "../shared/Mango";
import { RegBlobTop, RegBlobBottom } from "../Icons";

import registerService from "../../services/register";

class Confirm extends React.Component {
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
      await registerService.confirm(fields);

      this.props.history.push({ pathname: "/confirm-response" });
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
          topColor="#FF4C4C"
          bottomColor="#FF8E43"
        />
        <RegBlobBottom
          className="reg-blob-bottom"
          topColor="#FF8E43"
          bottomColor="#FF4C4C"
        />
        <Mango className="register-mango" color="white" />
        <div className="registration-card">
          {loading && (
            <div className="loading">
              <h2>Prepping something sweet..</h2>
              <p className="text-muted">One sec 😬..</p>
              <BeatLoader color="#FF4C4C" />
            </div>
          )}

          {loading || (
            <React.Fragment>
              <h1>
                Confirm your spot <br />
                at MangoHacks 🎉
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
                  <button type="submit" style={{ backgroundColor: "#FF594A" }}>
                    Confirm me!
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

export default Confirm;
