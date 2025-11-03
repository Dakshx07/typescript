type EvenetType='click' | 'hover' | 'focus'
type ExludeEventType=Exclude<EvenetType,'click'>

function handleEvent(event : ExludeEventType){
    console.log("handling event " + event);
}

handleEvent('focus');
handleEvent('hover');
