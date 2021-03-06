import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <h1>Hinnapäring</h1>
                  <form
                    name="paring"
                    method="post"
                    action="/paring/ty/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="paring" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={"nimi"}>
                        Nimi:
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={"text"}
                          name={"nimi"}
                          placeholder={"Nimi"}
                          onChange={this.handleChange}
                          id={"nimi"}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={"email"}>
                        Email:
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={"email"}
                          name={"email"}
                          placeholder={"Email"}
                          onChange={this.handleChange}
                          id={"email"}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={"message"}>
                        Sõnum:
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={"message"}
                          placeholder={"Täpsustus siia"}
                          onChange={this.handleChange}
                          id={"message"}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={"telefon"}>
                        Telefon:
                      </label>
                      <div className="control">
                        <textarea
                          className="input"
                          name={"telefon"}
                          placeholder={"Telefon"}
                          onChange={this.handleChange}
                          id={"telefon"}
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={"ettevote"}>
                        Ettevõte:
                      </label>
                      <div className="control">
                        <textarea
                          className="input"
                          name={"ettevote"}
                          placeholder={"Ettevõte"}
                          onChange={this.handleChange}
                          id={"ettevote"}
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <button
                        className="button is-primary is-outlined"
                        type="submit"
                      >
                        Saada
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
