import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ApiService } from '.';

@Injectable()
export class ChatsService {
  constructor(
    private apiService: ApiService,

    private socket: Socket,
  ) {}


  sendMessage(message: string) {
    this.socket.emit('send_message', message);
  }

  getMessages() {
    return this.socket.fromEvent('get_all_messages');
  }

}
