!function(){"use strict";function r(a,e,s,u){var l,c=e[0].length-1,n=e.length-1;switch(s){case"lr":for(var o=u;o<=c-u;o++)a.push(e[u][o]);l="ud";break;case"ud":for(var t=u+1;t<=n-u;t++)a.push(e[t][c-u]);l="rl";break;case"rl":for(var h=c-1-u;h>=u;h--)a.push(e[n-u][h]);l="du";break;case"du":for(var f=n-1-u;f>=1+u;f--)a.push(e[f][u]);l="lr"}if(a.length===(c+1)*(n+1))return a;"lr"===l&&u++,r(a,e,l,u)}var a;console.log((r(a=[],[[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19]],"lr",0),a))}();