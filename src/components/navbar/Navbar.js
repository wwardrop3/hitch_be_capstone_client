import { useHistory } from "react-router-dom"
import "./navbar.css"



export const NavBar = ({ isDriver, setIsDriver, token, setToken, showModal, setShowModal, refresh, setRefresh }) => {
    const history = useHistory()
    const handleLogout = () => {
        history.push("/login")
        localStorage.removeItem('token')


    }
    return (
        <>
            <div className="navbar">

                <img className="hitch-logo" src="https://sat02pap002files.storage.live.com/y4m1V9ZiXsfQNrBUnXzmn_KgObimQDlAIx7yrtR4FRHI6ptJPSAp2H08yQ4iPeM8rtJzfjb3RxjCNdODilVTb65gUcABb_RuCu9p9EWXJCiS5ErALD9Jv3rrqjOIhqDEbo7xftqLuAlYSXgv7-68u0IRId2FDkD4qZYKqPe5IOsv-1-mzN_AzQBmgpwNeUJJt-D?width=1718&height=1842&cropmode=none"
                    onClick={
                        () => {
                            history.push("/")
                        }
                    } />



                {/* <img className="nav-title-logo" src="https://sat02pap002files.storage.live.com/y4mwFbVyIAwe8UwS4-vKobMeLbAuOxgPhmkrPIEhS5ExLCVbKoLTFzg4waHvxS83ieulOTmQ-qb5Axosz6Ndkd5YcIcHm-aupsvS8EGBKUbeeKma_y4gDD5o-nfPY_ILV9UK_cEgQ0m-gtjLMZ5FXrQnzXlJiOQjtI1g7CBeo5bMt11iX2ZmeIhehYEC9UyRFkN?width=1168&height=627&cropmode=none"/> */}

                {/* <div className="type-toggle">
                <div class="switch-button">
                    <input class="switch-button-checkbox" type="checkbox" 
                    onClick={
                        () => {
                            setIsDriver(!isDriver)
                            setRefresh(!refresh)
                    
                        
                        }}
                            
                            ></input>
                    <label class="switch-button-label" for=""><span class="switch-button-label-span">Driver</span></label>
                </div>
            </div> */}



                <button className="button is-outlined" onClick={() => {
                    setToken('', '')
                    history.push('/login')
                }}>Logout</button>





            </div>


        </>

    )
}