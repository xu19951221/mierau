import { Row, Col } from "reactstrap";
import React from "react";
import {} from "components";
import { NavLink } from "react-router-dom";

class SetupItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <i
            className={
              "float-right fa fa-" + this.props.icon + " icon-md col-2"
            }
            style={{ "margin-top": "20px", textAlign: "right" }}
          />
          <div style={{ "padding-left": "20px" }} className="col-10">
            <h6 style={{ fontSize: "16px" }}>
              <NavLink to={this.props.link}>
                <strong>{this.props.title}</strong>
              </NavLink>
            </h6>
            <span>{this.props.description}</span>
          </div>
        </div>
      </div>
    );
  }
}

class Setup extends React.Component {
  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div class="page-title">
                <div class="float-left">
                  <h1 class="title">setup</h1>
                </div>
              </div>

              <div class="col-12">
                <section class="box ">
                  <div class="content-body">
                    <div class="row">
                      <div className="col-12 col-md-6">
                        <h2
                          style={{
                            fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                            fontSize: "19px",
                            paddingLeft: "10px",
                            paddingTop: "15px",
                            lineHeight: "30px",
                            color: "#676767",
                            fontWeight: "400",
                            display: "inline-block"
                          }}
                        >
                          Company Details
                        </h2>
                        <SetupItem
                          icon="briefcase"
                          title="Company Details"
                          link="/setup-companyDetail"
                          description="Manage your coporate information like Contact details,
                          System logos, time Zone and other."
                        />
                        <SetupItem
                          icon="group"
                          title="Marketing Campaigns"
                          link="#"
                          description="Manage Marketing Campaigns and Promotions."
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <h2
                          style={{
                            fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                            fontSize: "19px",
                            paddingLeft: "10px",
                            paddingTop: "15px",
                            lineHeight: "30px",
                            color: "#676767",
                            fontWeight: "400",
                            display: "inline-block"
                          }}
                        >
                          Add New User
                        </h2>
                        <SetupItem
                          icon="briefcase"
                          title="Add New User"
                          link="#"
                          description="Create new corporate and Business Unit uses within the system."
                        />
                        <h2
                          style={{
                            fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                            fontSize: "19px",
                            paddingLeft: "10px",
                            paddingTop: "15px",
                            lineHeight: "30px",
                            color: "#676767",
                            fontWeight: "400",
                            display: "inline-block"
                          }}
                        >
                          Manage Users
                        </h2>
                        <SetupItem
                          icon="group"
                          title="All User"
                          link="#"
                          description="Manage all user profiles, security permissions and other information"
                        />
                        <SetupItem
                          icon="group"
                          title="System Administrators"
                          link="#"
                          description="Manage system administrator profiles, login credentials, security permission."
                        />
                        <SetupItem
                          icon="group"
                          title="Call Center Users"
                          link="#"
                          description="Manage call center user profiles, login credentials, security permission."
                        />
                        <SetupItem
                          icon="group"
                          title="Business Unit Users"
                          link="#"
                          description="Manage Busuniess Unit users profiles, login credentials, security persmission."
                        />
                        <SetupItem
                          icon="user"
                          title="User Login History"
                          link="#"
                          description="View User login history."
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Setup;
