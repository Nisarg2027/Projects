    #include <bits/stdc++.h>
using namespace std;
class heap
{
public:
    int arr[100];
    int size;
    heap()
    {
        // this->arr.resize(n);
        size = 0;
    }
    void insert(int val)
    {
        size++;
        int index = size;
        arr[index] = val;
        while (index > 1)
        {
            int parent = index / 2;
            if (arr[parent] < arr[index])
            {
                swap(arr[parent], arr[index]);
                index = parent;
            }
            else
            {
                break;
            }
        }
    }
    void delet()
    {
        arr[1] = arr[size];
        size--;
        int index = 1;

        while (index<size)
        {
            if (arr[index * 2] > arr[index] and arr[index * 2] > arr[index * 2 + 1]  and index * 2 < size)
            {
                swap(arr[index], arr[index * 2]);
                index = index * 2;
            }
            else if (arr[index * 2 + 1] > arr[index] and arr[index * 2 + 1] > arr[index * 2 ]  and index * 2 + 1< size)
            {
                swap(arr[index], arr[index * 2 + 1]);
                index = index * 2 + 1;
            }
            else {
                break;
            }
        }
    }
    void heapify(vector<int> &v , int i , int l){
        int largest = i;
        int left = largest*2+1;
        int right = largest*2+2;
        if(left<l and v[largest]<v[left]){
            largest=left;
        }
        if(right<l and v[largest]<v[right]){
            largest=right;
        }
        if(largest!=i){
            swap(v[largest],v[i]);
            heapify(v,largest,l );
        }

    }
    void heapsort(vector<int> &v , int l){
        int i = l;
        while(i>0){
            swap(v[0],v[i]);
            heapify(v,0,i);
            i--;
        }   
    }
    void display()
    {

        for (int i = 1; i <= size; i++)
        {
            cout << arr[i] << " ";
        }
    }
};

int main()
{
    heap h = heap();
    vector<int> v = {3, 20, 7, 110 ,220 ,2 ,8};
    for(int i = 2 ; i >= 0 ; i--){
        h.heapify(v,i,7);   
    }
    for(int i : v){
        cout<<i<<" ";
    }
    cout<<endl;
    // for(int i = 7-1 ; i > 0 ;i-- ){
        h.heapsort(v,6);
    // }
    for(int i : v){
        cout<<i<<" ";
    }
}