<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EventReminder extends Mailable
{
    use Queueable, SerializesModels;
    public $event;

    public $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($event, $user)
    {
        $this->event = $event;
        $this->user = $user;
    }
   

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
//event reminder template
        // return $this->subject($this->event->name." reminder")->view('emails.event_reminder');
        return $this->subject($this->event->name." reminder")->view('emails.event_reminder');
        
    }
}
