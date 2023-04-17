// Write your code here
// Write your code here

const apiRegistrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderInitialView = () => (
    <div className="initial-container">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="about">
        A live performance brings show much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registered-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="registrations-closed-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const renderRegistrationStatusView = () => {
    switch (activeEventRegistrationStatus) {
      case apiRegistrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case apiRegistrationStatus.registered:
        return renderRegisteredView()
      case apiRegistrationStatus.registrationsClosed:
        return renderRegistrationsClosedView()
      default:
        return renderInitialView()
    }
  }

  return <div className="container">{renderRegistrationStatusView()}</div>
}

export default ActiveEventRegistrationDetails
