import React from "react"
import { useWeb3React } from '@web3-react/core'
import { injected } from "./wallet/connector"

function App() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React();

  async function connectWallet() {
    try {
      await activate(injected)
    } catch (error) {
      console.log(error);
    }
  }
  function disconnectWallet() {
    try {
      deactivate()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {!active ? (<div className="btn-container">
        <button className="connect-btn" onClick={connectWallet}>
          Connect Wallet 💳
        </button>
      </div>) :
        (<div className="btn-container">
        <button className="connect-btn" onClick={disconnectWallet}>
          Disconnect Wallet 💳
        </button>
      </div>)
      }

      {active ? <div className="text-center"> Connected with {account} </div> : <div className="text-center">Not Connected</div>}
    </div>

  );
}

export default App;
