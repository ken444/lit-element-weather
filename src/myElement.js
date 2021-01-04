import { LitElement, html, css } from 'lit-element';
import latestmap from './latestmap.js'

class MyElement extends LitElement {

  static get properties() {
    return {
      'name': String,
    };
  }

  static styles = css`
    :host {
      font-family: Arial, 'sans serif';
    }
    h1 {
      color: #8af;
    }
    img.overlay-img{
		display:block !important;
		position: absolute;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		padding-left: 5px;
		padding-right: 5px;
		

	}	
  `;


  async getLatestMap() {
    //console.log(await latestmap())
    this.name = await latestmap()
    await new Promise(_ => setTimeout(_, 10000))
        this.name = await latestmap()
  }

  render() {
    return html`
      <h1>Hello</h1>
      <p>${this.name}</p>
      <button @click=${this.getLatestMap}>Click Me</button>

      <img class="overlay-img" width="580" height="480" src="https://weather.gc.ca/cacheable/images/radar/layers/roads/WKR_roads.gif?ver=1410285168" style="z-index: 56;">

      <img class="overlay-img" src="https://weather.gc.ca${this.name}" >
    `;
  }

}
customElements.define('my-element', MyElement);


//https://weather.gc.ca/data/radar/temp_image//WKR/WKR_PRECIP_RAIN_2019_08_19_23_10.GIF