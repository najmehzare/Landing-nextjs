import Link from "next/link";
import ButtonOutline from "../misc/button-outline.";

const Sign = () => {
    return (
        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  Sign In
              </a>
            </Link>
            <ButtonOutline>Sign Up</ButtonOutline>
          </div>
    )
}

export default Sign;