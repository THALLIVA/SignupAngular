import * as firebase from 'firebase'
import {Injectable} from '@angular/core'
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';




@Injectable()

export class AuthService{

    signup(email:string, password:string )
    {
        // username = username + "@gmail.com";
        // password = password + "";
        
        console.log(email,password)

        //this.setState({ error: '', loading: true });
        //firebase.auth().creatWithEmailAndPassword(username, password).catch();
        firebase.auth().createUserWithEmailAndPassword(email,password).catch()

        error => console.log(error);

        
    };

    adddatabase(name : string , address : string , email : string ,password : string) //email:string, password:string
    {
        var db = firebase.firestore();

        console.log(name);

        db.collection("users").add({
            name: name ,
            address :address , 
            email  : email,
            password : password

        });    
    }

    login( email: string , password : string)
   {
       console.log(email,password)

        firebase.auth().signInWithEmailAndPassword(email ,password).then(

            response => console.log("Login Success")
        ).catch()
    };


}