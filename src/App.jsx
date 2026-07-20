import './App.css'

function App() {
  const config = window.APP_CONFIG ?? {
    environment: 'Unknown',
    apiUrl: 'Not configured',
  }

  return (
    <main className="app-container">
      <h1>SQE CI/CD Demo Application</h1>

      <p>
        This React application demonstrates a three-phase Jenkins CI/CD
        pipeline.
      </p>

      <section>
        <h2>Application Status</h2>
        <p>System is operational.</p>
      </section>

      <section>
        <h2>Deployment Information</h2>

        <p>
          <strong>Environment:</strong> {config.environment}
        </p>

        <p>
          <strong>API URL:</strong> {config.apiUrl}
        </p>
      </section>
    </main>
  )
}

export default App
