import React from "react";
import { getAuth, signInWithPopup,FacebookAuthProvider , GoogleAuthProvider } from "firebase/auth";
import firebaseInit from "@/libs/firebase";
import AppleLogo from "@/assets/apple.png";
import TwitterLogo from "@/assets/twitter.png";
import FbLogo from "@/assets/fb.png";
import GoogleLogo from "@/assets/google.png";
import Image from "next/image";
function SocialSignin() {
  const googleLogin = async () => {
    await firebaseInit();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
   
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const facebookLogin = async () => {
    await firebaseInit();
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
   
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="text-white text-center mb-10">
      <div>
        <p className="text-sm font-light">Or, Sign in using</p>
        <div className="flex justify-center">
          <div className="flex items-center gap-4 mt-2">
            <div onClick={googleLogin} className="cursor-pointer">
              <Image src={GoogleLogo} className="w-[40px]" />
            </div>
            <div onClick={facebookLogin} className="cursor-pointer">
              <Image src={FbLogo} className="w-[32px]" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialSignin;
