import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { ApiService } from '../../services/index';

@Injectable()
export class PlaylistService {
  constructor(private apiService: ApiService) {}

  addToPlaylist(songData) {
    return this.apiService.put('/api/add-song', songData);
  }

  deleteSong(songData) {
    return this.apiService.delete('/api/delete-song', songData);
  }

  getPlaylist() {
    return this.apiService.get('/api/get-playlist');
  }
}
