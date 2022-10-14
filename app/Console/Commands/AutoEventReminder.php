<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Event;
use App\Models\User;
use App\Mail\EventReminder;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;

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
      
        $events = Event::where('lead_date', '=', today()->format('Y-m-d'))
                ->with('frequency','activities.user')
                ->get();
        // dd($events);
        foreach($events as $event){
            $users = $event->users;
    
            foreach($users as $user){
                Mail::to($user->email)->send(new EventReminder($event , $user));
            }
        }
         $this->updateLeadDate($events);
    
}
 
private function updateLeadDate($events){
    foreach($events as $event){
        $frequency = $event->frequency->name;
         $original_lead_date = Carbon::parse($event->lead_date);
         $original_start_date = Carbon::parse($event->start_date);
        if($frequency == 'daily'){
            $event->lead_date = $original_lead_date->addDays(1);
            $event->start_date = $original_start_date->addDays(1);
            $event->save();
        }
        if($frequency == 'weekly'){
            $event->lead_date = $original_lead_date->addWeeks(1);
            $event->start_date = $original_start_date->addWeeks(1);
            $event->save();
        }
        if($frequency == 'monthly'){
            $event->lead_date = $original_lead_date->addMonths(1);
            $event->start_date = $original_start_date->addMonths(1);
            $event->save();
        }
        if($frequency == 'yearly'){
            $event->lead_date = $original_lead_date->addYears(1);
            $event->start_date = $original_start_date->addYears(1);
            $event->save();
        }
        // if($frequency == 'custom'){
        //     $event->lead_date = $event->lead_date->addDays($event->frequency->days);
        //     $event->start_date = $event->start_date->addDays($event->frequency->days);
        //     $event->save();
        // }
    }
    
        
}

}
