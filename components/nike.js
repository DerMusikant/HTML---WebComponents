class nike extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode: 'open'})

    const
    template = document.createElement('template'),
    styles = document.createElement('style')

  }

  connectedCallback(){
    template.innerHTML='
    
    '
  }
}

customElements.define('nike-shoe', nike)
