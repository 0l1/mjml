var mjml = require('./lib/index')
const inputMJML = `<mjml>
  <mj-head>
    <mj-title>
      Toto
    </mj-title>
    <mj-attributes>
      <mj-text padding="0" />
      <mj-class name="blue" color="blue" />
      <mj-class name="big" font-size="20px" />
      <mj-all font-family="Arial" />
    </mj-attributes>
    <mj-style>
      .red-color {
        color: red;
      }
    </mj-style>
    <mj-font name="Raleway" href="https://fonts.googleapis.com/css?family=Raleway" />
    <mj-font name="Open Sans" href="https://fonts.googleapis.com/css?family=Open+Sans" />
  </mj-head>
  <mj-body>
    <mj-container background-color="#d6dde5">
      <mj-section background-color="white">
        <mj-column>
          <mj-carousel padding="30px" border-radius="30px" tb-border-radius="15px" tb-selected-border-color="#D6C" tb-hover-border-color="#F56">
            <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" href="http://google.fr" />
            <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png" alt="wow" />
            <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png" />
          </mj-carousel>
        </mj-column>
      </mj-section>
    </mj-container>
  </mj-body>
</mjml>`

try {
  const { html, errors } = mjml.mjml2html(inputMJML, { beautify: true, level: "soft" })

  if (errors) {
    console.log(errors.map(e => e.formattedMessage).join('\n'))
  }

  console.log(html)
} catch(e) {
  if (e.getMessages) {
  console.log(e.getMessages())
  } else {
    throw e
  }
}
