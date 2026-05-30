import { useParams } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import { useParams } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import "./DashboardPage.css";

const DashboardPage = () => {
  const { id } = useParams();

  return (
    <div className="dashboard-page-wrapper">
      <div className="dashboard-header">
        <h1>Correlation Analysis Dashboard</h1>
        <p>
          Analyse IoT sensor streams using time-series trends, scatter plots,
          and correlation insights.
        </p>

        <div className="dataset-badge">
          Dataset: {id}
        </div>
      </div>

      <Dashboard />
    </div>
    <main className="dashboard-page-shell">
      <section className="dashboard-page-hero">
        <div className="dashboard-page-badge">Sensor Dashboard</div>
        <h1>{id} Dashboard</h1>
        <p>
          Explore time-series data, stream behaviour, correlations and summary
          insights in one structured view.
        </p>
      </section>

      <Dashboard datasetId={id} />
    </main>
  );
};

export default DashboardPage;