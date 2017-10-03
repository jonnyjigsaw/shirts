import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';


export default class PdfView extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    return (



        <Document
          file={"https://www.uscis.gov/sites/default/files/files/form/i-131instr.pdf"}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={this.state.pageNumber} />
        </Document>

    );
  }
}
