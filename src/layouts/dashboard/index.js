/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SelectCastegory from "./components/SelectCategory";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import RewardTracker from "./components/RewardTracker";
import ArrowUpward from '@mui/icons-material/ArrowUpward';

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>

        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <SoftBox mb={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} xl={6}>
                    <MiniStatisticsCard
                      title={{ text: "Total BBTF staked" }}
                      description={{ text: "Staking Period Began" }}
                      count="385,420,69"
                      percentage={{ color: "success", text: "+1.25%" }}
                      icon={{ color: "info", component: "paid" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <MiniStatisticsCard
                      title={{ text: "Holder's staked" }}
                      description={{ text: "Staking Period Began" }}
                      count="4,209"
                      percentage={{ color: "success", text: "+3%" }}
                      icon={{ color: "info", component: "public" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <MiniStatisticsCard
                      title={{ text: "Total vested Rewards" }}
                      description={{ text: "Staking Period Began" }}
                      count="+3,462"
                      percentage={{ color: "success", text: "+2%" }}
                      icon={{ color: "info", component: "emoji_events" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <MiniStatisticsCard
                      title={{ text: "Earned Rewards" }}
                      description={{ text: "Staking Period Began" }}
                      count="$103,430"
                      percentage={{ color: "success", text: "+5%" }}
                      icon={{
                        color: "info",
                        component: "shopping_cart",
                      }}
                    />
                  </Grid>
                </Grid>
              </SoftBox>
              <SoftBox mb={3}>
                <GradientLineChart
                  description={
                    <SoftBox display="flex" alignItems="center" justifyContent="space-between">
                      <SoftBox>
                        <SoftTypography >Overview</SoftTypography>
                      </SoftBox>
                      <SoftBox display="flex" alignItems="center">
                        <div style={{ backgroundColor: '#FF7049', width: '10px', height: '10px', marginRight: "10px" }}></div>
                        <SoftTypography style={{ fontSize: "14px" }} fontWeight="light" color="graph1">Staking Rewards Paid</SoftTypography>
                      </SoftBox>
                      <SoftBox display="flex" alignItems="center">
                        <div style={{ backgroundColor: '#563BFF', width: '10px', height: '10px', marginRight: "10px" }}></div>
                        <SoftTypography style={{ fontSize: "14px" }} fontWeight="light" color="graph2"> Volume</SoftTypography>
                      </SoftBox>
                      <SoftBox display="flex" alignItems="center" justifyContent="space-between">
                        <SoftButton variant="contained" color="chartbutton" style={{ color: "#563BFF", marginRight: "4%" }}>
                          Monthly&nbsp;
                          <ArrowDropDownIcon />
                        </SoftButton>
                        <SoftButton variant="contained" color="chartbutton" style={{ color: "#563BFF", marginRight: "4%" }}>
                          <Icon>download</Icon>
                        </SoftButton>
                      </SoftBox>
                    </SoftBox>

                  }
                  height="20.25rem"
                  chart={gradientLineChartData}
                />
              </SoftBox>
              <SoftBox mb={3}>
                <Projects />
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <SoftBox mb={5}>
                <SelectCastegory />
              </SoftBox>
              <SoftBox mb={3}>
                <RewardTracker />
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Dashboard;
