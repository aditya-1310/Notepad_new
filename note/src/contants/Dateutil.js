const dateFormatter = new Intl.DateTimeFormat("en-In",{
    // dateStyle:"medium",
    hour12:true,
    hour:"numeric",
    minute:"numeric",
    year:"numeric",
   month:"short",
   day:"2-digit"
   
    

});
export const formateDate  = (Date) => dateFormatter.format(Date);