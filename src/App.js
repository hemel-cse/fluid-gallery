import React, { Component } from 'react'

import FluidGallery from 'react-fluid-gallery'

import ModalVideo from 'react-modal-video'


// Add more images or video links below in array

window.galleryImages = [
 'https://picsum.photos/seed/picsum/1024/1024',
 'https://picsum.photos/seed/picsum/1024/1024',
 'https://picsum.photos/seed/picsum/1024/1024',
]

export default class App extends Component {

  state = {
    sliderNum: 0,
    isOpen: false,
    // Add number of array that match the gallery image count with spefic information index wise
    content: [
      {
        title:'First Title',
        description:'First Des',
        // Youtube video id
        video:'TOrnUquxtwA',
      },
      {
        title:'Second Title',
        description:'Second Des',
        video:'ymjNGjuBCTo',
      },
      {
        title:'Third Title',
        description:'Third Des',
        video:'tMkwQFlAhMA',
      },
    ]
  }

  render () {
    return (
      <div
        style={{
          height: '100vh'
        }}
      >
        <FluidGallery
          slides={window.galleryImages}
          startAt={0}
          onChange={this._onChange}
        />

        <div
          style={{
            position: 'absolute',
            zIndex: 9999,
            top: 0,
            left: 0,
            // right: 0,
            bottom: 0,
            padding: '1em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            // pointerEvents: 'none'
          }}
        >
          <h1
            style={{
              fontSize: '3em',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
              color: 'black',
            }}
          >
            {this.state.content[this.state.sliderNum].title}
          </h1>

          <p
            style={{
              fontSize: '1.5em',
              color: 'grey',
            }}
          >
           {this.state.content[this.state.sliderNum].description}
          </p>

          <div htmlFor="button">
            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.content[this.state.sliderNum].video} onClose={() => this.setState({isOpen: false})} />
            <button onClick={() => this.setState({isOpen: true})}>Open Video</button>
          </div>
          
        </div>
      </div>
    )
  }

  _onChange = (index) => {
    this.setState({sliderNum: index})
    console.log('Gallery.onChange', index)
  }
}
