function bubblesort(a,N) {
    var i=j=v=0;
    for(i=1;i<N;i++){
        v=a[i];
        j=i;
        while(j>0 && a[j-1]>v) {
            a[j]=a[j-1];
            j--;
        };
        a[j]=v;
        
    }
    for(i=0;i<a.length;i++){
        
    };
};
    var x = [9,4,5,2,1,6,7,0,3];
    document.write("<div><p>Input before bubble sort: "+x+"</p>");
    bubblesort(x,9);
    document.write("<p>Input after bubble sort: "+x+"</p></div>");