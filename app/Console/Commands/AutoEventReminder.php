<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class AutoEventReminder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'auto:eventreminder';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $events = Event::where('lead_date', '=', date(''))->get();
        foreach($events as $event){
            $users = User::where('event_id', '=', $event->id)->get();
            foreach($users as $user){
                Mail::to($user->email)->send(new EventReminder($event));
            }
        }
      
    }
}
