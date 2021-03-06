import React, { Component } from 'react';
import '../App.css';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';

// spotify endpoint, dont need api key
// https://api.spotify.com/v1/search
// documentation page: https://developer.spotify.com/documentation/web-api/reference/search/search/
// access token: http://localhost:8888/#access_token=BQCXXDjU9wbR4i7MmZrjCYAr04zQAv6KH1L5wOeQO5BUKbNWuGqilZZLkZA5ufTESocA-UKjs8y50puWGZSKgs31O-JGmOxesLgn1ljx20FNuhZQfsxQE3pWTO4HWSHmhYjlRlnX3jUixjoVpOsDuvRxlUKOIbNI8x96gG4Z&refresh_token=AQBR0PIzmZFGPrmR6Cl_lDBfTlCVIzdmMplygur8VHxDk3Vv-eqWPR_58Sl2WbgVcaFgCXJHi7_s6hv8Gcc_jytmYy-lgF3d9ZAPe_-1tI8Bl8I0nrKWx8_BuIWD0cYC4qcYXw

// client id: e2d613f9ba5b4b30a041a725626046e6
// client secret: a1bc17e2569a415596350b5ec3a04417
// redirect uri: http://localhost:3000/randomrecipe
//               http://localhost:3000/userpage
class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks:['https://s3.us-east-2.amazonaws.com/mvp-tracks/campfire-story.mp3']
    }

  }

search() {
  // console.log('this.state', this.state);
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  let FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
  const ALBUM_URL = 'https://api.spotify.com/v1/artists/'

  var accessToken = 'BQAuKHyIXWLoyvSCWGnODmZJfC_vEsxtV2-dyWOttm1lYImaTboGR7LjZOIQJ03N4FMyxjFC7hPsi33DI72IZe6AwY8vMCcWApy0Aqe6BW5gWFxHG0hbyIewucGiC5nd6yJp4ahF-7hlARHTJ3dPjMjITlnn7I0RZ_R0zivf&refresh_token=AQA25BAh12EqqmTn4n4dAwUGJS0gsYLLxMVTD64FXEbbRB9C43_2pwKbV1-y601h8KhDZ4B8SoBFbcdRs2Th72sm_D6CMaNasHeX_LuDvtW0nGCV5HTGXkYo19BW7X9nHwnwtQ'
  console.log(FETCH_URL);
  var myOptions = {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + accessToken
    },
    mode: 'cors',
    cache: 'default'
  };

  fetch(FETCH_URL, myOptions)
    .then(response => response.json())
    .then(json => {
      let artist = json.artists.items[0];
      this.setState({ artist });
      console.log('this.state', this.state);

      // FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`

      // fetch(FETCH_URL, myOptions)
      //   .then(json => {
      //     console.log('top tracks: ', json)
      //   })
    })
}



  render() {
    let artist = {
      name: '',
      followers: {
        total: ''
      }
    } || null;
    if (this.state.artist !== null) {
      artist = this.state.artist;
    }
    return (
      <div className="Audioplayer">
        <div className="Audioplayer-title">Audio Player</div>
       {/* React-Bootstrap components */}
        <FormGroup>
          {/* wrap form control with InputGroup */}
          <InputGroup>
            {/* this is the equivalent of an input field, FormControl is also self-closing */}
            <FormControl
                type="text"
                placeholder="Search for an artist..."
                value={this.state.query}
                onChange={event => {this.setState({query: event.target.value})}}
                onKeyPress={event => {
                  // if the user clicks enter or mouse click, call this.search()
                  // console.log('event.key: ', event.key)
                  if(event.key === 'Enter') {
                    // call this.search
                    this.search()
                  }
                }}
              />
            <Button onClick={()=> this.search()}>FIND SOME MUSIC!</Button>
          </InputGroup>
        </FormGroup>
        {/* dont want to see templating on the page unless there is an artist fetched */}

        {
          this.state.artist !== null
          ?
            <div>

              <Profile
                artist={this.state.artist}
              />

                <Gallery
                  tracks={this.state.tracks}
                />

            </div>
          : <div></div>
        }
        <div className='tracks'>

        </div>

      </div>
    )
  }
}

export default AudioPlayer;