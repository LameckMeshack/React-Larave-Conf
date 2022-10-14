
<h2>{{$event->name}} is closing in!!!</h2> 

<p>Hi {{$user->name}},</p>
<br>
<p>Event <span class="bg-blue-400">{{$event->name}} </span>is coming up on {{$event->start_date}} . To prepare for the event, the following actions are required</p>

@foreach($event->activities  as $activity)
    <p>{{$activity->name ?? ''}} - {{$activity->user ? $activity->user->name : ''}}</p>

    @endforeach
Thank you