import React, { Profiler, Children } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import Info from "@material-ui/icons/AccountBox";
import List from "@material-ui/icons/List";
import image1 from "assets/img/Logo.png";
import image2 from "assets/img/Corner.JPG";
import image3 from "assets/img/Castform.JPG";
import SectionCarousel from "./SectionCarousel";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h1>Portfolio</h1>
          </div>

          <GridContainer>
            <GridItem lg={12}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "About Me",
                    tabIcon: Info,
                    tabContent: (

                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
            </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
            </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Projects",
                    tabIcon: Dashboard,
                    tabContent: (
                      <GridItem lg={12}>

                        <NavPills
                          color="rose"
                          horizontal={{
                            tabsGrid: { xs: 12, sm: 4, md: 4 },
                            contentGrid: { xs: 12, sm: 8, md: 8 }
                          }}
                          tabs={[
                            {
                              tabButton: "Sogu",
                              tabContent: (

                                <div>
                                  <p>
                                  <img src={image1} alt="First slide"  />
                                  </p>
                                  <br></br>
                                  <p>
                                    Collaboratively administrate empowered markets via
                                    plug-and-play networks. Dynamically procrastinate B2C
                                    users after installed base benefits.
                                    </p>
                                  <br></br>
                                  <h4>Link to Website: https://bit.ly/2PjU2gf</h4>
                                </div>
                              )
                            },
                            {
                              tabButton: "Corner Entry",
                              tabContent: (
                                <span>
                                  <p>
                                  <img src={image2} alt="First slide"  />
                                  </p>
                                  <br></br>
                                  <p>
                                    Efficiently unleash cross-media information without
                                    cross-media value. Quickly maximize timely
                                    deliverables for real-time schemas.
                                 </p>
                                  <br />
                                  <p>
                                    Dramatically maintain clicks-and-mortar solutions
                                    without functional solutions. Dramatically visualize
                                    customer directed convergence without revolutionary
                                    ROI. Collaboratively administrate empowered markets
                                    via plug-and-play networks. Dynamically procrastinate
                                    B2C users after installed base benefits.
                                  </p>
                                </span>
                              )
                            }, {
                              tabButton: "Castform",
                              tabContent: (
                                <span>
                                  <p>
                                  <img src={image3} alt="First slide"  />
                                  </p>
                                  <br></br>
                                  <p>
                                    Efficiently unleash cross-media information without
                                    cross-media value. Quickly maximize timely
                                    deliverables for real-time schemas.
                                 </p>
                                  <br />
                                  <p>
                                    Dramatically maintain clicks-and-mortar solutions
                                    without functional solutions. Dramatically visualize
                                    customer directed convergence without revolutionary
                                    ROI. Collaboratively administrate empowered markets
                                    via plug-and-play networks. Dynamically procrastinate
                                    B2C users after installed base benefits.
                                  </p>
                                </span>
                              )
                            }


                          ]}
                        />
                      </GridItem>
                    )
                  }
                ]}
              />
            </GridItem>

          </GridContainer>
        </div>
      </div>
    </div>
  );
}
