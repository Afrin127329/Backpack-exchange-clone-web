import Link from "next/link";

import { Button } from "@/packages/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/packages/components/ui/card";
import { Input } from "@/packages/components/ui/input";
import { Label } from "@/packages/components/ui/label";
import Image from "next/image";
import { Icons } from "./ui/icons";

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

export const iframeHeight = "600px";

export const containerClassName =
  "w-full mt-6 flex items-center justify-center px-4";

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm w-full lg:w-1/3">
      <CardHeader className="flex flex-col justify-center items-center px-6 pt-6 pb-4">
        <CardDescription>
          <Image
            src={"/exchange-logo.png"}
            alt="Backpack clone logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </CardDescription>
        <CardTitle className="text-2xl pt-4">Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter Email" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              type="password"
              required
              placeholder="Enter Password"
            />
          </div>
          <Button className="w-full shadow-lg text-xl">Login</Button>
          <Button
            variant="outline"
            className="w-full shadow-lg flex gap-2 items-center justify-center"
          >
            Login with Google <Icons.google className="w-4 h-4" />
          </Button>
        </div>
        <div className="mt-4 text-center text-xs flex justify-between items-center">
          <span>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blueText hover:opacity-90">
              Sign up
            </Link>
          </span>

          <Link
            href="#"
            className="ml-auto inline-block text-blueText hover:opacity-90"
          >
            Forgot password?
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
