#include<iostream>
using namespace std;
int main(){
    int x,y,z;
    cout<<"Enter the Two number "<<endl;
    cin>>x>>y;
    if(y==0){
        cout<<"y is divided by zero"<<endl;
    }
    else{
        z=x/y;
        cout<<z<<endl;
    }
    return 0;
}