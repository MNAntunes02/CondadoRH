import { Injectable } from '@angular/core';
import { Usuario } from './user';

import { Router } from '@angular/router';

import { GoogleAuthProvider , updateProfile , getAuth  } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsuarioCompleto } from 'src/app/interface/usuario-completo';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Firestore, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';

import{ getStorage , ref , uploadBytes  } from '@angular/fire/storage'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  private readonly LS_CHAVE:string = "usuarioLogado";

  constructor(
    private fireauth: AngularFireAuth,
    private firestore: Firestore,
    private router: Router,
    private _snackBar: MatSnackBar
  ){

    
  }

  // abrir snackbar
  openSnackBar(message: string) {
    this._snackBar.open(message , '' , {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'red-snackbar'
    });
  }

  // status do usuarios, logado ou não logado
  statusAuth() : boolean{
    return this.usuarioAutenticado;
  }

  // registrar usuario no localstorage
  usuarioLogado(){
    let usu = localStorage[this.LS_CHAVE]
    return (usu ? JSON.parse(localStorage[this.LS_CHAVE]) : null)
  }

  //login com google
  googleSingIn(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then( async res => {
      localStorage.setItem('photo', JSON.stringify(res.user?.photoURL));
      localStorage.setItem('name', JSON.stringify(res.user?.displayName));
      localStorage.setItem('email', JSON.stringify(res.user?.email));
      this.router.navigate(['']);
      this.openSnackBar("Usuario logado com sucesso!")

    //salvar informação no firestore
    const usuarios = collection(this.firestore,'usuarios')
    const document = doc(usuarios , res.user?.uid);
    await setDoc(document, {
      nome:res.user?.displayName,
      email:res.user?.email,
      photoURL:res.user?.photoURL,
      curriculoID:""
    })

    }, err => {
      this.openSnackBar("Erro ao logar com Google")
    })
  }

  // login com email e senha
  async login( usuario: Usuario ) {
    await this.fireauth.signInWithEmailAndPassword(usuario.email,usuario.senha).then( res => {
      if(res.user?.emailVerified == true) {
          localStorage.setItem('photo', JSON.stringify(res.user?.photoURL));
          localStorage.setItem('name', JSON.stringify(res.user?.displayName));
          localStorage.setItem('email', JSON.stringify(res.user?.email));
          this.router.navigate(['/home']);
          this.openSnackBar("Usuario logado com sucesso!");
        } else {
          this.router.navigate(['/verificar-email']);
        }
      }, err => {
        this.openSnackBar("Erro ao tentar logar");
        this.router.navigate(['/login']);
    })
  }

  // sign out
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      localStorage.removeItem('photo');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }, err => {
      this.openSnackBar("Erro ao fazer logout")
    })
  }
  
  // registrar email e senha
  register( usuario:UsuarioCompleto ) {
    this.fireauth.createUserWithEmailAndPassword( usuario.email, usuario.senha).then( async res => {
      //notificação de sucesso
      this.openSnackBar("Registro realizado com sucesso!")

      //atualizar nome do usuario no authentication
      const auth = getAuth();
      if(auth.currentUser !== null){
        updateProfile( auth.currentUser , {displayName:usuario.nome} )
      }

      //salvar informação no firestore
      const usuarios = collection(this.firestore,'usuarios')
      const document = doc(usuarios , res.user?.uid);
      await setDoc(document, {
        nome:usuario.nome,
        email:usuario.email,
        photo: "",
        curriculoID:""
      })

      //mandar email de verificação
      this.sendEmailForVarification(res.user);

      //voltar a tela de login caso registrado
      this.router.navigate(['/login']);

    }, err => {
      alert(err.message);
      this.router.navigate(['/cadastro']);
    })
  }

  // esqueceu a senha
  forgotPassword(email : string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/verificar-email']);
    }, err => {
      this.openSnackBar("Digite email valido!");
    })
  }
  
  // verificar email
  sendEmailForVarification(user : any) {
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/verificar-email']);
    }, (err : any) => {
      this.openSnackBar("Algo deu errado. Não é possível enviar e-mail para o seu e-mail.");
    })
  }
  

  // salvar curriculo no Storage
  // criar id de referencia no firestore do usuario especifico
  uploadCurriculo(fileRoute:File, fileName:string){
    
    const auth = getAuth();
    const user = auth.currentUser;
    const storage = getStorage();
    const storageRef = ref(storage, fileName);    
    
    uploadBytes(storageRef, fileRoute).then(async (snapshot) => {
      
      const usuarios = collection(this.firestore,'usuarios')
      // const token = localStorage.getItem("token")
      // const docUsuario = query(usuarios, where("email", "==", user?.email));

      if (user?.uid !== null) {
        const docRef = doc(usuarios, user?.uid);
        const docSnap = await getDoc(docRef);
        await updateDoc(docRef, {
          curriculoID: snapshot.ref.fullPath
        })
      }

      this.openSnackBar("Curriculo atualizado com sucesso!");
      this.router.navigate(['/home']);

    },(e) => {
      this.openSnackBar("Algo deu errado, tente novamente mais tarde");
    });

  }



}
