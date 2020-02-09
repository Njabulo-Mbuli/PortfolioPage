function persistence(num,count=0) {
   let arrNums = num.toString().split('');
   let holder = 1;

   holder=arrNums.map(value=>holder*value);

   if(holder.toString().length==1){
   		return count;
   }else{
   		count++;
   		return persistence(holder,count);
   }

}

console.log(persistence(39));

// nasa api_key: 7iCr77AbwYexDHksHxvcl8RgawbNnpeX2JUv9NcL

// Available APIs:
// ================
// APOD (Astronomy Picture of the Day)
// 	-This api endpoint gives you the picture of the day
// 	which would be a  picture of stars or a planet or something
// InSight: Mars Weather Service
// 	-This is a mars weather service... It shows what the weather
// 	was for the past 7 soltices(mars days)
// Nasa image and video library
// 	-This Api end point provides pictures, and i think videos with
// 	descriptions titles, dates and other things that you can view. 