
function GetConditionText (code)
{
      var text;
      switch (code)
      {
        case 0:
	            text = 'Tornado';
	            break;
        case 1:
                text = 'Tropical Storm';
	              break;
        case 2:
                text = 'Hurricane';
                break;
        case 3:
                text = 'Severe Thunderstorms';
	              break; 
        case 4:
	             text = 'Thunderstorms';
	             break;
        case 5:
	              text = 'mixed rain and snow';
	              break;
         case 6:
               text =  'mixed rain and sleet';
               break;
         case 7:	
	             text = 'mixed snow and sleet';
	             break;
         case 8:
                text = 'Freezing Drizzle';
                break;
         case  9:
	              text = 'Drizzle';
                break;
        case 10:	
	              text = 'Freezing Rain';
	              break;
        case 11: case 12:
	                  text = 'Showers';
	                  break; 	
        case 13:	
                 text = 'Snow Flurries';
                  break;
        case 14:
          	    text = 'light snow showers';
	               break;	
        case 15:	
	               text = 'Blowing Snow';
                 break;
        case 16:
                  text  = 'Snow';
                  break;
        case 17:
                 text = 'Hail';
	               break;
        case 18:
                text = 'Sleet';
                break; 
        case 19:
	              text = 'Dust';
                break;
         case 20:
                text = 'Foggy';
                break;
         case 21:
	               text = 'Haze';
                 break;

          case 22:
                  text = 'Smoky';
                  break;
          case 23:	
                  text = 'Blustery';
                  break;
          case 24:
                  text = 'Windy';
                  break;
          case 25:
                  text = 'Cold';
                  break;
          case 26:  
                 text = 'Cloudy';
                 break;
        case 27:
                  text  = 'Mostly Cloudy (night)';
                  break;
        case 28:
                 text = 'Mostly Cloudy';
                 break;
        case 29:
                text = 'Partly Cloudy (night)';
                break; 
        case 30: case 44:
                text = 'Partly Cloudy';
                break;
         case 31:
                text = 'Clear (night)';
                break;
         case 32:
                 text = 'Sunny';
                 break;

          case 33:
                  text = 'Fair (night)';
                  break;
          case 34:  
                  text = 'Fair';
                  break;
          case 35:
                  text = 'mixed rain and hail';
                  break;
          case 36:
                  text = 'Hot';
                  break;
          case 37: case 47:
                text = 'Isolated Thunderstorms';
                break;
         case 38: case 39:
                 text = 'Scattered Thunderstorms';
                 break;

          case 40:
                  text = 'Scattered Showers';
                  break;
          case 41: case 43: 
                  text = 'Heavy Snow';
                  break;
          case 42:
                  text = 'scattered snow showers';
                  break;
          case 45:
                  text = 'Thundershowers';
                  break;

          case 46:
                  text = 'Snow Showers';
                  break;

          default:
                  text = 'not available';
                  break;   

          }

        return text;                   

   };

   function GetImg (weather_condition) {

    var img_url;

  switch (weather_condition)
   {
    case "Sunny": 
                img_url = "<img src = 'tick/sunny.png' width='40' height='50'>"; 
                break;
    case "Mostly Sunny": 
                        img_url = "<img src = 'tick/cloudy2.png' width='40' height='50'>";
                        break;
    case "Mostly Cloudy": 
                      img_url = "<img src = 'tick/cloudy5.png' width='40' height='50'>";
                      break;
    case "Partly Cloudy": 
                         img_url = "<img src = 'tick/cloudy4.png' width='40' height='50'>";
                         break;
    case "Cloudy":
                   img_url = "<img src = 'tick/overcast.png' width='40' height='50'>";
                   break;
    case "Fair":
                 img_url = "<img src = 'tick/cloudy1.png' width='40' height='50'>";
                  break;   
    case "Showers": 
                    img_url = "<img src = 'tick/shower3.png' width='40' height='50'>";
                    break;
    case "Thunderstorms": 
                        img_url = "<img src = 'tick/tstorm3.png' width='40' height='50'>";
                        break;
    case "Scattered Thunderstorms": case "Isolated Thunderstorms": case "Scattered Showers":
                                  img_url = "<img src = 'tick/light_rain.png' width='40' height='50'>";
                                  break; 
    case "Snow":
               img_url = "<img src = 'tick/snow4.png' width='40' height='50'>";
    default: 
              img_url = weather_condition;
              break; 
    }

    return img_url;

  };

