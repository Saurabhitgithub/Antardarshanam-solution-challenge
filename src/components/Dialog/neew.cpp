#include<iostream>
using namespace std;
struct Rectangle r
{
    int length;
    int breadth;
}
int main(){
    struct Rectangle r=(10,5);
    struct Rectangle *p=40;
    r.length = 15;
(*p).length=20;
}