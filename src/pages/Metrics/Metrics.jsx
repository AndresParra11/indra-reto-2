import Sidebar from "../../components/Sidebar/Sidebar";

const Metrics = () => {
  return (
    <div className="content">
      <Sidebar />
      <iframe
        width="1000"
        height="600"
        src="https://lookerstudio.google.com/embed/reporting/39d51016-e454-43c0-86f2-21e575cce704/page/2ITwD"
        style={{
          border: "0",
          allowfullscreen: true,
          sandbox:
            "allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
        }}
      ></iframe>
    </div>
  );
};

export default Metrics;
