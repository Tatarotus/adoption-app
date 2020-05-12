import React from "react"

export default ({ location }) => (
  <div class="container">
    <pre>{JSON.stringify(location.state.pet, null, 2)}</pre>
  </div>
)
