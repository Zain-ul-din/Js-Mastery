import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  Auth,
  UserCredential,
} from "firebase/auth";
import firebaseConfig from "./firebaseconfig";

const app: FirebaseApp = initializeApp(firebaseConfig);
const gitHubProvider: GithubAuthProvider = new GithubAuthProvider();

export const auth: Auth = getAuth(app);
export async function SignWithGitHub(): Promise<UserCredential> {
  return signInWithPopup(auth, gitHubProvider);
}
