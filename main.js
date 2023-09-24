class specialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
    body {
        font-size: 18px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #9acd32;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      }
      header {
        background-color: yellow;
        padding: 40px;
        font-size: 25px;
        text-align: center;
      }
      footer {
        background-color: aquamarine;
        padding: 20px;
        font-size: 16px;
        text-align: center;
        margin-top: auto;
      }
      nav {
        background-color: wheat;
        height: 600px;
        width: 15%;
        float: left;
      }
      article {
        padding-left: 20px;
        height: 500px;
        width: 80%;
        float: left;
      }
      
      </style>
      
      <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>  
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="login-page.html">Login</a></li>
        <li><a href="registration-page.html">Registration</a></li>
        
      </ul>
      </nav>
      
      `;
  }
}

class specialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <footer>Copyright 2023</footer>`;
  }
}

customElements.define("special-header", specialHeader);
customElements.define("special-footer", specialFooter);
