#include <bits/stdc++.h>
using namespace std;
class trienode{
    public:
    char data;
    trienode* children[26];
    bool isterminal;
    trienode(char data){
        this->data = data;
        for(int i = 0 ; i < 26 ; i++){
            this->children[i]=NULL;
        }
        this->isterminal=false;
    }
};
class trie{
    public: 
    trienode* temp;
    trie(){
        this-> temp = new trienode('a');
    }
    void inserttrie(trienode* temp , string word){
        if(word.length()==0){
            temp->isterminal=true;
            return;
        }
        int index = word[0]-'a';
        trienode* child;
        if(temp->children[index]!=NULL){
            child = temp->children[index];
        }
        else{
            child =  new trienode(word[0]);
            temp->children[index]=child;
        }
        cout<<word.length()<<" ";
        inserttrie(child,word.substr(1));
    }
    bool searchtrie(trienode* temp , string &word){
        
        if(temp==NULL){
            return false;
        }
        else if(word.length()==0){
            return temp->isterminal;
        }
        int index = word[0]-'a';
        trienode* child = temp->children[index];
        word = word.substr(1);
        return searchtrie(child,word);
    }
    void insert(string word){
        inserttrie(temp,word);
    }
    bool search(string word){
        return searchtrie(temp,word);
    }

};
int main(){
    trie* root = new trie();
    
    root->insert("abadfsafcd");cout<<endl;
    root->insert("abadfadfascd");cout<<endl;
    root->insert("aagdsfgfcd");cout<<endl;
    root->insert("fgsdffsafcd");cout<<endl;
    root->insert("fgdfgfsafcd");cout<<endl;
    root->insert("abadfgdfg");cout<<endl;
    bool b = root->search("fasdfgad");
    // cout<<b;
    

    return 0;
}