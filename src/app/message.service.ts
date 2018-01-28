import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class MessageService {
  private static SNACKBAR_DURATION = 2000;
  private static MAX_MESSAGE_COUNT = 5;

  messages: string[] = [];

  constructor(private snackBar: MatSnackBar) {
  }

  add(message: string) {
    if (message) {
      this.messages.unshift(message);

      // use setTimeout as workaround for ExpressionChangedAfterItHasBeenCheckedError
      const self = this;
      setTimeout(function () {
        self.snackBar.open(message, null, {
          duration: MessageService.SNACKBAR_DURATION
        });
      });

      // remove old messages
      if (this.messages.length > MessageService.MAX_MESSAGE_COUNT) {
        this.messages.splice(0, this.messages.length - MessageService.MAX_MESSAGE_COUNT);
      }
    }
  }

  remove(message: string) {
    const index = this.messages.indexOf(message);

    if (index !== -1) {
      this.messages.splice(index, 1);
    }
  }

  clear() {
    this.messages = [];
    this.snackBar.dismiss();
  }
}
