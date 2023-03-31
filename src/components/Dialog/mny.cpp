#include<iostream>
using namespace std;
int main()
{
    int x,y,z,total;
    float avg;
    cout<<"Take the number of subject"<<endl;
    cin>>x>>y>>z;
    total=x+y+z;
    avg=total/3.0;
    if(avg>60){
cout<<"A"<<endl;
    }
    else if(avg>35 && avg<60){
        cout<<"B"<<endl;
    }
    else{
        cout<<"C"<<endl;
    }
    return 0;
}