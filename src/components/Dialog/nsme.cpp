#include<iostream>
using namespace std;
 int main()
 {
    int hour;
    cout<<"Enter the hours";
    cin>>hour;
    if(hour>=9 && hour<=18){
        cout<<"it is working time";
    }
    else{
        cout<<"lexure";
    }
    return 0;
 }