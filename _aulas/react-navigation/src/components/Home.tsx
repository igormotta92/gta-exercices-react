import './Home.css';
const logo = require("../assets/logo.png")

export const Home: React.FC<{}> = (props) => {
    return <>
        <header className="header">
            <img className="logo" src={logo} alt="Logotipo de chat" />
            <h1>Chat das antigas</h1>
        </header>
        <main className="chat-area">
            <div className="user-list">
                <ul id="userList">
                    <li>Você</li>
                </ul>
            </div>
            <section className="messages">
                <div id="history" className="history">
                    <div className="msg"><span>Você entrou no chat. Bem vindo!</span></div>
                </div>
                <div className="send-area">
                    <input id="message" type="text" />
                    <button id="button">Enviar</button>
                </div>
            </section>
        </main>
    </>
}