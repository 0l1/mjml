var mjml = require('./lib/index')

const inputMJML = `<mjml>
  <mj-body>
    <mj-container>
      <mj-section>
        <mj-column>
          <mj-button
            href='<>'>
            <%= %>
          </mj-button>
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
